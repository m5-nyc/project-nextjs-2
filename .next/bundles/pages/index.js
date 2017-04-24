
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 560:
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

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _posts = __webpack_require__(564);

var _posts2 = _interopRequireDefault(_posts);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

var _AuthService = __webpack_require__(565);

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/M5/next-projects/project-nextjs-2/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return { posts: _posts2.default };
        }
    }]);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { logginIn: false };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.auth = new _AuthService2.default('c0dPqZTahGrJ4R4sbrZp4YvaY8jTsSZ5', 'maverick5.auth0.com');
            this.setState({ loggedIn: this.auth.loggedIn() });
            // instance of lock
            this.lock = this.auth.getLock();
            this.lock.on('authentication', function () {
                _this2.setState({ loggedIn: _this2.auth.loggedIn() });
            });
        }
    }, {
        key: 'login',
        value: function login() {
            this.auth.login();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var loginButton = this.state.loggedIn ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Hello') : _react2.default.createElement('button', { onClick: this.login.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'login');

            return _react2.default.createElement('div', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'header', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('script', { src: 'https://cdn.auth0.com/js/lock/10.5/lock.min.js', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), loginButton, _react2.default.createElement('h3', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS')), _react2.default.createElement('table', { className: 'table', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('thead', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('tr', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('th', { className: 'th', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Character'), _react2.default.createElement('th', { className: 'th', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Real Name'))), _react2.default.createElement('tbody', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.posts.map(function (post, i) {
                return _react2.default.createElement('tr', { key: i, 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, _react2.default.createElement('td', { className: 'td', 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, post.codeName), _react2.default.createElement('td', { className: 'td', 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, _this3.state.loggedIn ? _react2.default.createElement(_link2.default, { href: '/account?id=' + post.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, post.realName) : _react2.default.createElement('div', {
                    'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, ' \'you need to login\' ')));
            }))), _react2.default.createElement(_style2.default, {
                styleId: 3588096288,
                css: '.th[data-jsx="3588096288"] {background: #00cccc;color: #fff;textTransform: \'uppercase\';fontSize: 12px;padding: 12px 35px;}.header[data-jsx="3588096288"] {font: 15px Monaco;textAlign: center;}.table[data-jsx="3588096288"] {fontFamily: Arial;margin: 25px auto;borderCollapse: collapse;border: 1px solid #eee;borderBottom: 2px solid #00cccc;}.td[data-jsx="3588096288"] {color: #999;border: 1px solid #eee;padding: 12px 35px;borderCollapse: collapse;}.list[data-jsx="3588096288"] {padding: 50px;textAlign: center;}.photo[data-jsx="3588096288"] {display: inline-block;}.photoLink[data-jsx="3588096288"] {color: #333;verticalAlign: middle;cursor: pointer;background: #eee;display: inline-block;width: 250px;height: 250px;lineHeight: 250px;margin: 10px;border: 2px solid transparent;\'hover\'[data-jsx="3588096288"]: {borderColor: blue;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStENEIsQUFDSCw0QkFDbUIsb0JBQ1IsWUFDZSwyQkFDWixlQUNJLG1CQUN0QixDQUNRLGdDQUNhLGtCQUNBLGtCQUNyQixDQUNPLCtCQUNjLGtCQUNBLGtCQUNPLHlCQUNGLHVCQUNTLGdDQUNuQyxDQUNJLDRCQUNXLFlBQ1csdUJBQ0osbUJBQ00seUJBQzVCLENBQ00sOEJBQ1csY0FDSSxrQkFDckIsQ0FDTywrQkFDa0Isc0JBQ3pCLENBQ1csbUNBQ0ksWUFDVSxzQkFDTixnQkFDQyxpQkFDSyxzQkFDVCxhQUNDLGNBQ0ksa0JBQ0wsYUFDaUIsOEJBQ3BCLGlDQUNZLGtCQUNyQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTTUvbmV4dC1wcm9qZWN0cy9wcm9qZWN0LW5leHRqcy0yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvQXV0aFNlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyBwb3N0czogcG9zdHMgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBsb2dnaW5JbjogZmFsc2UgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2MwZFBxWlRhaEdySjRSNHNiclpwNFl2YVk4alRzU1o1JywgJ21hdmVyaWNrNS5hdXRoMC5jb20nICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dnZWRJbjogdGhpcy5hdXRoLmxvZ2dlZEluKCkgfSlcbiAgICAgICAgLy8gaW5zdGFuY2Ugb2YgbG9ja1xuICAgICAgICB0aGlzLmxvY2sgPSB0aGlzLmF1dGguZ2V0TG9jaygpO1xuICAgICAgICB0aGlzLmxvY2sub24oJ2F1dGhlbnRpY2F0aW9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2dlZEluOiB0aGlzLmF1dGgubG9nZ2VkSW4oKSB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ2luKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSB0aGlzLnN0YXRlLmxvZ2dlZEluID8gPGRpdj5IZWxsbzwvZGl2PiA6IDxidXR0b24gb25DbGljaz17dGhpcy5sb2dpbi5iaW5kKHRoaXMpfT5sb2dpbjwvYnV0dG9uPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5hdXRoMC5jb20vanMvbG9jay8xMC41L2xvY2subWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIHsgbG9naW5CdXR0b259XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5FWFRIUk9ORSAtIFRIRSBSRVZFTEFUSU9OIE9GIEdBTUUgT0YgVEhST05FUycgQ0hBUkFDVEVSUzwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCc+Q2hhcmFjdGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgnPlJlYWwgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+eyBwb3N0LmNvZGVOYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9nZ2VkSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxMaW5rIGhyZWY9e2AvYWNjb3VudD9pZD0ke3Bvc3QuaWR9YH0+eyBwb3N0LnJlYWxOYW1lIH08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PiAneW91IG5lZWQgdG8gbG9naW4nIDwvZGl2PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC50aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAzNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTVweCBNb25hY287XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogQXJpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IDJweCBzb2xpZCAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5waG90byB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBob3RvTGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/M5/next-projects/project-nextjs-2/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/M5/next-projects/project-nextjs-2/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var posts = [{
    "codeName": "Jon Snow",
    "realName": "Kit Harington",
    "id": "1161022966406956503",
    "display_src": "http://vignette4.wikia.nocookie.net/gameofthrones/images/5/56/Jon_Kill_the_Boy.jpg/revision/latest?cb=20150508120833",
    "story": "Ned Stark's bastard son, Jon joined the Night's Watch. On a mission for Lord Commander Mormont, Jon infiltrated the wildlings by pretending to forsake his Night Watch brothers. In doing so, he fell in love with Ygritte, a wildling woman"
}, {
    "codeName": "Arya Stark",
    "realName": "Maisie Williams",
    "id": "1160844458347054781",
    "display_src": "http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest?cb=20140428152515",
    "story": "The younger of the Stark daughters, Arya has put her survival skills to use as she continues to evade the Lannister forces that seek her. En route to the Twins in search of her mother and brother, she arrived at the castle after the Red Wedding."
}, {
    "codeName": "Melisandre",
    "realName": "Carice van Houten",
    "id": "1154606670337393752",
    "display_src": "http://vignette2.wikia.nocookie.net/gameofthrones/images/7/7c/Melisandre_The_Dance_of_Dragons.jpg/revision/latest?cb=20150604204859",
    "story": "A Red priestess from Asshai, Melisandre worships the Lord of Light. Her visions have told her that Stannis is the true king and as his advisor, she has encouraged him to pursue the throne at all costs"
}, {
    "codeName": "Tyrion Lannister",
    "realName": "Peter Dinklage",
    "id": "1157179863266871229",
    "display_src": "http://vignette1.wikia.nocookie.net/gameofthrones/images/6/61/The_children_Tyrion_with_Bow_S4.png/revision/latest?cb=20140616190514",
    "story": "What Tyrion lacks in size and strength, he makes up for in mental acuity. Former Hand of the King in his father's absence, he now serves as Master of Coin on the Small Council."
}, {
    "codeName": "Ramsay Bolton",
    "realName": "Iwan Rheon",
    "id": "1126293663140399053",
    "display_src": "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ramsay-1920.jpg",
    "story": "A bastard son of Roose Bolton, Ramsay's bloodlust is even stronger than his father's. After taking Winterfell, he captured Theon Greyjoy and slowly tortured him into submission."
}, {
    "codeName": "Petyr Baelish",
    "realName": "Aidan Gillen",
    "id": "1117418173361145365",
    "display_src": "http://vignette3.wikia.nocookie.net/gameofthrones/images/f/f8/Book_of_the_Stranger_05.jpg/revision/latest?cb=20160512165329",
    "story": "Nakedly ambitious, Littlefinger left the Small Council to marry Lysa Arryn and secure the Vale to the Lannister's side. Beyond his official duties, he is the eyes and ears of King's Landing along with Varys."
}, {
    "codeName": "Brienne of Tarth",
    "realName": "Gwendoline Christie",
    "id": "1162418651480049646",
    "display_src": "http://vignette2.wikia.nocookie.net/gameofthrones/images/8/89/Brienne_Mother's_Mercy.jpg/revision/latest?cb=20150617011915",
    "story": "Brienne is a highborn lady who would rather be a knight. As Catelyn Stark's envoy, she escorted Jaime Lannister back to Kings Landing. The two fighters developed a mutual respect for each other during their journey."
}, {
    "codeName": "Lord Varys",
    "realName": "Conleth Hill",
    "id": "1152964002473690553",
    "display_src": "https://pbs.twimg.com/profile_images/3542727378/d0599ead6fda6e428c5dbf106e7161fa.jpeg",
    "story": "A eunuch and a member of the Small Council, Varys is also a master of disguise. Along with Littlefinger, he is always aware of what goes on in Court."
}, {
    "codeName": "Daenerys Targaryen",
    "realName": "Emilia Clarke",
    "id": "1150824171912152320",
    "display_src": "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/daenarys-1024.jpg",
    "story": "Princess of House Targaryen, Daenerys lives in exile in Essos with her advisors and dragons. Dany rallied the Unsullied of Astapor to her cause and continues to grow the army she needs to take back the throne."
}];

exports.default = posts;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/M5/next-projects/project-nextjs-2/data/posts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/M5/next-projects/project-nextjs-2/data/posts.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthService = function () {
    function AuthService(clientId, domain) {
        (0, _classCallCheck3.default)(this, AuthService);

        // config Auth0
        this.clientId = clientId;
        this.domain = domain;

        this.lock = new Auth0Lock(clientId, domain, {});
        // add callback for lock 'authenticated' event
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        // binds login function to keep context
        this.login = this.login.bind(this);
    }

    (0, _createClass3.default)(AuthService, [{
        key: '_doAuthentication',
        value: function _doAuthentication(authResult) {
            // Saves the user token
            this.setToken(authResult.idToken);
        }
    }, {
        key: 'getLock',
        value: function getLock() {
            // an instance of lock
            return new Auth0Lock(this.clientId, this.domain, {});
        }
    }, {
        key: 'login',
        value: function login() {
            // call the new method to display the widget
            this.lock.show();
        }
    }, {
        key: 'loggedIn',
        value: function loggedIn() {
            // checks if there is a saved token and it's still valid
            return !!this.getToken();
        }
    }, {
        key: 'setToken',
        value: function setToken(idToken) {
            // saves user token to localStorage
            localStorage.setItem('id_token', idToken);
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            // retrieves the user token from localStorage
            return localStorage.getItem('id_token');
        }
    }, {
        key: 'logout',
        value: function logout() {
            // clear user token and profile data from localStorage
            localStorage.removeItem('id_tokeb');
        }
    }]);

    return AuthService;
}();

exports.default = AuthService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/M5/next-projects/project-nextjs-2/utils/AuthService.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/M5/next-projects/project-nextjs-2/utils/AuthService.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);


/***/ })

},[567]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9jZTQ5NWMzIiwid2VicGFjazovLy8uL2RhdGEvcG9zdHMuanM/Y2U0OTVjMyIsIndlYnBhY2s6Ly8vLi91dGlscy9BdXRoU2VydmljZS5qcz9jZTQ5NWMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7MENBSUM7bUJBQU8sRUFDVjtBQUVEOzs7b0JBQVksT0FBTzs0Q0FBQTs7MElBRWY7O2NBQUssUUFBUSxFQUFFLFVBQVU7ZUFDNUI7Ozs7OzRDQUVtQjt5QkFDaEI7O2lCQUFLLE9BQVcsMEJBQVksb0NBQzVCO2lCQUFLLFNBQVMsRUFBRSxVQUFVLEtBQUssS0FDL0I7QUFDQTtpQkFBSyxPQUFPLEtBQUssS0FDakI7aUJBQUssS0FBSyxHQUFHLGtCQUFrQixZQUMzQjt1QkFBSyxTQUFTLEVBQUUsVUFBVSxPQUFLLEtBQ2xDO0FBQ0o7Ozs7Z0NBR0c7aUJBQUssS0FDUjs7OztpQ0FFUTt5QkFFTDs7Z0JBQU0sbUJBQW1CLE1BQU0sMkJBQVc7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSx1QkFBdEIsbUJBQXlDLDBCQUFRLFNBQVMsS0FBSyxNQUFNLEtBQUs7OEJBQWpDO2dDQUFBO0FBQUE7YUFBQSxFQUU3RDs7bUNBQ0k7NEJBQUE7OzhCQUFBO2dDQUNJO0FBREo7QUFBQSwrQkFDSSx1QkFBSyxXQUFVLHNCQUFmOzs4QkFBQTtnQ0FDSTtBQURKO3lEQUNZLEtBQUksOERBQVo7OzhCQUFBO2dDQUNFO0FBREY7Z0JBR0E7NEJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUVKLHlHQUFPLFdBQVUscUJBQWpCOzs4QkFBQTtnQ0FDSTtBQURKOytCQUNJOzRCQUFBOzs4QkFBQTtnQ0FDRTtBQURGO0FBQUEsK0JBQ0U7NEJBQUE7OzhCQUFBO2dDQUNJO0FBREo7QUFBQSwrQkFDSSxzQkFBSSxXQUFVLGtCQUFkOzs4QkFBQTtnQ0FBQTtBQUFBO2VBQ0Esb0RBQUksV0FBVSxrQkFBZDs7OEJBQUE7Z0NBQUE7QUFBQTtlQUdOOzRCQUFBOzs4QkFBQTtnQ0FFSTtBQUZKO0FBQUEsb0JBRVMsTUFBTSxNQUFNLElBQUksVUFBQyxNQUFNLEdBQVA7dUNBQ2pCLHNCQUFJLEtBQUssZUFBVDs7a0NBQUE7b0NBQ0k7QUFESjtpQkFBQSxrQkFDSSxzQkFBSSxXQUFVLGtCQUFkOztrQ0FBQTtvQ0FBcUI7QUFBckI7d0JBQ0EsaURBQUksV0FBVSxrQkFBZDs7a0NBQUE7b0NBQ007QUFETjswQkFDVyxNQUFNLDJCQUNOLGdDQUFLLHVCQUFxQixLQUFLO2tDQUFoQztvQ0FBd0M7QUFBeEM7aUJBQUEsT0FBNkMsNEJBQzdDO2dDQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUE7QUFObEI7eUJBaEJaO3FCQThFUDtBQTlFTzs7Ozs7RUE3QmlCLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xuQyxJQUFNO2dCQUdFO2dCQUNBO1VBQ0E7bUJBQ0E7YUFBUztBQUpULENBRk07Z0JBVU47Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUFTO0FBSlQ7Z0JBUUE7Z0JBQ0E7VUFDQTttQkFDQTthQUlSO0FBUlE7O2tCQVFPLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFUjs7Ozs7O0lBRWMsMEJBQ25CO3lCQUFZLFVBQVUsUUFBUTs0Q0FDMUI7O0FBQ0E7YUFBSyxXQUNMO2FBQUssU0FFTDs7YUFBSyxPQUFPLElBQUksVUFBVSxVQUFVLFFBQ3BDO0FBQ0E7YUFBSyxLQUFLLEdBQUcsaUJBQWlCLEtBQUssa0JBQWtCLEtBQ3JEO0FBQ0E7YUFBSyxRQUFRLEtBQUssTUFBTSxLQUMzQjs7Ozs7MENBQ2lCLFlBQ2Q7QUFDQTtpQkFBSyxTQUFTLFdBQ2pCOzs7O2tDQUdHO0FBQ0E7bUJBQU8sSUFBSSxVQUFVLEtBQUssVUFBVSxLQUFLLFFBQzVDOzs7O2dDQUdHO0FBQ0E7aUJBQUssS0FDUjs7OzttQ0FHRztBQUNBO21CQUFPLENBQUMsQ0FBQyxLQUNaOzs7O2lDQUVRLFNBQ0w7QUFDQTt5QkFBYSxRQUFRLFlBQ3hCOzs7O21DQUdHO0FBQ0E7bUJBQU8sYUFBYSxRQUN2Qjs7OztpQ0FHRztBQUNBO3lCQUFhLFdBQ2hCOzs7Ozs7O2tCQTdDa0IsWSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvQXV0aFNlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyBwb3N0czogcG9zdHMgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBsb2dnaW5JbjogZmFsc2UgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2MwZFBxWlRhaEdySjRSNHNiclpwNFl2YVk4alRzU1o1JywgJ21hdmVyaWNrNS5hdXRoMC5jb20nICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dnZWRJbjogdGhpcy5hdXRoLmxvZ2dlZEluKCkgfSlcbiAgICAgICAgLy8gaW5zdGFuY2Ugb2YgbG9ja1xuICAgICAgICB0aGlzLmxvY2sgPSB0aGlzLmF1dGguZ2V0TG9jaygpO1xuICAgICAgICB0aGlzLmxvY2sub24oJ2F1dGhlbnRpY2F0aW9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2dlZEluOiB0aGlzLmF1dGgubG9nZ2VkSW4oKSB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ2luKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSB0aGlzLnN0YXRlLmxvZ2dlZEluID8gPGRpdj5IZWxsbzwvZGl2PiA6IDxidXR0b24gb25DbGljaz17dGhpcy5sb2dpbi5iaW5kKHRoaXMpfT5sb2dpbjwvYnV0dG9uPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5hdXRoMC5jb20vanMvbG9jay8xMC41L2xvY2subWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIHsgbG9naW5CdXR0b259XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5FWFRIUk9ORSAtIFRIRSBSRVZFTEFUSU9OIE9GIEdBTUUgT0YgVEhST05FUycgQ0hBUkFDVEVSUzwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCc+Q2hhcmFjdGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgnPlJlYWwgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+eyBwb3N0LmNvZGVOYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9nZ2VkSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxMaW5rIGhyZWY9e2AvYWNjb3VudD9pZD0ke3Bvc3QuaWR9YH0+eyBwb3N0LnJlYWxOYW1lIH08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PiAneW91IG5lZWQgdG8gbG9naW4nIDwvZGl2PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC50aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAzNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTVweCBNb25hY287XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogQXJpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IDJweCBzb2xpZCAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5waG90byB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBob3RvTGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImNvbnN0IHBvc3RzID0gW1xuICAgIHtcbiAgICAgICAgXCJjb2RlTmFtZVwiOlwiSm9uIFNub3dcIixcbiAgICAgICAgXCJyZWFsTmFtZVwiOlwiS2l0IEhhcmluZ3RvblwiLFxuICAgICAgICBcImlkXCI6XCIxMTYxMDIyOTY2NDA2OTU2NTAzXCIsXG4gICAgICAgIFwiZGlzcGxheV9zcmNcIjpcImh0dHA6Ly92aWduZXR0ZTQud2lraWEubm9jb29raWUubmV0L2dhbWVvZnRocm9uZXMvaW1hZ2VzLzUvNTYvSm9uX0tpbGxfdGhlX0JveS5qcGcvcmV2aXNpb24vbGF0ZXN0P2NiPTIwMTUwNTA4MTIwODMzXCIsXG4gICAgICAgIFwic3RvcnlcIjogXCJOZWQgU3RhcmsncyBiYXN0YXJkIHNvbiwgSm9uIGpvaW5lZCB0aGUgTmlnaHQncyBXYXRjaC4gT24gYSBtaXNzaW9uIGZvciBMb3JkIENvbW1hbmRlciBNb3Jtb250LCBKb24gaW5maWx0cmF0ZWQgdGhlIHdpbGRsaW5ncyBieSBwcmV0ZW5kaW5nIHRvIGZvcnNha2UgaGlzIE5pZ2h0IFdhdGNoIGJyb3RoZXJzLiBJbiBkb2luZyBzbywgaGUgZmVsbCBpbiBsb3ZlIHdpdGggWWdyaXR0ZSwgYSB3aWxkbGluZyB3b21hblwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZU5hbWVcIjpcIkFyeWEgU3RhcmtcIixcbiAgICAgICAgXCJyZWFsTmFtZVwiOlwiTWFpc2llIFdpbGxpYW1zXCIsXG4gICAgICAgIFwiaWRcIjpcIjExNjA4NDQ0NTgzNDcwNTQ3ODFcIixcbiAgICAgICAgXCJkaXNwbGF5X3NyY1wiOlwiaHR0cDovL3ZpZ25ldHRlMS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvZS9lOS9BcnlhX1N0YXJrXzQuanBnL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE0MDQyODE1MjUxNVwiLFxuICAgICAgICBcInN0b3J5XCI6IFwiVGhlIHlvdW5nZXIgb2YgdGhlIFN0YXJrIGRhdWdodGVycywgQXJ5YSBoYXMgcHV0IGhlciBzdXJ2aXZhbCBza2lsbHMgdG8gdXNlIGFzIHNoZSBjb250aW51ZXMgdG8gZXZhZGUgdGhlIExhbm5pc3RlciBmb3JjZXMgdGhhdCBzZWVrIGhlci4gRW4gcm91dGUgdG8gdGhlIFR3aW5zIGluIHNlYXJjaCBvZiBoZXIgbW90aGVyIGFuZCBicm90aGVyLCBzaGUgYXJyaXZlZCBhdCB0aGUgY2FzdGxlIGFmdGVyIHRoZSBSZWQgV2VkZGluZy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVOYW1lXCI6XCJNZWxpc2FuZHJlXCIsXG4gICAgICAgIFwicmVhbE5hbWVcIjpcIkNhcmljZSB2YW4gSG91dGVuXCIsXG4gICAgICAgIFwiaWRcIjpcIjExNTQ2MDY2NzAzMzczOTM3NTJcIixcbiAgICAgICAgXCJkaXNwbGF5X3NyY1wiOlwiaHR0cDovL3ZpZ25ldHRlMi53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvNy83Yy9NZWxpc2FuZHJlX1RoZV9EYW5jZV9vZl9EcmFnb25zLmpwZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNTA2MDQyMDQ4NTlcIixcbiAgICAgICAgXCJzdG9yeVwiOiBcIkEgUmVkIHByaWVzdGVzcyBmcm9tIEFzc2hhaSwgTWVsaXNhbmRyZSB3b3JzaGlwcyB0aGUgTG9yZCBvZiBMaWdodC4gSGVyIHZpc2lvbnMgaGF2ZSB0b2xkIGhlciB0aGF0IFN0YW5uaXMgaXMgdGhlIHRydWUga2luZyBhbmQgYXMgaGlzIGFkdmlzb3IsIHNoZSBoYXMgZW5jb3VyYWdlZCBoaW0gdG8gcHVyc3VlIHRoZSB0aHJvbmUgYXQgYWxsIGNvc3RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlTmFtZVwiOlwiVHlyaW9uIExhbm5pc3RlclwiLFxuICAgICAgICBcInJlYWxOYW1lXCI6XCJQZXRlciBEaW5rbGFnZVwiLFxuICAgICAgICBcImlkXCI6XCIxMTU3MTc5ODYzMjY2ODcxMjI5XCIsXG4gICAgICAgIFwiZGlzcGxheV9zcmNcIjpcImh0dHA6Ly92aWduZXR0ZTEud2lraWEubm9jb29raWUubmV0L2dhbWVvZnRocm9uZXMvaW1hZ2VzLzYvNjEvVGhlX2NoaWxkcmVuX1R5cmlvbl93aXRoX0Jvd19TNC5wbmcvcmV2aXNpb24vbGF0ZXN0P2NiPTIwMTQwNjE2MTkwNTE0XCIsXG4gICAgICAgIFwic3RvcnlcIjogXCJXaGF0IFR5cmlvbiBsYWNrcyBpbiBzaXplIGFuZCBzdHJlbmd0aCwgaGUgbWFrZXMgdXAgZm9yIGluIG1lbnRhbCBhY3VpdHkuIEZvcm1lciBIYW5kIG9mIHRoZSBLaW5nIGluIGhpcyBmYXRoZXIncyBhYnNlbmNlLCBoZSBub3cgc2VydmVzIGFzIE1hc3RlciBvZiBDb2luIG9uIHRoZSBTbWFsbCBDb3VuY2lsLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZU5hbWVcIjpcIlJhbXNheSBCb2x0b25cIixcbiAgICAgICAgXCJyZWFsTmFtZVwiOlwiSXdhbiBSaGVvblwiLFxuICAgICAgICBcImlkXCI6XCIxMTI2MjkzNjYzMTQwMzk5MDUzXCIsXG4gICAgICAgIFwiZGlzcGxheV9zcmNcIjpcImh0dHA6Ly9pLmx2My5oYm8uY29tL2Fzc2V0cy9pbWFnZXMvc2VyaWVzL2dhbWUtb2YtdGhyb25lcy9jaGFyYWN0ZXIvczUvcmFtc2F5LTE5MjAuanBnXCIsXG4gICAgICAgIFwic3RvcnlcIjogXCJBIGJhc3RhcmQgc29uIG9mIFJvb3NlIEJvbHRvbiwgUmFtc2F5J3MgYmxvb2RsdXN0IGlzIGV2ZW4gc3Ryb25nZXIgdGhhbiBoaXMgZmF0aGVyJ3MuIEFmdGVyIHRha2luZyBXaW50ZXJmZWxsLCBoZSBjYXB0dXJlZCBUaGVvbiBHcmV5am95IGFuZCBzbG93bHkgdG9ydHVyZWQgaGltIGludG8gc3VibWlzc2lvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVOYW1lXCI6XCJQZXR5ciBCYWVsaXNoXCIsXG4gICAgICAgIFwicmVhbE5hbWVcIjpcIkFpZGFuIEdpbGxlblwiLFxuICAgICAgICBcImlkXCI6XCIxMTE3NDE4MTczMzYxMTQ1MzY1XCIsXG4gICAgICAgIFwiZGlzcGxheV9zcmNcIjpcImh0dHA6Ly92aWduZXR0ZTMud2lraWEubm9jb29raWUubmV0L2dhbWVvZnRocm9uZXMvaW1hZ2VzL2YvZjgvQm9va19vZl90aGVfU3RyYW5nZXJfMDUuanBnL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE2MDUxMjE2NTMyOVwiLFxuICAgICAgICBcInN0b3J5XCI6IFwiTmFrZWRseSBhbWJpdGlvdXMsIExpdHRsZWZpbmdlciBsZWZ0IHRoZSBTbWFsbCBDb3VuY2lsIHRvIG1hcnJ5IEx5c2EgQXJyeW4gYW5kIHNlY3VyZSB0aGUgVmFsZSB0byB0aGUgTGFubmlzdGVyJ3Mgc2lkZS4gQmV5b25kIGhpcyBvZmZpY2lhbCBkdXRpZXMsIGhlIGlzIHRoZSBleWVzIGFuZCBlYXJzIG9mIEtpbmcncyBMYW5kaW5nIGFsb25nIHdpdGggVmFyeXMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlTmFtZVwiOlwiQnJpZW5uZSBvZiBUYXJ0aFwiLFxuICAgICAgICBcInJlYWxOYW1lXCI6XCJHd2VuZG9saW5lIENocmlzdGllXCIsXG4gICAgICAgIFwiaWRcIjpcIjExNjI0MTg2NTE0ODAwNDk2NDZcIixcbiAgICAgICAgXCJkaXNwbGF5X3NyY1wiOlwiaHR0cDovL3ZpZ25ldHRlMi53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvOC84OS9Ccmllbm5lX01vdGhlcidzX01lcmN5LmpwZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNTA2MTcwMTE5MTVcIixcbiAgICAgICAgXCJzdG9yeVwiOiBcIkJyaWVubmUgaXMgYSBoaWdoYm9ybiBsYWR5IHdobyB3b3VsZCByYXRoZXIgYmUgYSBrbmlnaHQuIEFzIENhdGVseW4gU3RhcmsncyBlbnZveSwgc2hlIGVzY29ydGVkIEphaW1lIExhbm5pc3RlciBiYWNrIHRvIEtpbmdzIExhbmRpbmcuIFRoZSB0d28gZmlnaHRlcnMgZGV2ZWxvcGVkIGEgbXV0dWFsIHJlc3BlY3QgZm9yIGVhY2ggb3RoZXIgZHVyaW5nIHRoZWlyIGpvdXJuZXkuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlTmFtZVwiOlwiTG9yZCBWYXJ5c1wiLFxuICAgICAgICBcInJlYWxOYW1lXCI6XCJDb25sZXRoIEhpbGxcIixcbiAgICAgICAgXCJpZFwiOlwiMTE1Mjk2NDAwMjQ3MzY5MDU1M1wiLFxuICAgICAgICBcImRpc3BsYXlfc3JjXCI6XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMzU0MjcyNzM3OC9kMDU5OWVhZDZmZGE2ZTQyOGM1ZGJmMTA2ZTcxNjFmYS5qcGVnXCIsXG4gICAgICAgIFwic3RvcnlcIjogXCJBIGV1bnVjaCBhbmQgYSBtZW1iZXIgb2YgdGhlIFNtYWxsIENvdW5jaWwsIFZhcnlzIGlzIGFsc28gYSBtYXN0ZXIgb2YgZGlzZ3Vpc2UuIEFsb25nIHdpdGggTGl0dGxlZmluZ2VyLCBoZSBpcyBhbHdheXMgYXdhcmUgb2Ygd2hhdCBnb2VzIG9uIGluIENvdXJ0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZU5hbWVcIjpcIkRhZW5lcnlzIFRhcmdhcnllblwiLFxuICAgICAgICBcInJlYWxOYW1lXCI6XCJFbWlsaWEgQ2xhcmtlXCIsXG4gICAgICAgIFwiaWRcIjpcIjExNTA4MjQxNzE5MTIxNTIzMjBcIixcbiAgICAgICAgXCJkaXNwbGF5X3NyY1wiOlwiaHR0cDovL2kubHYzLmhiby5jb20vYXNzZXRzL2ltYWdlcy9zZXJpZXMvZ2FtZS1vZi10aHJvbmVzL2NoYXJhY3Rlci9zNS9kYWVuYXJ5cy0xMDI0LmpwZ1wiLFxuICAgICAgICBcInN0b3J5XCI6IFwiUHJpbmNlc3Mgb2YgSG91c2UgVGFyZ2FyeWVuLCBEYWVuZXJ5cyBsaXZlcyBpbiBleGlsZSBpbiBFc3NvcyB3aXRoIGhlciBhZHZpc29ycyBhbmQgZHJhZ29ucy4gRGFueSByYWxsaWVkIHRoZSBVbnN1bGxpZWQgb2YgQXN0YXBvciB0byBoZXIgY2F1c2UgYW5kIGNvbnRpbnVlcyB0byBncm93IHRoZSBhcm15IHNoZSBuZWVkcyB0byB0YWtlIGJhY2sgdGhlIHRocm9uZS5cIlxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvcG9zdHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY2xpZW50SWQsIGRvbWFpbikge1xuICAgICAgLy8gY29uZmlnIEF1dGgwXG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWRcbiAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluXG5cbiAgICAgIHRoaXMubG9jayA9IG5ldyBBdXRoMExvY2soY2xpZW50SWQsIGRvbWFpbiwge30pXG4gICAgICAvLyBhZGQgY2FsbGJhY2sgZm9yIGxvY2sgJ2F1dGhlbnRpY2F0ZWQnIGV2ZW50XG4gICAgICB0aGlzLmxvY2sub24oJ2F1dGhlbnRpY2F0ZWQnLCB0aGlzLl9kb0F1dGhlbnRpY2F0aW9uLmJpbmQodGhpcykpXG4gICAgICAvLyBiaW5kcyBsb2dpbiBmdW5jdGlvbiB0byBrZWVwIGNvbnRleHRcbiAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcylcbiAgfVxuICBfZG9BdXRoZW50aWNhdGlvbihhdXRoUmVzdWx0KSB7XG4gICAgICAvLyBTYXZlcyB0aGUgdXNlciB0b2tlblxuICAgICAgdGhpcy5zZXRUb2tlbihhdXRoUmVzdWx0LmlkVG9rZW4pXG4gIH1cblxuICBnZXRMb2NrKCkge1xuICAgICAgLy8gYW4gaW5zdGFuY2Ugb2YgbG9ja1xuICAgICAgcmV0dXJuIG5ldyBBdXRoMExvY2sodGhpcy5jbGllbnRJZCwgdGhpcy5kb21haW4sIHt9KTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgICAgLy8gY2FsbCB0aGUgbmV3IG1ldGhvZCB0byBkaXNwbGF5IHRoZSB3aWRnZXRcbiAgICAgIHRoaXMubG9jay5zaG93KClcbiAgfVxuXG4gIGxvZ2dlZEluKCkge1xuICAgICAgLy8gY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGl0J3Mgc3RpbGwgdmFsaWRcbiAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKVxuICB9XG5cbiAgc2V0VG9rZW4oaWRUb2tlbikge1xuICAgICAgLy8gc2F2ZXMgdXNlciB0b2tlbiB0byBsb2NhbFN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIGlkVG9rZW4pXG4gIH1cblxuICBnZXRUb2tlbigpIHtcbiAgICAgIC8vIHJldHJpZXZlcyB0aGUgdXNlciB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgICAvLyBjbGVhciB1c2VyIHRva2VuIGFuZCBwcm9maWxlIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlYicpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvQXV0aFNlcnZpY2UuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        