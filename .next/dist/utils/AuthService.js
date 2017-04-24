'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

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