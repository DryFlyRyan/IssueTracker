function titleCase(str) {
  let retVal = str.toLowerCase();
  retVal = retVal.split(' ');

  retVal = retVal.map(s => `${s.substr(0, 1).toUpperCase()}${s.substr(1)}`);
  retVal = retVal.join('');

  return retVal;
}

export default titleCase;
