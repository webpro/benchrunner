(function(root) {

    var bench = root._bench = root._bench || {},
        suites = bench.suites = bench.suites || [];

    suites.push(Benchmark.Suite('has')
        .add('String.search', function() {
            'Hello World!'.search('o') > -1;
        })
        .add('String.indexOf', function() {
            'Hello World!'.indexOf('o') > -1;
        })
    );

    suites.push(Benchmark.Suite('trim')
        .add('String.replace', function() {
            '   foo   '.replace(/^\s+|\s+$/g, '');
        })
        .add('String.trim', function() {
            '   foo   '.trim();
        })
    );

}(typeof global == 'object' && global || this));
