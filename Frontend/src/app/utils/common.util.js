"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 'Rent & Utilities' => 'rent-&-utilities'
 * @param type
 */
exports.getIconClass = function (item) {
    if (!item) {
        return '';
    }
    return item.toLocaleLowerCase().replace(/ /g, '-');
};
/**
 * 'Rent & Utilities' => 'rent-utilities'
 * @param type
 */
exports.getIconName = function (type) {
    if (!type) {
        return '';
    }
    if ('Rent & Utilities' === type) {
        return 'rent-utilities';
    }
    else {
        return exports.getIconClass(type);
    }
};
//# sourceMappingURL=common.util.js.map