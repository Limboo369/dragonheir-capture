# Server layout and texts. Edit names here; setup-server.ps1 reads this file.
# access: public = everyone, readonly = everyone reads / officers write,
#         guild = guild roles only, guildann = guild reads / officers write, officers = Leader + Officer

$GuildName = 'our guild'

$Layout = @(
    @{ name = '👋 WELCOME'; access = 'readonly'; channels = @(
        @{ key = 'welcome';     name = '👋・welcome';     topic = 'Start here' },
        @{ key = 'rules';       name = '📜・rules';       topic = 'Read before chatting' },
        @{ key = 'recruitment'; name = '📝・recruitment'; topic = 'Want to join? Post your in-game name, level and server here'; access = 'public' }
    )},
    @{ name = '📢 GUILD'; access = 'guild'; channels = @(
        @{ key = 'announcements'; name = '📢・announcements';   topic = 'Important news from Leader and Officers'; access = 'guildann' },
        @{ key = 'events';        name = '📅・events-calendar'; topic = 'Guild events, boss times, season dates'; access = 'guildann' },
        @{ key = 'general';       name = '💬・general';         topic = 'Guild chat' },
        @{ key = 'screenshots';   name = '🖼️・screenshots';     topic = 'Show your pulls, wins and builds' }
    )},
    @{ name = '⚔️ DRAGONHEIR'; access = 'guild'; channels = @(
        @{ key = 'teamhelp'; name = '🛡️・team-help';       topic = 'One post per question: teams, gear, heroes. Add a tag.'; forum = $true
           tags = @(@('Team','🛡️'), @('Gear','💍'), @('Heroes','🦸'), @('Beginner','🌱'), @('PvP','⚔️')) },
        @{ key = 'bosses';   name = '🐉・boss-strategies'; topic = 'One post per boss or mode. Share teams that worked.'; forum = $true
           tags = @(@('Boss','🐉'), @('Dungeon','🏰'), @('Event','🎉'), @('Sparkle Tournament','🚩'), @('Alliance Rally','🌀')) },
        @{ key = 'pulls';    name = '🎲・summons';         topic = 'Banner talk and pull results' }
    )},
    @{ name = '🎉 OFF-TOPIC'; access = 'guild'; channels = @(
        @{ key = 'offtopic'; name = '🎮・off-topic'; topic = 'Anything not Dragonheir' }
    )},
    @{ name = '🔊 VOICE'; access = 'guild'; channels = @(
        @{ name = '🔊 Guild Voice'; voice = $true },
        @{ name = '⚔️ Sparkle Tournament'; voice = $true }
    )},
    @{ name = '🔒 OFFICERS'; access = 'officers'; channels = @(
        @{ key = 'officerchat'; name = '🔒・officer-chat'; topic = 'Leader and Officers only' },
        @{ name = '🔒 Officer Voice'; voice = $true }
    )}
)

$Posts = @{
    welcome = @(@{
        title = '👋 Welcome to the guild!'
        color = 0xF1C40F
        description = "We play **Dragonheir: Silent Gods** together.`n`n**1.** Read the rules in {rules}`n**2.** Introduce yourself in {recruitment} with your in-game name and level`n**3.** You get the **Recruit** role automatically and the guild channels open`n`nHave fun and good luck with your pulls! 🐉"
    })
    rules = @(@{
        title = '📜 Guild rules'
        color = 0x9B59B6
        description = "**1.** Be respectful. No insults, racism or harassment.`n**2.** No spam, ads or selling accounts.`n**3.** Use the right channel for each topic.`n**4.** Take part in guild activities when you can, and tell an Officer if you'll be away for a while.`n**5.** Help newer players, we were all beginners once.`n**6.** Leader and Officers have the final word.`n`n**Roles**`n👑 **Leader** runs the guild`n🛡️ **Officer** helps run the guild and events`n⚔️ **Member** full guild member`n🌱 **Recruit** new, trial period"
    })
    recruitment = @(@{
        title = '📝 Want to join?'
        color = 0x2ECC71
        description = "Post here:`n• In-game name`n• Player level`n• Server`n• Time zone / when you usually play`n`nAn Officer will reply soon."
    })
}
