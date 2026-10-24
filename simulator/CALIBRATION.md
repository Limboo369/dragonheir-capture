# Kalibracija simulatora: 3 kratka testa u igri

Simulator koristi zvanične podatke o herojima, ali tri stvari igra nigdje ne objavljuje: tvoju pravu opremu, tačna vremena skilova na tvom serveru i koliko odbrana (DEF) smanjuje štetu. Ova tri testa to zamjenjuju pravim brojevima. Svaki traje par minuta. Radi ih kad stigneš, redom, i pošalji mi rezultat u chat.

## Test 1: statistike glavnih heroja (najvažnije)

Zamjenjuje procjenu opreme pravim brojevima.

1. Otvori Auster-a u listi heroja.
2. Otvori stranicu sa atributima heroja.
3. Napravi screenshot ili prepiši ove brojeve: Attack, HP, Defense, Crit Rate, Crit Damage, Accuracy, Resistance, Enlightenment, Skill Haste.
4. Ponovi korake 1 do 3 za Hvitar, Lossenia, Voresh i Ergander.

## Test 2: vremena punjenja skilova

Provjerava da li su vremena iz 2023. ista i danas.

1. Otvori Auster-a.
2. Dodirni njegov ultimate skill (Bone Chill).
3. Prepiši dva vremena punjenja koja piše u opisu (prvo punjenje i puno punjenje, u sekundama).
4. Ponovi za battle skill (Toxophilite).

Ako je lakše: isti brojevi se vide u podešavanju vremena skilova (skill timing) za tim prije borbe.

## Test 3: šteta u jednoj borbi

Provjerava da li simulator dobro dijeli štetu među herojima.

1. Odigraj jednu borbu protiv bossa u bilo kom dungeonu, sa glavnim timom (Lossenia, Auster, Hvitar, Voresh, Ergander).
2. Na kraju borbe otvori statistiku štete.
3. Napravi screenshot: treba mi šteta po heroju i koliko je borba trajala.

## Šta radim sa rezultatima

- Test 1: tvoji pravi brojevi ulaze umjesto procjene opreme (`stats` u specifikaciji heroja).
- Test 2: ispravljam vremena po heroju (`research/timing.json`).
- Test 3: podešavam krivu odbrane (`defK`) i jačinu bossa dok se udjeli štete ne poklope.
