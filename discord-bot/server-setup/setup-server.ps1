# Dragonheir guild Discord server builder.
# Creates roles, categories, channels and the welcome/rules posts through the Discord REST API.
# The bot token is typed in at the prompt and is never written to disk.

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$Api = if ($env:DH_API) { $env:DH_API } else { 'https://discord.com/api/v10' }

# ---------- permission bits ----------
$P = @{
    CreateInvite   = [int64]1
    Kick           = [int64]1 -shl 1
    Ban            = [int64]1 -shl 2
    Admin          = [int64]1 -shl 3
    ManageChannels = [int64]1 -shl 4
    AddReactions   = [int64]1 -shl 6
    View           = [int64]1 -shl 10
    Send           = [int64]1 -shl 11
    ManageMessages = [int64]1 -shl 13
    Embed          = [int64]1 -shl 14
    Attach         = [int64]1 -shl 15
    History        = [int64]1 -shl 16
    MentionAll     = [int64]1 -shl 17
    ExtEmoji       = [int64]1 -shl 18
    Connect        = [int64]1 -shl 20
    Speak          = [int64]1 -shl 21
    Mute           = [int64]1 -shl 22
    Move           = [int64]1 -shl 24
    VoiceActivity  = [int64]1 -shl 25
    ChangeNick     = [int64]1 -shl 26
    ManageNicks    = [int64]1 -shl 27
    ManageEvents   = [int64]1 -shl 33
    ManageThreads  = [int64]1 -shl 34
    PublicThreads  = [int64]1 -shl 35
    ThreadSend     = [int64]1 -shl 38
    Timeout        = [int64]1 -shl 40
    CreateEvents   = [int64]1 -shl 44
}
function Bits([string[]]$names) { $v = [int64]0; foreach ($n in $names) { $v = $v -bor $P[$n] }; "$v" }

$BasicPerms = @('CreateInvite','AddReactions','View','Send','Embed','Attach','History','ExtEmoji',
                'Connect','Speak','VoiceActivity','ChangeNick','PublicThreads','ThreadSend')
$OfficerPerms = $BasicPerms + @('Kick','ManageMessages','MentionAll','Mute','Move','ManageNicks',
                'ManageEvents','ManageThreads','Timeout','CreateEvents')

# ---------- texts ----------
. (Join-Path $PSScriptRoot 'texts.ps1')

# ---------- HTTP helper ----------
$script:Headers = $null
function Call($method, $path, $body = $null) {
    for ($try = 0; $try -lt 5; $try++) {
        try {
            $req = @{ Method = $method; Uri = "$Api$path"; Headers = $script:Headers }
            if ($null -ne $body) {
                $json = ConvertTo-Json -InputObject $body -Depth 10 -Compress
                $req.Body = [System.Text.Encoding]::UTF8.GetBytes($json)
                $req.ContentType = 'application/json; charset=utf-8'
            }
            $r = Invoke-RestMethod @req
            Start-Sleep -Milliseconds 350
            return $r
        } catch {
            $code = 0
            if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode }
            if ($code -eq 429) { Start-Sleep -Seconds 3; continue }
            $detail = $_.ErrorDetails.Message
            throw "Discord API error $code on $method $path. $detail"
        }
    }
    throw "Discord kept rate-limiting $method $path"
}

function Ask-YesNo($question) {
    $a = Read-Host "$question (y/n)"
    return $a -match '^(y|yes|d|da)$'
}

Write-Host ''
Write-Host '=== Dragonheir guild Discord builder ===' -ForegroundColor Cyan
Write-Host ''

# ---------- token ----------
if ($env:DH_TOKEN) { $token = $env:DH_TOKEN } else {
    $secure = Read-Host 'Paste the BOT TOKEN (right-click to paste; it stays hidden) and press Enter' -AsSecureString
    $token = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)).Trim()
}
$script:Headers = @{ Authorization = "Bot $token"; 'User-Agent' = 'DiscordBot (dragonheir-guild-setup, 1.0)' }

