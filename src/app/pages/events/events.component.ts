import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // add simple event listener for all clicks 
    this.elementRef.nativeElement.querySelector('a').addEventListener('click', () => console.log('click document listener'));
  }

  public hrefClick(e) {
    console.log('link clicked');
    console.log(e.target);

    e.preventDefault();
    // e.stopPropagation();
    // e.stopImmediatePropagation();
  }
  public childClick(e) {
    console.log('child clicked');
    console.log(e.currentTarget);
  }
  public parentClick(e) {
    console.log('parent clicked');
    console.log(e.currentTarget);
  }

}
