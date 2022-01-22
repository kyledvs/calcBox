import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { VoltageformsComponent } from './voltageforms/voltageforms.component';


import { ElectricalUnits } from './interfaces/electrical-units';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VoltageformsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
