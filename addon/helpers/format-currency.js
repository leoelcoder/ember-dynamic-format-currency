import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function formatCurrency([quantity, decimals, sign, separator, decimalSeparator], namedArgs) {
  sign = sign !== undefined ? sign : namedArgs.sign !== undefined ? namedArgs.sign : "$";
  decimals = decimals !== undefined ? decimals : namedArgs.decimals !== undefined ? namedArgs.decimals : 2;
  separator = separator !== undefined ? separator : namedArgs.separator !== undefined ? namedArgs.separator : ", ";
  decimalSeparator = decimalSeparator !== undefined ? decimalSeparator : namedArgs.decimalSeparator !== undefined ? namedArgs.decimalSeparator : ".";

  const amount = parseFloat(quantity);
  const amount_rounded = amount.toFixed(decimals);
  const decimal_part = amount_rounded.toString().split('.')[1];
  const number_part = amount_rounded.toString().split('.')[0];
  const number = number_part.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return htmlSafe(sign.toString() + '&nbsp;' + number + decimalSeparator + decimal_part);
}

export default helper(formatCurrency);
