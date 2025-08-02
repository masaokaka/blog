function isPositiveInteger(value: string) {
  const regex = /^[1-9]\d*$/;
  return regex.test(value);
}

export default isPositiveInteger;
