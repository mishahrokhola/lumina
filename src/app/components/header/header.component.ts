import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../services';

import { Theme } from '../../enums/theme.enum';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public currentTheme = this.theme.getTheme();

	constructor(private theme: ThemeService) {
		this.theme.theme$.subscribe((newTheme: Theme) => (this.currentTheme = newTheme));
	}

	public ngOnInit(): void {}

	public handleThemeChange(): void {
		const theme = this.theme.getTheme();

		if (theme === Theme.sun) {
			return this.theme.setTheme(Theme.cosmos);
		}

		return this.theme.setTheme(Theme.sun);
	}
}
