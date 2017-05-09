import { TestBed, inject } from '@angular/core/testing';

import { ComponentOneComponent } from './component-one.component';

describe('a component-one component', () => {
	let component: ComponentOneComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ComponentOneComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ComponentOneComponent], (ComponentOneComponent) => {
		component = ComponentOneComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});