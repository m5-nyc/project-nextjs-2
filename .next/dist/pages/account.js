'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/M5/next-projects/project-nextjs-2/pages/account.js?entry';

exports.default = function (_ref) {
    var id = _ref.url.query.id;

    var item = _.find(_posts2.default, { id: id });

    return _react2.default.createElement('div', { className: 'main', 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Home'), _react2.default.createElement('div', { className: 'header', 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('h3', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS ')), _react2.default.createElement('div', { className: 'panel', 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('h1', { className: 'heading', 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Character: ', item.codeName, _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), 'Real Name: ', item.realName, _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), 'Brief Description:', _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement('br', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('span', {
        'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, item.story))), _react2.default.createElement('div', { className: '\'singlePhoto', 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('img', { src: item.display_src, alt: item.realName, width: 500, height: 500, 'data-jsx': 1446946946,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: 1446946946,
        css: '.main[data-jsx="1446946946"] {padding: 50px;}.header[data-jsx="1446946946"] {font: 15px Monaco;textAlign: center;}.panel[data-jsx="1446946946"] {float: right;marginRight: 140px;width: 300px;}.singlePhoto[data-jsx="1446946946"] {border: 1px solid #999;width: 500px;height: 500px;float: left;}.heading[data-jsx="1446946946"] {font: 15px Monaco                    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnQuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUN3QixBQUNHLDhCQUNXLGNBQ2pCLENBQ1EsZ0NBQ2Esa0JBQ0Esa0JBQ3JCLENBQ08sK0JBQ1MsYUFDTSxtQkFDTixhQUNoQixDQUNhLHFDQUNhLHVCQUNWLGFBQ0MsY0FDRixZQUNmLENBQ1MsaUNBRVQiLCJmaWxlIjoicGFnZXMvYWNjb3VudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTTUvbmV4dC1wcm9qZWN0cy9wcm9qZWN0LW5leHRqcy0yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsOiB7cXVlcnk6IHtpZH0gfSB9KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IF8uZmluZChwb3N0cywge2lkOiBpZCB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgICAgICAgPGgzPiBORVhUSFJPTkUgLSBUSEUgUkVWRUxBVElPTiBPRiBHQU1FIE9GIFRIUk9ORVMnIENIQVJBQ1RFUlMgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwnPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICBDaGFyYWN0ZXI6IHsgaXRlbS5jb2RlTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgUmVhbCBOYW1lOiB7IGl0ZW0ucmVhbE5hbWUgfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIEJyaWVmIERlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgaXRlbS5zdG9yeSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCInc2luZ2xlUGhvdG9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IGl0ZW0uZGlzcGxheV9zcmMgfSBhbHQ9e2l0ZW0ucmVhbE5hbWV9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiAxNXB4IE1vbmFjbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZVBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTVweCBNb25hY29cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59Il19 */\n/*@ sourceURL=pages/account.js?entry */'
    }));
};