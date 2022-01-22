import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcBox';

  obs!: EventListener;



  constructor(

    


  ) {

    console.log("HomeComponent:Constructor");


   }


   ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit(): void {
    console.log("AppComponent:OnInit");

  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked"); 


  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy"); 
    
    setTimeout(() => 
    {
      console.log("AppComponent:OnInit");    

    },
    5000);
    
    

  }

   eventHandler(obs: EventListener) {

    console.log(obs)

  }



  
}
