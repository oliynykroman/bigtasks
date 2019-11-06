import { Injectable } from '@angular/core';

export class DataServiceNoInjectableService {

  constructor() { }
  public getDemoData() : string{
    return 'data service without injectable decorator';
  }
}
