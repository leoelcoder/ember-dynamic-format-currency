import Ember from 'ember';

export function formatCurrency([quantity,decimals,symbol,separator]) {
    if (!symbol){ symbol = '$'; }
    if (!decimals){ decimals = 2; }
    if (!separator){ separator = ","; }
   
    var amount = parseFloat(quantity);
    var amount_rounded = amount.toFixed(decimals);
    var decimal_part = amount_rounded.toString().split('.')[1];
    var number_part = amount_rounded.toString().split('.')[0];
    var number = number_part.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return symbol.toString() + " " + number + "." + decimal_part;
}

export default Ember.Helper.helper(formatCurrency);
