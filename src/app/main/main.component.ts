import { Component, OnInit } from '@angular/core';
import { TierOneCalculationsService } from '../calcService/tier-one-calculations.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ElectricalUnits } from '../interfaces/electrical-units';
import { NONE_TYPE } from '@angular/compiler';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'rgb(26, 26, 27)',
      
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        
      
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit {


  



 // voltView= true;


  voltIsOpen = false;
  ampIsOpen = false;
  ohmIsOpen = false;


  toggleVolt() {
    this.voltIsOpen = true;
    this.ampIsOpen = false;
    this.ohmIsOpen = false;

  }
  toggleAmp() {
    this.voltIsOpen = false;
    this.ampIsOpen = true;
    this.ohmIsOpen = false;

  }
  toggleOhm() {
    this.voltIsOpen = false;
    this.ampIsOpen = false;
    this.ohmIsOpen = true;

  }









  constructor(



    public calcService: TierOneCalculationsService,


    


    





  ) {




   }

  ngOnInit(): void {

    console.log("init main")


    




  




  


   

    

    



  }


  checkVolt() {

   // this.voltView = !this.voltView;

   // this.calcService.checkVolt();

    
  }


}

