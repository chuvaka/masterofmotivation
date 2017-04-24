import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ttl: string = 'Master of Motivation';
  inputText: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  startLevels() {
    this.router.navigate(['level/', 0])
  }
}
