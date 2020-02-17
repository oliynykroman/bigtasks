import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  public resolve: string = '';
  public reject: string = '';
  public checkPromise;
  public checkPromiseReject;

  constructor() { }

  ngOnInit() {
    this.checkPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('xaxsa');
      }, 2000)
    });
  }

  promiseButton() {
    console.log(this.checkPromise);
    this.checkPromise.then(
      (result) => {
        console.log(result);
        this.resolve = result
      },
      (error) => new Error(error)
    );
  }
}
