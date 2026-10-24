@echo off
cd /d "%~dp0"
if not exist .env (
  copy .env.example .env >nul
  echo Created .env - open it in Notepad, paste the two keys, save, then run this again.
  notepad .env
  pause
  exit /b
)
if not exist venv (
  py -3 -m venv venv || python -m venv venv
  venv\Scripts\pip install -r requirements.txt
)
:loop
venv\Scripts\python bot.py
echo Bot stopped, restarting in 10 seconds...
timeout /t 10 >nul
goto loop
