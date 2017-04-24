'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/M5/next-projects/project-nextjs-2/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('div', { className: 'header', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('h3', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS')), _react2.default.createElement('table', { className: 'table', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('thead', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('tr', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('th', { className: 'th', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Character'), _react2.default.createElement('th', { className: 'th', 'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Real Name'))), _react2.default.createElement('tbody', {
                'data-jsx': 3588096288,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, this.props.posts.map(function (post, i) {
                return _react2.default.createElement('tr', { key: i, 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement('td', { className: 'td', 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, post.codeName), _react2.default.createElement('td', { className: 'td', 'data-jsx': 3588096288,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement(_link2.default, { href: '/account?id=' + post.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }, post.realName)));
            }))), _react2.default.createElement(_style2.default, {
                styleId: 3588096288,
                css: '.th[data-jsx="3588096288"] {background: #00cccc;color: #fff;textTransform: \'uppercase\';fontSize: 12px;padding: 12px 35px;}.header[data-jsx="3588096288"] {font: 15px Monaco;textAlign: center;}.table[data-jsx="3588096288"] {fontFamily: Arial;margin: 25px auto;borderCollapse: collapse;border: 1px solid #eee;borderBottom: 2px solid #00cccc;}.td[data-jsx="3588096288"] {color: #999;border: 1px solid #eee;padding: 12px 35px;borderCollapse: collapse;}.list[data-jsx="3588096288"] {padding: 50px;textAlign: center;}.photo[data-jsx="3588096288"] {display: inline-block;}.photoLink[data-jsx="3588096288"] {color: #333;verticalAlign: middle;cursor: pointer;background: #eee;display: inline-block;width: 250px;height: 250px;lineHeight: 250px;margin: 10px;border: 2px solid transparent;\'hover\'[data-jsx="3588096288"]: {borderColor: blue;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIsQUFDSCw0QkFDbUIsb0JBQ1IsWUFDZSwyQkFDWixlQUNJLG1CQUN0QixDQUNRLGdDQUNhLGtCQUNBLGtCQUNyQixDQUNPLCtCQUNjLGtCQUNBLGtCQUNPLHlCQUNGLHVCQUNTLGdDQUNuQyxDQUNJLDRCQUNXLFlBQ1csdUJBQ0osbUJBQ00seUJBQzVCLENBQ00sOEJBQ1csY0FDSSxrQkFDckIsQ0FDTywrQkFDa0Isc0JBQ3pCLENBQ1csbUNBQ0ksWUFDVSxzQkFDTixnQkFDQyxpQkFDSyxzQkFDVCxhQUNDLGNBQ0ksa0JBQ0wsYUFDaUIsOEJBQ3BCLGlDQUNZLGtCQUNyQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTTUvbmV4dC1wcm9qZWN0cy9wcm9qZWN0LW5leHRqcy0yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyBwb3N0czogcG9zdHMgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TkVYVEhST05FIC0gVEhFIFJFVkVMQVRJT04gT0YgR0FNRSBPRiBUSFJPTkVTJyBDSEFSQUNURVJTPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RoJz5DaGFyYWN0ZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCc+UmVhbCBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz57IHBvc3QuY29kZU5hbWUgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWNjb3VudD9pZD0ke3Bvc3QuaWR9YH0+eyBwb3N0LnJlYWxOYW1lIH08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC50aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAzNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTVweCBNb25hY287XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogQXJpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IDJweCBzb2xpZCAjMDBjY2NjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5waG90byB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBob3RvTGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return { posts: _posts2.default };
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;