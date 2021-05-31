import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng-app';
	navEls: Array<string>;
	constructor(){
	this.navEls = [
		'home',
		'community',
		'book-repository',
		'classified',
		'courses'
		];
 }
}