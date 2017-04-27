export class AppSettings {

	public static baseUrl = '/dash/api/';
	public static userUrl = AppSettings.baseUrl + 'user/';

	public static perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
	public static perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
	public static perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
	public static perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';

	public static bootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
	public static usersUrl = AppSettings.baseUrl + 'perf/users/';
	public static dashUrl = AppSettings.baseUrl + 'perf/dash/';

	public static processesUrl = AppSettings.baseUrl + 'processes/';
	public static processesAvarageNumberUrl =  AppSettings.baseUrl + 'processes/hours/';
	public static processesLastUrl =  AppSettings.baseUrl + 'processes/last/';

	public static secCorrectLoginUrl =  AppSettings.baseUrl + 'security/correctlogins/';
	public static secIncorrectLoginUrl =  AppSettings.baseUrl + 'security/incorrectlogins/';

	
}
