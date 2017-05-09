import { TestBed, inject } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';

describe('a tasks component', () => {
	let component: TasksComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TasksComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TasksComponent], (TasksComponent) => {
		component = TasksComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});