try { $me = Call GET '/users/@me' } catch {
    Write-Host 'The token was not accepted. Copy it again from the Bot page (Reset Token) and rerun.' -ForegroundColor Red
    Read-Host 'Press Enter to close'; exit 1
}
Write-Host "Logged in as bot: $($me.username)" -ForegroundColor Green

# ---------- pick server ----------
$guilds = @(Call GET '/users/@me/guilds')
if ($guilds.Count -eq 0) {
    Write-Host 'The bot is not in any server yet. Open the invite link, add it to your server, then rerun.' -ForegroundColor Red
    Read-Host 'Press Enter to close'; exit 1
}
if ($guilds.Count -eq 1) { $guild = $guilds[0] } else {
    for ($i = 0; $i -lt $guilds.Count; $i++) { Write-Host "  [$($i + 1)] $($guilds[$i].name)" }
    $n = [int](Read-Host 'Which server number?')
    $guild = $guilds[$n - 1]
}
$G = $guild.id
Write-Host "Server: $($guild.name)" -ForegroundColor Green

# ---------- clean default channels on a fresh server ----------
$existing = @(Call GET "/guilds/$G/channels")
if ($existing.Count -gt 0 -and $existing.Count -le 6) {
    Write-Host ''
    Write-Host 'The server already has these channels:'
    $existing | ForEach-Object { Write-Host "  - $($_.name)" }
    if (Ask-YesNo 'Delete them so only the new layout remains?') {
        foreach ($c in $existing) { Call DELETE "/channels/$($c.id)" | Out-Null }
        $existing = @()
    }
}

# ---------- roles ----------
Write-Host ''
Write-Host 'Creating roles...' -ForegroundColor Cyan
Call PATCH "/guilds/$G/roles/$G" @{ permissions = (Bits $BasicPerms) } | Out-Null   # @everyone

$roleDefs = @(
    @{ key = 'Leader';  name = 'Leader';  color = 0xF1C40F; perms = (Bits @('Admin')) },
    @{ key = 'Officer'; name = 'Officer'; color = 0x9B59B6; perms = (Bits $OfficerPerms) },
    @{ key = 'Member';  name = 'Member';  color = 0x3498DB; perms = (Bits $BasicPerms) },
    @{ key = 'Recruit'; name = 'Recruit'; color = 0x2ECC71; perms = (Bits $BasicPerms) }
)
$currentRoles = @(Call GET "/guilds/$G/roles")
$R = @{}
foreach ($d in $roleDefs) {
    $found = $currentRoles | Where-Object { $_.name -eq $d.name } | Select-Object -First 1
    if ($found) { $R[$d.key] = $found.id; Write-Host "  = $($d.name) (already there)"; continue }
    $role = Call POST "/guilds/$G/roles" @{ name = $d.name; color = $d.color; hoist = $true; mentionable = $true; permissions = $d.perms }
    $R[$d.key] = $role.id
    Write-Host "  + $($d.name)"
}
# Leader on top, Recruit at the bottom
$pos = @(); $rank = 4
foreach ($k in @('Leader','Officer','Member','Recruit')) { $pos += @{ id = $R[$k]; position = $rank }; $rank-- }
try { Call PATCH "/guilds/$G/roles" $pos | Out-Null } catch { Write-Host '  (could not reorder roles, you can drag them in Server Settings > Roles)' -ForegroundColor Yellow }

