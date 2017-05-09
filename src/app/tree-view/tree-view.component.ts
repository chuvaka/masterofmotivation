import { Component, OnInit, Input } from '@angular/core';
import {Directory} from './directory';

@Component({
	selector: 'tree-view',
	templateUrl: 'tree-view.component.html',
	styleUrls: ['tree-view.component.css']
})

export class TreeViewComponent implements OnInit {
	@Input() directories: Array<Directory>;

	constructor() {}

	ngOnInit() { }
}