const path = require('path');

exports.resolve = function(...args) {
    return path.join(__dirname, '..', ...args);
};