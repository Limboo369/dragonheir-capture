# Dragonheir Capture

Mali Windows program koji prati prozor igre **Dragonheir: Silent Gods**, svakih 5 sekundi tiho napravi snimak samo tog prozora, i iz snimaka puni lokalnu bazu sa stanjem naloga: heroji (level, zvjezdice, statovi, skilovi), oprema, artefakti, resursi. Na kraju pravi fajl `dragonheir-account.json` koji se uvozi u **Dragonheir Companion** aplikaciju.

Program samo gleda sliku prozora, kao screenshot. Ne čita memoriju igre, ne dira fajlove igre i ne klikće ništa.

## Kako radi

1. Izabereš prozor igre sa liste otvorenih prozora i klikneš **Start**.
2. Svakih 5 s program uslika prozor (radi i kad je igra iza drugih prozora, bez krađe fokusa).
3. Šalje Claude-u samo **nove i mirne** ekrane: ekran se mora držati bar 10 s (borbe i animacije se preskaču) i mora se razlikovati od već pročitanih (perceptual hash).
4. Claude pročita ekran i vrati podatke; program ih spoji sa bazom (noviji podatak pobjeđuje).
5. Slika se **briše čim je pročitana**. U bazi ostaje samo tekst. Ako čitanje ne uspije (npr. nema interneta), slika čeka kao mali JPEG u `data\pending` i briše se nakon uspješnog ponovnog pokušaja.

## Instalacija (bez programiranja)

**Opcija A: gotov .exe** (kad ga napravim i stavim na GitHub, pod *Releases*)
1. Skini `DragonheirCapture.exe` i `.env.example` u jedan folder.
2. Pokreni `DragonheirCapture.exe`. Pri prvom Start-u traži API ključ; zalijepi ga i to je to.

**Opcija B: preko Pythona**
1. Instaliraj Python 3.12 sa https://www.python.org/downloads/ i **obavezno štikliraj "Add python.exe to PATH"**.
2. Skini ovaj repo (zeleno dugme *Code* → *Download ZIP*) i raspakuj.
3. Dvoklik na `run.bat`. Prvi put instalira sve (1–2 min), zatim otvara program.
4. Klikni **Start**, zalijepi API ključ kad ga traži.

Sam .exe možeš napraviti dvoklikom na `build_exe.bat` (rezultat je u folderu `dist`).

## API ključ

Napravi ključ na https://console.anthropic.com/settings/keys. Čuva se samo u fajlu `.env` na tvom računaru, nikad u aplikaciji ni na GitHub-u (`.env` je u `.gitignore`).

## Podešavanja (`.env`)

| Postavka | Default | Značenje |
|---|---|---|
| `MODEL` | `claude-opus-5-5` | Najtačniji. `claude-haiku-5-5` je ~30× jeftiniji, ali može pogriješiti sitne brojeve. |
| `MODE` | `api` | `collect` = bez API-ja, samo čuva jedinstvene ekrane kao JPEG. |
| `INTERVAL_SECONDS` | `5` | Koliko često slika. |
| `MAX_CALLS_PER_HOUR` | `120` | Gornja granica čitanja na sat. |
| `DAILY_BUDGET_USD` | `3.00` | Staje sa čitanjem kad dnevna potrošnja dođe do ovoga. |
| `KEEP_IMAGES` | `false` | `true` = čuva pročitane slike u `data\captures`. |
| `JPEG_QUALITY` | `80` | Kompresija slike. |

## Koliko košta

Plaćaju se samo ekrani koje Claude stvarno pročita (borbe, loading i ponovljeni ekrani su besplatni).

| Model | Po ekranu | Sat pregledanja menija (~40–120 ekrana) |
|---|---|---|
| claude-opus-5-5 | ~$0.03 | ~$1–4 (dnevni limit $3 po defaultu) |
| claude-haiku-5-5 | ~$0.0015 | ~$0.05–0.20 |

Procjena: slika ~1 600×900 px ≈ 2 000 tokena ulaza, ~1 000 tokena izlaza; cijene Opus 5.5 $4/$20, Haiku 5.5 $0.10/$0.50 po milion tokena. Tačna potrošnja se vidi u programu.

## Savjet za najbolje podatke

Polako prođi kroz ekrane koji te zanimaju i zadrži svaki bar 10 sekundi: lista heroja, detalji svakog heroja, oprema, artefakti, inventar. Ostatak igre igraj normalno.

## Uvoz u Dragonheir Companion

Fajl: `data\dragonheir-account.json` (dugme 📁 otvara folder). U aplikaciji: **Import** → izaberi taj fajl.

## Fajlovi

- `data\dragonheir.db`: SQLite baza (svi pročitani ekrani + spojeno stanje naloga)
- `data\dragonheir-account.json`: izvoz za aplikaciju
- `dhcapture\known_names.json`: imena heroja/artefakata/setova (AllClash S9, okt. 2026) da Claude piše imena tačno
