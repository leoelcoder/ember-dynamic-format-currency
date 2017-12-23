import Ember from 'ember';

export function formatCurrency([quantity, decimals, sign, separator], namedArgs) {
  sign = sign !== undefined ? sign : namedArgs.sign !== undefined ? namedArgs.sign : '$';
  decimals = decimals !== undefined ? decimals : namedArgs.decimals !== undefined ? namedArgs.decimals : 2;
  separator = separator !== undefined ? separator : namedArgs.separator !== undefined ? namedArgs.separator : ',';

  const amount = parseFloat(quantity);
  const amount_rounded = amount.toFixed(decimals);
  const decimal_part = amount_rounded.toString().split('.')[1];
  const number_part = amount_rounded.toString().split('.')[0];
  const number = number_part.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return sign.toString() + number + '.' + decimal_part;
}

export default Ember.Helper.helper(formatCurrency);
