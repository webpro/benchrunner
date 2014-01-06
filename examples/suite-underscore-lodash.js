(function(root) {

    var bench = root.benchrunner,
        suites = bench.suites,
        libs = bench.libs = [
            {
                name: 'Lo-Dash',
                script: {
                    src: './vendor/lodash.min.js',
                    onload: function(lib) {
                        root.lodash = (lib || _).noConflict();
                    }
                }
            },
            {
                name: 'Underscore',
                script: {
                    src: './vendor/underscore.js', // 'underscore-min.js' gives `SyntaxError: Parse error` in PhantomJS
                    onload: function(lib) {
                        root._ = (lib || _).noConflict();
                    }
                }
            }
        ];

    var limit = 20,
        numbers = new Array(limit);

    for (var index = 0; index < limit; index++) {
        numbers[index] = index;
    }

    suites.push(
        Benchmark.Suite('`_.contains` iterating an array')
            .add(libs[0].name, function() {
                lodash.contains(numbers, limit - 1)
            })
            .add(libs[1].name, function() {
                _.contains(numbers, limit - 1)
            })
    );

    suites.push(
        Benchmark.Suite('`_.each` iterating an array')
            .add(libs[0].name, function() {
                var result = [];
                lodash.each(numbers, function(num) {
                    result.push(num * 2);
                })
            })
            .add(libs[1].name, function() {
                var result = [];
                _.each(numbers, function(num) {
                    result.push(num * 2);
                })
            }
        )
    );

}(typeof global == 'object' && global || this));
