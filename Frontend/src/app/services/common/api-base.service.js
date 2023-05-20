"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../environments/environment");
var apiHost = environment_1.environment.apiHost;
var ApiBaseService = /** @class */ (function () {
    function ApiBaseService(path, hostt) {
        if (path === void 0) { path = ''; }
        if (hostt === void 0) { hostt = apiHost; }
        this.host = hostt;
        this.host += path;
    }
    /**
     * return the api endpoint
     * @param path path string
     */
    ApiBaseService.prototype.endpoint = function (path) {
        if (path === void 0) { path = ''; }
        return this.host + path;
    };
    return ApiBaseService;
}());
exports.ApiBaseService = ApiBaseService;
//# sourceMappingURL=api-base.service.js.map