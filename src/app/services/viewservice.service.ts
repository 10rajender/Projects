import { Injectable } from '@angular/core';
import { todoElement } from "../todoElement.model"
@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  constructor() { }
  viewList: todoElement[] = [];
  // activeList: todoElement[];
  // completedList: todoElement[];

  // getActive(input: todoElement[]){
  //   input.forEach((element, index) => {
  //     if(!element.checked){
  //       input.splice(index,1);
  //     }
  //   });
  //   return input;
  // }
  // getCompleted(input: todoElement[]){
  //   input.forEach((element, index) => {
  //     if(element.checked){
  //       input.splice(index,1);
  //     }
  //   });
  //   return input;
  // }
}
