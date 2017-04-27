"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());
AppSettings.baseUrl = '/dash/api/';
AppSettings.perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
AppSettings.perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
AppSettings.perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
AppSettings.perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';
AppSettings.BootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
AppSettings.UsersUrl = AppSettings.baseUrl + 'perf/users/';
AppSettings.DashUrl = AppSettings.baseUrl + 'perf/dash/';
AppSettings.ProcessesUrl = AppSettings.baseUrl + 'processes/';
AppSettings.ProcessesAvarageNumberUrl = AppSettings.baseUrl + 'processes/hours/';
AppSettings.ProcessesLastUrl = AppSettings.baseUrl + 'processes/last/';
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map