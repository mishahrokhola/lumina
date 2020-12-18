import { Component, HostBinding, OnInit } from '@angular/core';

import { ClockService, ThemeService } from '../../services';

import { SunTheme, Theme } from '../../enums/theme.enum';
import { AppConfig } from '../../config/app.config';

@Component({
	selector: 'bg',
	templateUrl: './bg.component.html',
	styleUrls: ['./bg.component.scss'],
})
export class BgComponent implements OnInit {
	@HostBinding('class.main-bg') private mainThemeClass = true;

	public readonly Theme = Theme;

	public currentTheme = this.theme.getTheme();

	public sunTheme = SunTheme.start;

	constructor(private clock: ClockService, private theme: ThemeService) {
		this.theme.theme$.subscribe((newTheme: Theme) => (this.currentTheme = newTheme));
		this.clock.hour$.subscribe((hour: number) => (this.sunTheme = this.handleNewHour(hour)));
	}

	public ngOnInit(): void {}

	private handleNewHour(hour: number): SunTheme {
		const [fromS, toS] = AppConfig.sunTheme.start;

		if (hour >= fromS && hour <= toS) {
			return SunTheme.start;
		}

		const [fromM, toM] = AppConfig.sunTheme.middle;

		if (hour >= fromM && hour <= toM) {
			return SunTheme.middle;
		}

		return SunTheme.end;
	}
}
