import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directory } from '../tree-view/directory'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ttl: string = 'Master of Motivation';
  inputText: string;

  directories: Array<any>;

  constructor(private router: Router) {
    let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
    let pics = new Directory('Pictures',[summer2014,fall2014],[]);
    let arr = new Directory('Arr',[],['song1.mp3','song2.mp3']);
    let music = new Directory('Music',[arr],['song1.mp3','song2.mp3']);
    this.directories = [pics,music];
  }

  ngOnInit() {}

  startLevels() {
    this.router.navigate(['level/', 0])
  }
}
