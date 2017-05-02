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

	public static backupMakeUrl =  AppSettings.baseUrl + 'backups/make/';
	public static backupMakeMediaUrl =  AppSettings.baseUrl + 'backups/make/media/';
	public static backupsUrl =  AppSettings.baseUrl + 'backups/';
	public static backupsEnableUrl =  AppSettings.baseUrl + 'backups/stoprun/';
	public static backupsSetTimeUrl =  AppSettings.baseUrl + 'backups/time/';
	public static backupsPathDirUrl =  AppSettings.baseUrl + 'backups/dirs/';
	public static backupGetMediaUrl = AppSettings.baseUrl + 'backups/file/';

}
