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

var _react = require('react');

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