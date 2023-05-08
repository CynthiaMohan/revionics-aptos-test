import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() options:string[]=[];
  @Input() selectedOption:string='';
  @Output() selectedOptionChange=new EventEmitter<string>();

  dropdownContent:boolean=false;
  //onClick open and close the dropdown
  public dropdownOpen(){
    this.dropdownContent=!this.dropdownContent;
  }

  public onOptionSelected(option:string):void{
    this.selectedOption=option;
    this.selectedOptionChange.emit(option);
    //close dropdown
    this.dropdownOpen();
  }
}
