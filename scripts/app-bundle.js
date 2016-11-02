define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main-standard',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.use.plugin('aurelia-ui-virtualization');

    aurelia.start().then(function () {
      return aurelia.setRoot('standard-repeater');
    });
  }
});
define('main-virtual',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-ui-virtualization');

    aurelia.start().then(function () {
      return aurelia.setRoot('virtual-repeater');
    });
  }
});
define('standard-repeater',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class2, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dbmonster = exports.Dbmonster = function () {
    function Dbmonster() {
      _classCallCheck(this, Dbmonster);

      this.databases = [];
    }

    Dbmonster.prototype.activate = function activate() {
      var _this = this;

      var _load = void 0;
      _load = function load() {
        _this.databases = ENV.generateData().toArray();
        Monitoring.renderRate.ping();
        setTimeout(_load, ENV.timeout);
      };
      _load();
    };

    return Dbmonster;
  }();

  var SimpleClassCustomAttribute = exports.SimpleClassCustomAttribute = (_temp = _class2 = function () {
    function SimpleClassCustomAttribute(element) {
      _classCallCheck(this, SimpleClassCustomAttribute);

      this.element = element;
    }

    SimpleClassCustomAttribute.prototype.valueChanged = function valueChanged(newValue) {
      this.element.className = newValue;
    };

    return SimpleClassCustomAttribute;
  }(), _class2.inject = [Element], _temp);
});
define('virtual-repeater',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class2, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dbmonster = exports.Dbmonster = function () {
    function Dbmonster() {
      _classCallCheck(this, Dbmonster);

      this.databases = [];
    }

    Dbmonster.prototype.activate = function activate() {
      var _this = this;

      var _load = void 0;
      _load = function load() {
        _this.databases = ENV.generateData().toArray();
        Monitoring.renderRate.ping();
        setTimeout(_load, ENV.timeout);
      };
      _load();
    };

    return Dbmonster;
  }();

  var SimpleClassCustomAttribute = exports.SimpleClassCustomAttribute = (_temp = _class2 = function () {
    function SimpleClassCustomAttribute(element) {
      _classCallCheck(this, SimpleClassCustomAttribute);

      this.element = element;
    }

    SimpleClassCustomAttribute.prototype.valueChanged = function valueChanged(newValue) {
      this.element.className = newValue;
    };

    return SimpleClassCustomAttribute;
  }(), _class2.inject = [Element], _temp);
});
define('text!standard-repeater.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"dbmon-wrapper\">\n    <table class=\"table latest-data\" ref=\"optimizedTable\">\n        <tr repeat.for=\"db of databases\" class=\"tr_${$odd}\" view-cache=\"*\">\n          <td class=\"dbname\">\n            ${db.dbname}\n          </td>\n          <td class=\"query-count\">\n            <span simple-class.bind=\"db.lastSample.countClassName\">\n              ${db.lastSample.nbQueries}\n            </span>\n          </td>\n          <td repeat.for=\"q of db.lastSample.topFiveQueries & oneTime\" simple-class.one-time=\"q.elapsedClassName\" view-cache=\"*\">\n            ${q.formatElapsed & oneTime}\n            <div class=\"popover left\">\n              <div class=\"popover-content\">\n                ${q.query & oneTime}\n                <foo>hello world</foo>\n              </div>\n              <div class=\"arrow\"></div>\n            </div>\n          </td>\n        </tr>\n    </table>\n  </div>\n</template>\n"; });
define('text!virtual-repeater.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"dbmon-wrapper\">\n    <table class=\"table latest-data\" ref=\"optimizedTable\">\n        <tr virtual-repeat.for=\"db of databases\" class=\"tr_${$odd}\" view-cache=\"*\">\n          <td class=\"dbname\">\n            ${db.dbname}\n          </td>\n          <td class=\"query-count\">\n            <span simple-class.bind=\"db.lastSample.countClassName\">\n              ${db.lastSample.nbQueries}\n            </span>\n          </td>\n          <td repeat.for=\"q of db.lastSample.topFiveQueries & oneTime\" simple-class.one-time=\"q.elapsedClassName\" view-cache=\"*\">\n            ${q.formatElapsed & oneTime}\n            <div class=\"popover left\">\n              <div class=\"popover-content\">\n                ${q.query & oneTime}\n                <foo>hello world</foo>\n              </div>\n              <div class=\"arrow\"></div>\n            </div>\n          </td>\n        </tr>\n    </table>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map