# ---------- permission overwrite presets ----------
$view = Bits @('View'); $send = Bits @('Send'); $none = '0'
function Ow($id, $allow, $deny) { @{ id = $id; type = 0; allow = $allow; deny = $deny } }
$guildRoles = @('Leader','Officer','Member','Recruit')
$Access = @{
    public   = @()                                                     # everyone sees and writes
    readonly = @( (Ow $G $none $send) ) +                              # everyone reads, officers write
               @('Leader','Officer' | ForEach-Object { Ow $R[$_] $send $none })
    guild    = @( (Ow $G $none $view) ) +                              # guild roles only
               @($guildRoles | ForEach-Object { Ow $R[$_] $view $none })
    guildann = @( (Ow $G $none (Bits @('View','Send'))) ) +            # guild sees, officers write
               @('Member','Recruit' | ForEach-Object { Ow $R[$_] $view $send }) +
               @('Leader','Officer' | ForEach-Object { Ow $R[$_] (Bits @('View','Send')) $none })
    officers = @( (Ow $G $none $view) ) +
               @('Leader','Officer' | ForEach-Object { Ow $R[$_] $view $none })
}

# ---------- categories and channels ----------
Write-Host ''
Write-Host 'Creating channels...' -ForegroundColor Cyan
$existing = @(Call GET "/guilds/$G/channels")
$Created = @{}
$catPos = 0
foreach ($cat in $Layout) {
    $c = $existing | Where-Object { $_.type -eq 4 -and $_.name -eq $cat.name } | Select-Object -First 1
    if (-not $c) {
        $c = Call POST "/guilds/$G/channels" @{ name = $cat.name; type = 4; position = $catPos; permission_overwrites = $Access[$cat.access] }
        Write-Host "  + [$($cat.name)]"
    } else { Write-Host "  = [$($cat.name)]" }
    $catPos++
    $chPos = 0
    foreach ($ch in $cat.channels) {
        $type = if ($ch.voice) { 2 } else { 0 }
        $old = $existing | Where-Object { $_.parent_id -eq $c.id -and $_.name -eq $ch.name } | Select-Object -First 1
        if ($old) { Write-Host "      = $($ch.name)"; $chPos++; continue }
        $acc = if ($ch.access) { $ch.access } else { $cat.access }
        $body = @{ name = $ch.name; type = $type; parent_id = $c.id; position = $chPos; permission_overwrites = $Access[$acc] }
        if ($ch.topic) { $body.topic = $ch.topic }
        if ($ch.forum) {
            $forum = $body.Clone(); $forum.type = 15
            $forum.available_tags = @($ch.tags | ForEach-Object { @{ name = $_[0]; emoji_name = $_[1] } })
            try { $new = Call POST "/guilds/$G/channels" $forum }
            catch {
                # retry with plain tags, then fall back to a text channel if forums are not allowed
                $forum.available_tags = @($ch.tags | ForEach-Object { @{ name = $_[0] } })
                try { $new = Call POST "/guilds/$G/channels" $forum }
                catch { $new = Call POST "/guilds/$G/channels" $body }
            }
        } else { $new = Call POST "/guilds/$G/channels" $body }
        if ($ch.key) { $Created[$ch.key] = $new.id }
        Write-Host "      + $($ch.name)"
        $chPos++
    }
}

# ---------- welcome / rules posts ----------
function Post-Embeds($channelId, $embeds) {
    foreach ($e in $embeds) {
        foreach ($k in $Created.Keys) { $e.description = $e.description.Replace("{$k}", "<#$($Created[$k])>") }
    }
    $msg = Call POST "/channels/$channelId/messages" @{ embeds = @($embeds) }
    try { Call PUT "/channels/$channelId/messages/pins/$($msg.id)" | Out-Null }
    catch { try { Call PUT "/channels/$channelId/pins/$($msg.id)" | Out-Null } catch {} }
}
foreach ($key in $Posts.Keys) {
    if ($Created[$key]) {
        Post-Embeds $Created[$key] $Posts[$key]
        Write-Host "  posted text in $key"
    }
}
if ($Created['welcome']) {
    try { Call PATCH "/guilds/$G" @{ system_channel_id = $Created['welcome'] } | Out-Null } catch {}
}

Write-Host ''
Write-Host 'Done! Open Discord and look at your server.' -ForegroundColor Green
Write-Host 'Tip: in the Developer Portal press Reset Token now, so the old token stops working.' -ForegroundColor Yellow
Read-Host 'Press Enter to close'
