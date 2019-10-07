import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = [];

  addTodo(value) {
    if (value !== '') {
      this.todoArray.push(value);
    } else {
      alert('Todo cannot be Empty!');
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        if(confirm("Are you sure you want to delete it?")) {
          this.todoArray.splice(i, 1);
        }
        break;
      }
    }
  }

  todoSubmit(value: any) {
    if (value.todo !== '' && value.todo !== null) {
      this.todoArray.push(value.todo);
    } else {
      alert('Todo cannot be Empty!');
    }
  }
}
