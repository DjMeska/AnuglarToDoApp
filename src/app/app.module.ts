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
import { BeerAreaComponent } from './components/BeerApi/BeerArea/beer-area/beer-area.component';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';


const appRoutes: Routes = [
  {path: 'todo', component: TasksComponent},
  {path: 'beer', component: BeerAreaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    NavBarComponent,
    BeerAreaComponent
  ],
  imports: [

    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
