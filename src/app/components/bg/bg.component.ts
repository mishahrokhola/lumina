import { Component, HostBinding, OnInit } from '@angular/core';
import { Theme } from '../../enums/theme.enum';
import { ThemeService } from '../../services';

@Component({
	selector: 'bg',
	templateUrl: './bg.component.html',
	styleUrls: ['./bg.component.scss'],
})
export class BgComponent implements OnInit {
	@HostBinding('class.main-bg') private mainThemeClass = true;

	public readonly Theme = Theme;

	public currentTheme = this.theme.getTheme();

	constructor(private theme: ThemeService) {
		this.theme.theme$.subscribe((newTheme: Theme) => (this.currentTheme = newTheme));
	}

	public ngOnInit(): void {}
}
