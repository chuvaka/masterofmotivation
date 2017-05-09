import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'component-one',
	templateUrl: 'component-one.component.html'
})

export class ComponentOneComponent implements OnInit {

	@Input() title: string;

	constructor() {}

	ngOnInit() {
		console.log(this.title);
	}
}