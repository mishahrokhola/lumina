import { Component } from '@angular/core';
import { RandomService, ThemeService } from '../../../../services';
import { Theme } from '../../../../enums/theme.enum';
import { Cloud } from '../../../../types/cloud.interface';

@Component({
	selector: 'clouds',
	templateUrl: './clouds.component.html',
	styleUrls: ['./clouds.component.scss'],
})
export class CloudsComponent {
	private readonly cloudsNumber = 30;
	public readonly Theme = Theme;

	public currentTheme = this.theme.getTheme();

	public cloudOpacity = this.getCloudOpacity(this.theme.getTheme());

	public readonly clouds: Cloud[];

	constructor(private theme: ThemeService, private random: RandomService) {
		this.clouds = Array.from({ length: this.cloudsNumber }, () => this.generateCloud());

		this.theme.theme$.subscribe((newTheme: Theme) => {
			this.cloudOpacity = this.getCloudOpacity(newTheme);
			this.currentTheme = newTheme;
		});
	}

	private generateCloud(): Cloud {
		return {
			index: this.random.getNumber(1, 14),
			animation: this.random.getNumber(1, 10),
			opacity: this.random.getNumber(10, 30),
			top: this.random.getNumber(0, 100),
			left: this.random.getNumber(-25, 100),
			width: this.random.getNumber(5, 20),
		};
	}

	private getCloudOpacity(theme: Theme): number {
		if (theme === Theme.sun) {
			return 0.4;
		}

		return 0;
	}
}
