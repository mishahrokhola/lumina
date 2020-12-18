import { Component } from '@angular/core';
import { ThemeService } from '../../../../services';
import { Theme } from '../../../../enums/theme.enum';

@Component({
	selector: 'clouds',
	templateUrl: './clouds.component.html',
	styleUrls: ['./clouds.component.scss'],
})
export class CloudsComponent {
	public isShowCloud = this.theme.getTheme() === Theme.sun;

	constructor(private theme: ThemeService) {
		this.theme.theme$.subscribe((newTheme: Theme) => (this.isShowCloud = newTheme === Theme.sun));
	}
}
