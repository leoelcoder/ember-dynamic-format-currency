# Ember-format-currency

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Example

* `{{format-currency 1000}}`

$ 1,000.00

* `{{format-currency 1000.30}}`

$ 1,000.30

* `{{format-currency 900.30 2}}`

900.30

* `{{format-currency 900.30 3 "€"}}`

€ 900.300

* `{{format-currency 4300.30 3 "$" " "}}`

$ 4 300.300

* `{{format-currency 4300.30 3 "$" ","}}`

$ 4,300.300

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
