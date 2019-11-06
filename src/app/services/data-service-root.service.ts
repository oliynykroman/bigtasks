import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceRootService {

  constructor() { }

  public getDemoDataRoot(): string {
    return 'demo data providetIn:root works';
  }
}
