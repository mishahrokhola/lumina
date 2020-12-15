import { Component, HostBinding, OnInit } from '@angular/core';

import { ThemeService } from '../../services';

import { Theme } from '../../enums/theme.enum';

@Component({
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	@HostBinding('class') private currentTheme = this.theme.getThemeClass();

	constructor(private theme: ThemeService) {}

	public ngOnInit(): void {
		this.theme.theme$.subscribe((theme: Theme) => (this.currentTheme = this.theme.getThemeClass(theme)));
	}

	public handleThemeChange(): void {
		const theme = this.theme.getTheme();

		if (theme === Theme.sun) {
			return this.theme.setTheme(Theme.cosmos);
		}

		return this.theme.setTheme(Theme.sun);
	}
}
