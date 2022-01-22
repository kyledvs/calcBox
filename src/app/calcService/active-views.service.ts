import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveViewsService {

  public voltView: boolean = true;
  public ampView: boolean = true;
  public ohmView: boolean = true;


  constructor() { }
}
