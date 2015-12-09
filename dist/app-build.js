"bundle";
System.register("main", [], function(_export) {
  'use strict';
  _export('configure', configure);
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.use.plugin('aurelia-ui-virtualization');
    aurelia.start().then(function(a) {
      return a.setRoot();
    });
  }
  return {
    setters: [],
    execute: function() {}
  };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("app.html!github:systemjs/plugin-text@0.0.3", [], function() {
  return "<template>\n  <div class=\"dbmon-wrapper\">\n    <table class=\"table latest-data\" ref=\"optimizedTable\">\n      <tbody>\n        <tr virtual-repeat.for=\"db of databases\" class=\"tr_${$odd}\">\n          <td class=\"dbname\">\n            ${db.dbname}\n          </td>\n          <td class=\"query-count\">\n            <span simple-class.bind=\"db.lastSample.countClassName\">\n              ${db.lastSample.nbQueries}\n            </span>\n          </td>\n          <td repeat.for=\"q of db.lastSample.topFiveQueries & oneTime\" simple-class.one-time=\"q.elapsedClassName\">\n            ${q.formatElapsed & oneTime}\n            <div class=\"popover left\">\n              <div class=\"popover-content\">\n                ${q.query & oneTime}\n                <foo>hello world</foo>\n              </div>\n              <div class=\"arrow\"></div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n";
});

_removeDefine();
})();
System.register("app", [], function(_export) {
  "use strict";
  var Dbmonster,
      SimpleClassCustomAttribute;
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  return {
    setters: [],
    execute: function() {
      Dbmonster = (function() {
        function Dbmonster() {
          _classCallCheck(this, Dbmonster);
          this.databases = [];
        }
        _createClass(Dbmonster, [{
          key: "activate",
          value: function activate() {
            var _this = this;
            var load = undefined;
            load = function() {
              _this.databases = ENV.generateData().toArray();
              Monitoring.renderRate.ping();
              setTimeout(load, ENV.timeout);
            };
            load();
          }
        }]);
        return Dbmonster;
      })();
      _export("Dbmonster", Dbmonster);
      SimpleClassCustomAttribute = (function() {
        _createClass(SimpleClassCustomAttribute, null, [{
          key: "inject",
          value: [Element],
          enumerable: true
        }]);
        function SimpleClassCustomAttribute(element) {
          _classCallCheck(this, SimpleClassCustomAttribute);
          this.element = element;
        }
        _createClass(SimpleClassCustomAttribute, [{
          key: "valueChanged",
          value: function valueChanged(newValue) {
            this.element.className = newValue;
          }
        }]);
        return SimpleClassCustomAttribute;
      })();
      _export("SimpleClassCustomAttribute", SimpleClassCustomAttribute);
    }
  };
});
