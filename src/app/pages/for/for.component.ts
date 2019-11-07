import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {
  public heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];
  constructor() { }

  ngOnInit() {

  }

  public otherArrayHero() {
    this.heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 5, name: 'BatGirl' },
      { id: 3, name: 'Robin' },
      { id: 4, name: 'Flash' },
      { id: 4, name: 'Flash2' },
    ]
 }

  public trackHero(index, hero) {
    console.log(hero);
    return hero ? hero.id : undefined;

  }
}
