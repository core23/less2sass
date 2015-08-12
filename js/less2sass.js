/*!
 * less2sass v0.1.0 (http://core23.de)
 * Copyright 2015 core23 - webdesign & more, Christian Gripp
 * Licensed under the MIT license
 */

(function () {
    var replacements = [
        // Variables
        {'k': /@((?!media|include|charset|document|font-face|import|keyframes|page|supports)[a-zA-Z_]+)/g, 'v': '$$$1'},
        // Extends
        {'k': /@include(\W+[.#][^(;]*;)/g, 'v': '@extend$1'},
        // Mixins
        {'k': /\.([\w\-]*)\s*\((.*)\)\s*\{/g, 'v': '@mixin $1\($2\)\n{'},
        // Includes
        {'k': /\.([\w\-]*\(.*\)\s*;)/g, 'v': '@include $1'},
        // String literals
        {'k': /~"(.*)"/g, 'v': '#{"$1"}'},
        // Spin does not exist in sass
        {'k': /spin\(/g, 'v': 'adjust-hue('},
    ];

    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var btnConvert = document.getElementById('convert');
    var btnClear = document.getElementById('clear');

    btnConvert.addEventListener('click', function () {
        var text = input.value;
        for (var i = 0; i < replacements.length; i++) {
            text = text.replace(replacements[i].k, replacements[i].v);
        }
        output.value = text;
    }, false);

    btnClear.addEventListener('click', function () {
        output.value = '';
    }, false);
})();