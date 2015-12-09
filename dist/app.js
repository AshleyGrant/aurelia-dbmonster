System.register([], function (_export) {
  "use strict";

  var Dbmonster, SimpleClassCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Dbmonster = (function () {
        function Dbmonster() {
          _classCallCheck(this, Dbmonster);

          this.databases = [];
        }

        _createClass(Dbmonster, [{
          key: "activate",
          value: function activate() {
            var _this = this;

            var load = undefined;
            load = function () {
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

      SimpleClassCustomAttribute = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxTQUFTLEVBY1QsMEJBQTBCOzs7Ozs7Ozs7QUFkMUIsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7O2VBQ3BCLFNBQVMsR0FBRyxFQUFFOzs7cUJBREgsU0FBUzs7aUJBR1osb0JBQUc7OztBQUNULGdCQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsZ0JBQUksR0FBRyxZQUFNO0FBQ1gsb0JBQUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5Qyx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3Qix3QkFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0IsQ0FBQztBQUNGLGdCQUFJLEVBQUUsQ0FBQztXQUNSOzs7ZUFYVSxTQUFTOzs7OztBQWNULGdDQUEwQjtxQkFBMUIsMEJBQTBCOztpQkFDckIsQ0FBQyxPQUFPLENBQUM7Ozs7QUFFZCxpQkFIQSwwQkFBMEIsQ0FHekIsT0FBTyxFQUFFO2dDQUhWLDBCQUEwQjs7QUFJbkMsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUxVLDBCQUEwQjs7aUJBT3pCLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1dBQ25DOzs7ZUFUVSwwQkFBMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERibW9uc3RlciB7XG4gIGRhdGFiYXNlcyA9IFtdO1xuXG4gIGFjdGl2YXRlKCkge1xuICAgIGxldCBsb2FkO1xuICAgIGxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRhdGFiYXNlcyA9IEVOVi5nZW5lcmF0ZURhdGEoKS50b0FycmF5KCk7XG4gICAgICBNb25pdG9yaW5nLnJlbmRlclJhdGUucGluZygpO1xuICAgICAgc2V0VGltZW91dChsb2FkLCBFTlYudGltZW91dCk7XG4gICAgfTtcbiAgICBsb2FkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNsYXNzQ3VzdG9tQXR0cmlidXRlIHtcbiAgc3RhdGljIGluamVjdCA9IFtFbGVtZW50XTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBuZXdWYWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
