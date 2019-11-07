import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {
  // array of heroes for tracjBy check
  public heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];
  // prepare pipe| async
  heroPowerArray = ['крутивус', 'вернигора', 'вернидуб', 'котигорошко'];
  heroPower: Observable<string>;
  constructor() { }

  ngOnInit() {
  }

  // trackBy change array (can demonstrate how to react DOM when we try to change all heroes array)
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
  //  track by function
  public trackHero(index, hero) {
    console.log(hero);
    return hero ? hero.id : undefined;

  }

  // async pipe 
  showUkrainianHero() {
    const interval$ = interval(1000);
    const timer$ = timer(5000);
    this.heroPower = interval$.pipe(map((i: number) => this.heroPowerArray[i]), takeUntil(timer$));
  }
}
