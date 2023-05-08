import { Component,Input,Output,EventEmitter, ElementRef } from '@angular/core';

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
    //change arrow display
    const arrow:any=document.querySelector('#arrow');
    if(arrow.classList.contains('fa-angle-down')){
        arrow.classList.remove('fa-angle-down');
        arrow.classList.add('fa-angle-up');
    }
    else{
        arrow.classList.remove('fa-angle-up');
        arrow.classList.add('fa-angle-down')
    }
  }

  public onOptionSelected(option:string):void{
    this.selectedOption=option;
    this.selectedOptionChange.emit(option);
    //close dropdown
    this.dropdownOpen();
  }
}
