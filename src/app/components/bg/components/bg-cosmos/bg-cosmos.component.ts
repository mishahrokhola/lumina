import { Component } from '@angular/core';
import { RangePipe } from '../../../../pipes';

@Component({
	selector: 'bg-cosmos',
	templateUrl: './bg-cosmos.component.html',
	styleUrls: ['./bg-cosmos.component.scss'],
})
export class BgCosmosComponent {
	public readonly startArray = this.range.transform(700);

	constructor(private range: RangePipe) {}
}
