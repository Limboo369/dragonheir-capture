@echo off
cd /d "%~dp0"
if not exist .venv ( py -3 -m venv .venv || python -m venv .venv )
.venv\Scripts\python -m pip install -r requirements.txt pyinstaller
.venv\Scripts\pyinstaller --noconfirm --onefile --windowed --name DragonheirCapture ^
  --add-data "dhcapture\known_names.json;dhcapture" dhcapture\__main__.py
copy /y .env.example dist\.env.example >nul
echo.
echo Done: dist\DragonheirCapture.exe
pause
