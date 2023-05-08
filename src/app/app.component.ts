import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revionics_aptos_test';
  dropdownOptions=['Option 1','Option 2 -Select ME','Option 3','Option 4','Option 5','Option 6','Option 7','Option 8','Option 9','Option 10'];
  selectedOption:string='Select an Option';


  onChange(selectedvalue:string){
    this.selectedOption=selectedvalue;
  }
}
