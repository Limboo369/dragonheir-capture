"""Turn OCR strings into numbers."""
import re

NUM = r"\d[\d,]*(?:\.\d+)?"


def _f(s):
    s = s.replace(",", "")
    try:
        return float(s)
    except ValueError:
        return None


def fix_digits(t):
    # Common OCR slips inside numbers.
    t = t.replace("O", "0").replace("o", "0").replace("l", "1").replace("I", "1").replace("|", "1")
    return t.replace("S", "5").replace("B", "8")


def base_bonus(t):
    """'13489 +8610' -> (13489, 8610); '0 +73' -> (0, 73); '10.0% +31.4%' -> (10.0, 31.4)."""
    if not t:
        return None, None
    t = fix_digits(t).replace(" ", "")
    m = re.match(rf"^({NUM})%?\+({NUM})%?", t)
    if m:
        return _f(m.group(1)), _f(m.group(2))
    m = re.match(rf"^\+({NUM})%?$", t)
    if m:
        return None, _f(m.group(1))
    m = re.match(rf"^({NUM})%?$", t)
    if m:
        return _f(m.group(1)), 0.0
    nums = re.findall(NUM, t)
    if len(nums) >= 2:
        return _f(nums[0]), _f(nums[1])
    return None, None


def int_or_none(t):
    if not t:
        return None
    m = re.search(r"\d[\d,]*", fix_digits(t))
    if not m:
        return None
    try:
        return int(m.group(0).replace(",", ""))
    except ValueError:
        return None


def plus_level(t):
    m = re.search(r"\+\s*(\d{1,2})", t or "")
    if m:
        return int(m.group(1))
    v = int_or_none(t)
    return v if v is not None and v <= 20 else None
