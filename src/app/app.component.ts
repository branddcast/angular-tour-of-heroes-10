import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes10';
  /*host = environment.host;
  api = environment.api;
  env = environment.env;
  user = environment.user;
  username = environment.username;*/
  embebido: Boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.embebido = JSON.parse(typeof params.embedded !== 'undefined' ? params.embedded : 'false');
      }
    );
  }


  finish(){
    console.log("TERMINANDO TAREA...");
    console.log(this.embebido);
    if(this.embebido){
      // @ts-ignore
      completeTask();
    }
  }
}
