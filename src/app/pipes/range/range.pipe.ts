import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'range',
})
export class RangePipe implements PipeTransform {
	public transform(count: number): number[] {
		return Array.from({ length: count }, (v, i) => i);
	}
}
