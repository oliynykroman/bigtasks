import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class DataServiceService {

  constructor() { }

  public getDemoData() : string{
    return 'data service withoutRoot works';
  }
}
