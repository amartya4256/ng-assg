import { Component, ViewEncapsulation } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class Assignment2Component {

  list : Todo[];
  constructor(private assgComp : AssignmentComponent) { }

  ngOnInit(){
     //var table = document.getElementById("tab")! as HTMLTableElement;
     //this.addData(table);
     this.list = this.assgComp.todos;
    //  console.log(this.list);
  }

  addClass(event){
    event.target.parentNode.className = "active";
  }

  // addData(table : HTMLTableElement){
  //   var data = this.assgComp.todos;
  //   for(let todo of data){
  //     let row : HTMLTableRowElement = document.createElement('tr');
  //     table.appendChild(row);
  //     row.onclick = function() {
  //       row.className = 'active';
  //     }
  //     row.appendChild(this.createTableData(todo.id));
  //     row.appendChild(this.createTableData(todo.type));
  //     row.appendChild(this.createTableData(todo.description));
  //     row.appendChild(this.createTableData(String(todo.completed)));
  //   }
  // }

  createTableData(data : string) : HTMLTableDataCellElement{
    let cell = document.createElement('td');
    cell.textContent = data;
    return cell;
  }
}
