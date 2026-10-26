"""Run the built exe on a real screenshot and check it read it (proves models and data are bundled)."""
import json
import os
import subprocess
import sys
import tempfile

exe = sys.argv[1]
out = os.path.join(tempfile.mkdtemp(), "selftest.json")
img = os.path.abspath(os.path.join(os.path.dirname(__file__), "fixtures", "popup_oggok.jpg"))
subprocess.run([exe, "--selftest", img, out], timeout=600, check=True)
res = json.load(open(out, encoding="utf-8"))
print(res)
assert res["screen"] == "hero_popup", res
assert res["hero"]["name"] == "Oggok", res
assert res["stats"]["hp"] == 22099, res
assert res["artifact"] == "Rift Hourglass", res
print("exe ok")
