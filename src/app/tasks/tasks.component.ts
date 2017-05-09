import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tasks',
	templateUrl: 'tasks.component.html'
})

export class TasksComponent implements OnInit {

	title: string;

	ngOnInit() { 
		// setTimeout(() => {
		// 	this.title = 'Title';
		// 	alert(this.title);
		// }, 5000);
	}
}