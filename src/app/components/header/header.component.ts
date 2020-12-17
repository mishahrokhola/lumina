import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../services';

import { Theme } from '../../enums/theme.enum';
import { AppConfig } from '../../config/app.config';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public currentTheme = this.theme.getTheme();

	public isAnimation = false;

	constructor(private theme: ThemeService) {
		this.theme.theme$.subscribe((newTheme: Theme) => (this.currentTheme = newTheme));
	}

	public ngOnInit(): void {}

	public handleThemeChange(): void {
		const theme = this.theme.getTheme();

		this.handleAnimation();

		if (theme === Theme.sun) {
			return this.theme.setTheme(Theme.cosmos);
		}

		return this.theme.setTheme(Theme.sun);
	}

	private handleAnimation(): void {
		this.isAnimation = true;

		setTimeout(() => (this.isAnimation = false), AppConfig.animationThemeTime);
	}
}
