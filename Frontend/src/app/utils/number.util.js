"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  transform to string, eg: 100000.20 => '1,000,00.20'
 * */
exports.numberCommasToString = function (x) {
    var parts = String(x).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};
/**
 *  '100%' => 100
 * */
exports.getNumber = function (percentage) {
    var n = percentage.substring(0, percentage.length - 1);
    return Number(n);
};
/**
 *  100.2 => 100
 * */
exports.getInteger = function (number) {
    return Math.floor(number);
};
//# sourceMappingURL=number.util.js.map