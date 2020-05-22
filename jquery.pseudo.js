(function(lib) {
    if (typeof define === 'function' && define.amd) {
        var deps = ['jquery'];
        define(deps, lib);
    } else if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = lib;
    } else {
        var Query = window.jQuery;
        lib(Query);
    }
}(function($) {
    var styles = {};
    $.fn.pseudo = function(element, prop, value) {
        var el = this[0];
        var id = "pseudo-styles";
        var changed = false;
        var className = "";
        var sheet = document.getElementById(id) || document.createElement('style');
        var head = document.head || document.getElementsByTagName('head')[0];
        sheet.id = id;

        var has_pseudo_class = (this.attr('class') && this.attr('class').indexOf('pseudo-style') > -1);
        if (has_pseudo_class) {
            var classes = this.attr('class');
            className = classes.substr(classes.indexOf('pseudo-style'));
            className = classes.substr(classes.indexOf(' ') + 1);
            var selector = className + ":" + element;
            var attributes = {};
            attributes[prop] = value;
            if (!styles[selector]) styles[selector] = {};
            if (styles[selector] == attributes) {} else {
                styles[selector] = $.extend({}, styles[selector], attributes);
                changed = true;
            }
        } else {
            var className = "pseudo-style" + UID.getNew();
            el.className += ((el.className == "") ? "" : " ") + className;
            changed = true;
        }
        if (!changed) return this;
        var output = "";
        for (var target in styles) {
            var css = "";
            for (var key in styles[target]) {
                css += key + ":" + styles[target][key] + ";";
            }
            output += " ." + target + " {" + css + " }";
        }
        sheet.innerHTML = output;
        head.appendChild(sheet);
        return this;

    };
    if (typeof window === "object" && typeof window.document === "object") {
        window.jQuery = $;
    }
    var UID = {
        _current: 0,
        getNew: function() {
            this._current++;
            return this._current;
        }
    };
}));