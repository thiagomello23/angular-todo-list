import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id')
  data: string = ''
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verifica se o ID e nulo, caso seja retorna para outra rota
    // pega os dados via localStorage
    this.getInitialData()
  }

  getInitialData() {
    const allTasks = JSON.parse(localStorage.getItem('todo-tasks')!)
    const task = allTasks.filter((d: any) => {
      if(d.id === this.id) 
        return d;
    })
    if(!task.length) {
      this.router.navigate([''])
    } else {
      this.data = task[0].task
    }
  }

  editTask() {
    const allTasks = JSON.parse(localStorage.getItem('todo-tasks')!)
    allTasks.map((d: any) => {
      if(d.id === this.id) {
        d.task = this.data
      }
    })
    localStorage.setItem('todo-tasks', JSON.stringify(allTasks));
    this.router.navigate([''])
  }

  deleteTask() {
    const allTasks = JSON.parse(localStorage.getItem('todo-tasks')!)
    const allTasksFiltered = allTasks.filter((d: any) => {
      if(d.id !== this.id) 
        return d;
    })
    localStorage.setItem('todo-tasks', JSON.stringify(allTasksFiltered));
    this.router.navigate([''])
  }
}