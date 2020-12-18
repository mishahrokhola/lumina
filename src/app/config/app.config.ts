import { SunTheme } from '../enums/theme.enum';

export abstract class AppConfig {
	public static readonly animationThemeTime = 1000; // ms

	public static readonly sunThemeTime = [6, 17] as const; // hours

	public static readonly sunTheme: Readonly<Record<SunTheme, Readonly<[number, number]>>> = {
		[SunTheme.start]: [6, 9],
		[SunTheme.middle]: [10, 13],
		[SunTheme.end]: [14, 17],
	} as const;
}
