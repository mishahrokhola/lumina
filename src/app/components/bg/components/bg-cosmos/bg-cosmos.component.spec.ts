import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCosmosComponent } from './bg-cosmos.component';

describe('BgCosmosComponent', () => {
	let component: BgCosmosComponent;
	let fixture: ComponentFixture<BgCosmosComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BgCosmosComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BgCosmosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
