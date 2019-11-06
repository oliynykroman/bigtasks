import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.scss']
})
export class RoutingTestComponent implements OnInit {
  id: string = '';
  idObservabe: string = '';
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.idObservabe = params.get('id');
    });


  }

}
