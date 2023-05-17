import { Component, ViewChild, ElementRef } from '@angular/core';

const API_URL = 'https://api.quotable.io/random';

@Component({
  selector: 'sidebar-comp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('quoteBox') quoteBox!: ElementRef;
  logoimg:string="assets/images/books.png";

  trendingSubjects: Array<any> = [
    { name: 'Angular' },
    { name: 'WebDev' },
    { name: 'React' },
    { name: 'Sherlock' },
    { name: 'Internship' },
  ];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.getQuote();
  }

  getQuote() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const quoteElement = this.quoteBox.nativeElement.querySelector('#quote');
        const authorElement = this.quoteBox.nativeElement.querySelector('#author');
        quoteElement.innerText = `"${data.content}"`;
        authorElement.innerText = `- ${data.author}`;
      });
  }
}
