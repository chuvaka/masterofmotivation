import { TestBed, inject } from '@angular/core/testing';

import { TreeViewComponent } from './tree-view.component';

describe('a tree-view component', () => {
	let component: TreeViewComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TreeViewComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TreeViewComponent], (TreeViewComponent) => {
		component = TreeViewComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});