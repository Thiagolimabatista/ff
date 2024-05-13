import numeral from 'numeral';

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function fCurrency(number: InputValue) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export const handleCurrency = (value: string) => {
  const thereIsNoWordForDezenasInEnglish = [
    ',00',
    ',10',
    ',20',
    ',30',
    ',40',
    ',50',
    ',60',
    ',70',
    ',80',
    ',90',
  ];
  if (value === '') return 0;
  const isDecimal = value.slice(value.length - 1) === ',';
  if (isDecimal) return value;
  const isLessThanTenCents =
    value.slice(value.length - 2) === ',0' ||
    thereIsNoWordForDezenasInEnglish.includes(value.slice(value.length - 3));
  if (isLessThanTenCents) return value.toString();
  const parsed = parseFloat(value.replace('.', '').replace(',', '.')).toLocaleString('pt-BR');
  return parsed.toString();
};
