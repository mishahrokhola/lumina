import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ClockService {
	public readonly timer$ = timer(0, 1_000);
	public readonly hour$ = this.getHourObservable();

	private getHourObservable(): Observable<number> {
		return new Observable<number>((subscriber) => {
			subscriber.next(new Date().getHours());

			this.timer$.subscribe(() => {
				const time = new Date();

				// Publish event each new hour
				if (this.isNewHour(time)) {
					subscriber.next(time.getHours());
				}
			});
		});
	}

	private isNewHour(time: Readonly<Date>): boolean {
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		return minutes === 0 && seconds === 0;
	}
}
