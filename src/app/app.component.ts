import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revionics_aptos_test';
  selectedOption:string='Select an Option';


  onChange(selectedvalue:string){
    this.selectedOption=selectedvalue;
  }
}
