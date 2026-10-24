# Dragonheir Capture

Mali Windows program koji prati prozor igre **Dragonheir: Silent Gods**, svakih 5 sekundi tiho napravi snimak samo tog prozora, i iz snimaka puni lokalnu bazu sa stanjem naloga: heroji (level, zvjezdice, statovi, skilovi), oprema, artefakti, resursi. Na kraju pravi fajl `dragonheir-account.json` koji se uvozi u **Dragonheir Companion** aplikaciju.

Program samo gleda sliku prozora, kao screenshot. Ne čita memoriju igre, ne dira fajlove igre i ne klikće ništa.

## Kako radi

1. Izabereš prozor igre sa liste otvorenih prozora i klikneš **Start**.
2. Svakih 5 s program uslika prozor (radi i kad je igra iza drugih prozora, bez krađe fokusa).
3. Šalje Claude-u samo **nove i mirne** ekrane: ekran se mora držati bar 10 s (borbe i animacije se preskaču) i mora se razlikovati od već pročitanih (perceptual hash).
4. **Brza provjera**: mala verzija slike ide Haiku-u samo da kaže tip ekrana. Samo ekrani sa podacima (heroji, oprema, artefakti, inventar, resursi, tim, profil) idu na puno čitanje.
5. Claude pročita ekran i vrati podatke; program ih spoji sa bazom (noviji podatak pobjeđuje).
6. Slika se **briše čim je pročitana**. U bazi ostaje samo tekst. Ako čitanje ne uspije (npr. nema interneta), slika čeka kao mali JPEG u `data\pending` i briše se nakon uspješnog ponovnog pokušaja.

## Instalacija (bez programiranja)

**Opcija A: gotov .exe** (GitHub → *Releases* → `DragonheirCapture.exe`)
1. Skini `DragonheirCapture.exe` u svoj folder.
2. Pokreni ga. Windows pita za administratorska prava: klikni **Yes**. To treba da F8 radi i dok si u igri (igra radi kao administrator, pa bez toga Windows ne pušta tastere do programa).
3. Pri prvom Start-u traži API ključ; zalijepi ga i to je to.

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
| `MODEL` | `claude-haiku-5-5` | Jeftin. `claude-opus-5-5` je tačniji za sitne brojeve, ali ~30× skuplji. |
| `PRECHECK` | `true` | Brza provjera tipa ekrana prije punog čitanja. |
| `AUTO` | `true` | `false` = čita samo kad pritisneš taster. |
| `HOTKEY` | `F8` | "Pročitaj ovaj ekran sada" (radi i dok je igra u fokusu). |
| `MODE` | `api` | `collect` = bez API-ja, samo čuva jedinstvene ekrane kao JPEG. |
| `INTERVAL_SECONDS` | `5` | Koliko često slika. |
| `MAX_CALLS_PER_HOUR` | `120` | Gornja granica čitanja na sat. |
| `DAILY_BUDGET_USD` | `1.00` | Staje sa čitanjem kad dnevna potrošnja dođe do ovoga. |
| `KEEP_IMAGES` | `false` | `true` = čuva pročitane slike u `data\captures`. |
| `JPEG_QUALITY` | `80` | Kompresija slike. |

## Koliko košta

Plaćaju se samo ekrani koje Claude stvarno pogleda. Borbe, loading i ponovljeni ekrani su besplatni, a ostali meniji koštaju samo brzu provjeru.

| | Po ekranu | Sat igre |
|---|---|---|
| Brza provjera (Haiku, mala slika) | ~$0.0001 | |
| Puno čitanje, claude-haiku-5-5 (default) | ~$0.001 | ~$0.05–0.15 |
| Puno čitanje, claude-opus-5-5 | ~$0.03 | ~$1–4 |

Sa Haiku-om $100 kredita traje stotinama sati igre. Dnevni limit je $1. Procjena: slika ~1 600×900 px ≈ 2 000 tokena ulaza, ~1 000 tokena izlaza; cijene po milion tokena: Haiku 5.5 $0.10/$0.50, Opus 5.5 $4/$20. Tačna potrošnja se vidi u programu.

**Najjeftinije:** `AUTO=false` i pritisni F8 samo na ekranima koje želiš upisati.

## F8 i dugme 📸

- **F8** (ili `HOTKEY` u `.env`, npr. `CTRL+SHIFT+F8`) čita trenutni ekran dok si u igri.
- Iznad igre stoji malo plutajuće dugme **📸** (može se prevući mišem) koje radi isto.
- Nakon svakog slikanja čuješ kratak zvuk, a pored dugmeta piše: *Capturing…* → *Hero detail · 6 items* (zeleno), *nothing to save* (narandžasto) ili greška (crveno).

## Hero sweep (prvo popunjavanje)

1. Otvori listu heroja u igri (i skroluj je ako ih ima više). Program iz nje upiše sve heroje i njihovu snagu.
2. U programu se pojavi tabela svih heroja i traka napretka, npr. `3 / 27 heroes`. Narandžasti su viđeni samo u listi; za svakog piše Lvl, Power, Details (✓/○), koliko opreme je upisano i koji artefakt nosi.
3. Otvori svakog narandžastog heroja jednom i pritisni F8. Kad je upisan, dobije ✓.
4. Poslije toga Auto režim samo hvata promjene dok igraš.

`data\precheck.log` pokazuje za svaki ekran šta je brza provjera mislila i da li je ekran pročitan ili preskočen.

## Savjet za najbolje podatke

Polako prođi kroz ekrane koji te zanimaju i zadrži svaki bar 10 sekundi: lista heroja, detalji svakog heroja, oprema, artefakti, inventar. Ostatak igre igraj normalno.

## Uvoz u Dragonheir Companion

Fajl: `data\dragonheir-account.json` (dugme 📁 otvara folder). U aplikaciji: **Import** → izaberi taj fajl.

## Fajlovi

- `data\dragonheir.db`: SQLite baza (svi pročitani ekrani + spojeno stanje naloga)
- `data\dragonheir-account.json`: izvoz za aplikaciju
- `dhcapture\known_names.json`: imena heroja/artefakata/setova (AllClash S9, okt. 2026) da Claude piše imena tačno
