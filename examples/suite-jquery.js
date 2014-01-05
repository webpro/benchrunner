(function(root) {

    var bench = root._bench = {},
        suites = bench.suites = [],
        libs = bench.libs = [
            {
                name: 'jQuery',
                script: {
                    src: './vendor/jquery.min.js'
                }
            },
            {
                name: 'Zepto',
                script: {
                    src: './vendor/zepto.min.js'
                }
            },
            {
                name: 'jQuery Evergreen',
                script: {
                    src: './vendor/jquery-evergreen.min.js'
                }
            }
        ],
        setup = bench.setup = function() {
            var div = document.createElement('div');
            div.id = 'container';
            div.style.display = 'none';
            document.body.appendChild(div);

            document.getElementById('container').innerHTML =
                '<div class="simple"></div>' +
                    '<div id="attr"><div class="attr"></div></div>' +
                    '<div id="dom"><div class="dom"></div></div>' +
                    '<div class="a" style="display:none"><div class="b"><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div></div></div>';
        };

    var element,
        helpers = {
        clean: {
            dom: function() {
                document.getElementById('dom').innerHTML = '<div class="dom"></div>';
            },
            attr: function() {
                document.getElementById('attr').innerHTML = '<div class="attr"></div>';
            }
        }
    };

    suites.push(Benchmark.Suite('Simple selector')
        .add(libs[0].name, function() {
            jQuery('.simple');
        })
        .add(libs[1].name, function() {
            Zepto('.simple');
        })
        .add(libs[2].name, function() {
            $('.simple');
        })
    );

    suites.push(Benchmark.Suite('Complex selector')
        .add(libs[0].name, function() {
            jQuery('.a .b > .c + .c article > [data-foo]').find('ul > li:first-child');
        })
        .add(libs[1].name, function() {
            Zepto('.a .b > .c + .c article > [data-foo]').find('ul > li:first-child');
        })
        .add(libs[2].name, function() {
            $('.a .b > .c + .c article > [data-foo]').find('ul > li:first-child');
        })
    );

    suites.push(Benchmark.Suite('DOM')
        .add(libs[0].name, {
            setup: function() {
                element = jQuery('.dom');
            },
            fn: function() {
                element.append('<div>foo</div><div>bar</div>').before('<div>foo</div><div>bar</div>').after('<div>foo</div><div>bar</div>').html('<div>foo</div><div>bar</div>');
            },
            onCycle: helpers.clean.dom,
            teardown: helpers.clean.dom
        })
        .add(libs[1].name, {
            setup: function() {
                element = Zepto('.dom');
            },
            fn: function() {
                element.append('<div>foo</div><div>bar</div>').before('<div>foo</div><div>bar</div>').after('<div>foo</div><div>bar</div>').html('<div>foo</div><div>bar</div>');
            },
            onCycle: helpers.clean.dom,
            teardown: helpers.clean.dom
        })
        .add(libs[2].name, {
            setup: function() {
                element = $('.dom');
            },
            fn: function() {
                element.append('<div>foo</div><div>bar</div>').before('<div>foo</div><div>bar</div>').after('<div>foo</div><div>bar</div>').html('<div>foo</div><div>bar</div>');
            },
            onCycle: helpers.clean.dom,
            teardown: helpers.clean.dom
        })
    );

    suites.push(Benchmark.Suite('Attr')
        .add(libs[0].name, {
            setup: function() {
                element = jQuery('.attr');
            },
            fn: function() {
                element.attr('foo', 'bar').attr({a: 'b', c: 'd'});
            },
            onCycle: helpers.clean.attr,
            teardown: helpers.clean.attr
        })
        .add(libs[1].name, {
            setup: function() {
                element = Zepto('.attr');
            },
            fn: function() {
                element.attr('foo', 'bar').attr({a: 'b', c: 'd'});
            },
            onCycle: helpers.clean.attr,
            teardown: helpers.clean.attr
        })
        .add(libs[2].name, {
            setup: function() {
                element = $('.attr');
            },
            fn: function() {
                element.attr('foo', 'bar').attr({a: 'b', c: 'd'});
            },
            onCycle: helpers.clean.attr,
            teardown: helpers.clean.attr
        })
    );

}(typeof global == 'object' && global || this));
