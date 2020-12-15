import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ClockService } from '../clock/clock.service';

import { Theme } from '../../enums/theme.enum';
import { AppConfig } from '../../config/app.config';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private isThemeSetByUser = false;

	private currentTheme = Theme.sun;

	public readonly theme$ = new Subject<Theme>();

	constructor(clock: ClockService) {
		clock.hour$.subscribe((hour) => {
			if (this.isThemeSetByUser) {
				return;
			}

			this.currentTheme = this.getThemeByTime(hour);
			this.theme$.next(this.currentTheme);
		});
	}

	public getTheme(): Theme {
		return this.currentTheme;
	}

	public setTheme(theme: Theme): void {
		this.currentTheme = theme;
		this.isThemeSetByUser = true;
		this.theme$.next(theme);
	}

	public getThemeClass(theme: Theme = this.currentTheme): string {
		return `theme--${theme}`;
	}

	public getThemeByTime(hour: number): Theme {
		const [from, to] = AppConfig.sunThemeTime;

		if (hour >= from && hour <= to) {
			return Theme.sun;
		}

		return Theme.cosmos;
	}
}
