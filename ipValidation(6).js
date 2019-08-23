function isValidIP(str) {

  if (/^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str)) {
    return true;
  }
    return false;
  }