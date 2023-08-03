import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue: string = ''; // Valor do input
  data: any[] = []; // Todas as tarefas
  modal: boolean = false;

  ngOnInit(): void {
    // Inicializa um array com as tasks
    if(localStorage.getItem('todo-tasks'))
      this.data = JSON.parse(localStorage.getItem('todo-tasks')!)
  }

  // Salva as tarefas
  saveTask() {
    const inputObject = {
      id: Math.random().toString(16).slice(2),
      task: this.inputValue
    }
    this.data.push(inputObject)
    localStorage.setItem('todo-tasks', JSON.stringify(this.data));
    this.getTask();
  }

  // Pega as tarefas
  getTask() {
    if(localStorage.getItem('todo-tasks'))
      this.data= JSON.parse(localStorage.getItem('todo-tasks')!)
  }

  // Deleta todas as tarefas
  deleteAllTasks() {
    localStorage.setItem('todo-tasks', '')
    this.data = []
  }
}
