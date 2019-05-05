import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { todoElement } from "../todoElement.model"
import { ViewserviceService } from "../services/viewservice.service"

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  constructor( private viewserviceService : ViewserviceService) {}
  @Input() inputList: todoElement[] = [];
  tempList: todoElement[] = [];
  @Output() newtodoValue: EventEmitter<{
    editedIndex: number;
    editedValue: string;
  }> = new EventEmitter();
  ngOnInit() {

  }

  onEdit(index: number) {
    this.newtodoValue.emit({
      editedIndex: index,
      editedValue: this.inputList[index].name
    });
  }

  //To delete the item from todos

  onDelete (index: number) {
    this.inputList.splice(index, 1);
  }


  getStyle(flag: boolean){
    if(flag){
      return "line-through";
    }
    return "none";
  }

  //To clear the checked items from the todos
  clearCompleted(){
    this.tempList = [];
    this.inputList.forEach((element, index) => {
      if(!element.checked){
        this.tempList.push(element);
      }
    });
    this.inputList = this.tempList;
    this.viewserviceService.viewList = this.inputList;
  }
}
