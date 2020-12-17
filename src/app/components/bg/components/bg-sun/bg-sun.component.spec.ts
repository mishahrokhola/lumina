import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSunComponent } from './bg-sun.component';

describe('BgSunComponent', () => {
	let component: BgSunComponent;
	let fixture: ComponentFixture<BgSunComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BgSunComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BgSunComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
