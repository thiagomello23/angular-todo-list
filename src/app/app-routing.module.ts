import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'edit/:id', component: EditComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
