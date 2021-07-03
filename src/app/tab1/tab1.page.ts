import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { APIService } from '../API.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public platform: Platform, public apiService: APIService) {


    this.platform.resume.subscribe(async () => {
      console.log('Resume event detected');
    });

    this.platform.resize.subscribe(async () => {
      console.log('Resize event detected');
    });

    this.platform.pause.subscribe(async () => {
      console.log('Pause event detected');
    });

  }

  todos: Array<any>;


  createTodo() {
    this.apiService.CreateTodo({
        name: 'ionic',
        description: 'testing'
    });
  }

  getTodo() {
    this.platform.ready().then(() => {
      //other code
      this.apiService.ListTodos().then((evt) => {
        this.todos = evt.items;
      });
    });
  }

  alertTodo() {
    alert(JSON.stringify(this.todos));
  }

  // logTodo() {
  //   this.apiService.OnCreateTodoListener.subscribe((evt) => {
  //     const data = (evt as any).value.data.onCreateTodo;
  //     this.todos = [...this.todos, data];
  //   });
  // }

}
