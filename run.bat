@echo off
cd /d "%~dp0"
if not exist .venv (
  echo First run: installing...
  py -3 -m venv .venv || python -m venv .venv
  .venv\Scripts\python -m pip install --upgrade pip
  .venv\Scripts\python -m pip install -r requirements.txt
)
if not exist .env copy .env.example .env >nul
start "" .venv\Scripts\pythonw -m dhcapture
