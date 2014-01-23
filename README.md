# Benchmark Suite Runner for benchmark.js

## Installation

### npm

    npm install benchrunner

### Bower

    bower install benchrunner

## Usage

You can write a suite like this:

    (function(root) {
    
        var suites = root.benchrunner.suites;;
    
        suites.push(Benchmark.Suite('trim')
            .add('String.replace', function() {
                '   foo   '.replace(/^\s+|\s+$/g, '');
            })
            .add('String.trim', function() {
                '   foo   '.trim();
            })
        );
    
    }(typeof global == 'object' && global || this));

Now you can run them from CLI or in the browser really easy:

### CLI

Currently only PhantomJS is supported.

	phantomjs benchrunner.js suite1.js suite2.js

From the root of your project, that would become e.g.:

    phantomjs ./node_modules/benchrunner/benchrunner.js benchmarks/my-suite.js

Or, if you install globally (i.e. `npm install -g benchrunner`):

	benchrunner benchmarks/my-suite.js

### Browser

Just point your browser at the runner page, e.g.

    http://localhost/your-project/benchmarks/index.html

See `examples/basic.html` for an example (you need to include a few scripts).

## Examples

* [Examples](examples/) in this repository.
* [jQuery Evergreen](https://github.com/webpro/jquery-evergreen/tree/master/benchmark) ([run](http://webpro.github.io/jquery-evergreen/benchmark/))

## Credits

Heavily inspired by [Lo-Dash's benchmark suite runner](https://github.com/lodash/lodash/blob/master/perf/perf.js).

## License

[MIT licensed](http://webpro.mit-license.org)
