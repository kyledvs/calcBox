import { Component, OnInit } from '@angular/core';
import { TierOneCalculationsService } from '../calcService/tier-one-calculations.service';
import { ElectricalUnits } from '../interfaces/electrical-units';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {








  constructor(



    public calcService: TierOneCalculationsService,


    


    





  ) {




   }

  ngOnInit(): void {

    console.log("init main")


    




  




  


   

    

    



  }


  checkVolt() {

    this.calcService.checkVolt();

    
  }


}

