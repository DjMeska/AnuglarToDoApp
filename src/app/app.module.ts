import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ToDoComponents/header/header.component';
import { ButtonComponent } from './components/Common/button/button.component';
import { TasksComponent } from './components/ToDoComponents/tasks/tasks.component';
import { TasksItemComponent } from './components/ToDoComponents/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/ToDoComponents/add-task/add-task.component';
import { NavBarComponent } from './components/Common/NavBar/nav-bar/nav-bar.component';

const appRoutes: Routes = [
  {path: 'todo', component: TasksComponent},
  {path: 'todo', component: TasksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
