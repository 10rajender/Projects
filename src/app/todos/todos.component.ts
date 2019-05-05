import { Component, OnInit} from '@angular/core';
import { todoElement } from "../todoElement.model"
import { ViewserviceService } from "../services/viewservice.service"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor( private viewserviceService: ViewserviceService) { }
  newtodo;
  value: string;
  atUpdate = false;
  currentIndex : number;
  input: todoElement[] = [];
  ngOnInit() {
  }

//To add new item to todos

  onAdd(event: string) {
    this.input = this.viewserviceService.viewList;
    if(event.length !== 0){
      if(this.atUpdate){
        this.input[this.currentIndex].name = event;
        this.input[this.currentIndex].checked = false;
        this.atUpdate = false;
      }
      else {
        this.input.push({name: event, checked: false});
      }
    }
    this.newtodo = '';
  }


  //To update item to todos
  onUpdate(value: any) {
    this.newtodo = value.editedValue;
    this.atUpdate = true;
    this.currentIndex = value.editedIndex;
  }

}
