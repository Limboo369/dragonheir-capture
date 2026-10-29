"""Run the built exe's self-test: real pings, the gateway, and Windows' per-connection stats."""
import json
import os
import subprocess
import sys
import tempfile

exe = sys.argv[1]
out = os.path.join(tempfile.mkdtemp(), "selftest.json")
subprocess.run([exe, "--selftest", out], timeout=120, check=True)
res = json.load(open(out, encoding="utf-8"))
print(json.dumps(res, indent=1))
assert res["tcp_github"] and res["tcp_github"] > 0, res
assert res["own_conn_found"], res
assert res["link_ok"], res
assert res["link"] is not None and res["link"]["segs_out"] > 0, res
# GitHub runners may block ICMP and have no classic gateway; those are reported, not required
print("exe ok")
