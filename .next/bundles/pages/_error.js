
          window.__NEXT_REGISTER_PAGE('/_error', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/M5/next-projects/project-nextjs-2/pages/_error.js?entry';


var Error = function (_React$Component) {
    (0, _inherits3.default)(Error, _React$Component);

    function Error() {
        (0, _classCallCheck3.default)(this, Error);

        return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
    }

    (0, _createClass3.default)(Error, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, 'An error ', this.props.errorCode, ' just occurred');
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var res = _ref.res,
                xhr = _ref.xhr;

            var errorCode = res ? res.statusCode : xhr.status;
            return { errorCode: errorCode };
        }
    }]);

    return Error;
}(_react2.default.Component);

exports.default = Error;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/M5/next-projects/project-nextjs-2/pages/_error.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/M5/next-projects/project-nextjs-2/pages/_error.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/_error")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(573);


/***/ })

},[574]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/ZDAyNWUxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7Ozs7Ozs7O0lBRWM7Ozs7Ozs7Ozs7O2lDQU1iO21DQUNJOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBYyxrQkFBSyxNQUFNLFdBRWhDOzs7OzhDQVJxQztnQkFBQTtnQkFBQSxXQUNsQzs7Z0JBQU0sWUFBWSxNQUFNLElBQUksYUFBYSxJQUN6QzttQkFBTyxFQUFFLFdBQ1o7Ozs7O0VBSjhCLGdCQUFNOztrQkFBcEIsTSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCB4aHIgfSkge1xuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IHhoci5zdGF0dXNcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JDb2RlIH1cbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5BbiBlcnJvciB7IHRoaXMucHJvcHMuZXJyb3JDb2RlIH0ganVzdCBvY2N1cnJlZDwvcD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZXJyb3IuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        