import { Component, OnDestroy } from '@angular/core';
import { RandomService } from '../../../../services';

@Component({
	selector: 'star',
	templateUrl: './star.component.html',
	styleUrls: ['star.component.scss'],
})
export class StarComponent implements OnDestroy {
	private interval = -1;

	public readonly starNumber = this.random.getNumber(1, 10);

	public readonly top = this.random.getNumber(0, 1000);
	public readonly left = this.random.getNumber(0, 2000);

	public isHidden = false;

	constructor(private random: RandomService) {
		const intervalTime = this.random.getNumber(2_000, 7_000);
		const isAnimate = this.random.getNumber(0, 10) > 5;

		if (isAnimate) {
			this.interval = window.setInterval(() => (this.isHidden = !this.isHidden), intervalTime);
		}
	}

	public ngOnDestroy(): void {
		if (this.interval !== -1) {
			window.clearInterval(this.interval);
		}
	}
}
