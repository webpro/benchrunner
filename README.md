# Benchmark Suite Runner for benchmark.js

## Installation

### npm

    npm install benchrunner

### Bower

    bower install benchrunner

## Usage

You can write a suite like this:

    (function(root) {
    
        var bench = root._bench = root._bench || {},
            suites = bench.suites = bench.suites || [];
    
        suites.push(Benchmark.Suite('trim')
            .add('String.replace', function() {
                '   foo   '.replace(/^\s+|\s+$/g, '');
            })
            .add('String.trim', function() {
                '   foo   '.trim();
            })
        );
    
    }(typeof global == 'object' && global || this));

Also see the [examples](examples/).

Now you can run them from CLI or in the browser really easy:

### CLI

Currently only PhantomJS is supported.

	phantomjs benchrunner.js suite1.js suite2.js

Effectively, from the project root, that would become e.g.:

    phantomjs ./node_modules/benchrunner/benchrunner.js ./examples/suite-basic.js

The path to the suite currently must be relative to the location of `benchrunner.js`.

### Browser

Just point your browser at the runner page, e.g.

    http://localhost/your-project/node_modules/benchrunner/examples/basic.html

## Credits

Heavily inspired by [Lo-Dash's benchmark suite runner](https://github.com/lodash/lodash/blob/master/perf/perf.js).

## License

[MIT licensed](http://webpro.mit-license.org)
