export class AppSettings {

	public static baseUrl = '/dash/api/';
	public static perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
	public static perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
	public static perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
	public static perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';

	public static BootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
	public static UsersUrl = AppSettings.baseUrl + 'perf/users/';
	public static DashUrl = AppSettings.baseUrl + 'perf/dash/';
}
