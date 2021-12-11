import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TierOneCalculationsService {

  public volts!: number;
  public ampere!: number;
  public ohm!: number;

  constructor() { }

  checkVolt() {

    this.volts = this.ampere * this.ohm;    
    console.log(this.volts)
    
  }
  checkAmps() {

    this.volts = this.ampere * this.ohm;    
    console.log(this.volts)
    
  }


  checkOhm() {

    this.volts = this.ampere * this.ohm;    
    console.log(this.volts)
    
  }
}
