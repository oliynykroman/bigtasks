import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DataServiceRootService } from 'src/app/services/data-service-root.service';
import { DataServiceNoInjectableService } from 'src/app/services/data-service-no-injectable.service';

@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
  styleUrls: ['./injectable.component.scss'],
  providers: [
    DataServiceService,
    DataServiceNoInjectableService
  ]
})
// service should be imported in Module, component decorator or in injectable decorator
export class InjectableComponent implements OnInit {

  public providedInData: string = 'Click on Te button';
  public simpleData: string = 'Click on Te button';
  public noInjectable: string = 'Click on Te button';

  constructor(
    private getDemoDataService: DataServiceService,
    private getDemoDataRootService: DataServiceRootService,
    private getDemoDataNoInjectable: DataServiceNoInjectableService
  ) { }

  ngOnInit() {

  }
  public inRoot() {
    this.providedInData = this.getDemoDataRootService.getDemoDataRoot(); 
  }
  public notInRoot() {
    this.simpleData = this.getDemoDataService.getDemoData();
  }
  public notInjectable() {
    this.noInjectable = this.getDemoDataNoInjectable.getDemoData();
  }
}
