# ember-dynamic-format-currency

## Installation

`ember install ember-dynamic-format-currency`

## Example with arguments

* `{{format-currency 1000}}`

$ 1, 000.00

* `{{format-currency 1000.30}}`

$ 1, 000.30

* `{{format-currency 900.30 2}}`

$ 900.30

* `{{format-currency 900.303 3 "€"}}`

€ 900.303

* `{{format-currency 4300.303 3 "$" " "}}`

$ 4 300.303

* `{{format-currency 4300.30 3 "$" ","}}`

$ 4,300.300

* `{{format-currency 4300.30 3 "$" " " ","}}`

$ 4 300,300

## Example with named arguments

* `{{format-currency 1000}}`

$ 1, 000.00

* `{{format-currency 1000.30}}`

$ 1, 000.30

* `{{format-currency 900.30 decimals=2}}`

$ 900.30

* `{{format-currency 900.303 decimals=3 sign="€"}}`

€ 900.303

* `{{format-currency 4300.303 decimals=3 sign="$" separator=" "}}`

$ 4 300.303

* `{{format-currency 4300.30 decimals=3 sign="$" separator=","}}`

$ 4,300.300

* `{{format-currency 4300.30 decimals=3 sign="$" separator=" " decimalSeparator=","}}`

$ 4 300,300


## Arguments and named arguments

You can mix both, no named arguments and named arguments,
BUT IT IS IMPORTAN THE ORDER WHEN YOU USE NO NAMED ARGUMENTS
the order of the no named arguments
First argument: decimals
Second argument: sign
Third argument: thousands separator
## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
