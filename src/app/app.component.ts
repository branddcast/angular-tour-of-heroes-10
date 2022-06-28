import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  tipo: string;
  types = ["app", "portal", "otro"]
  @ViewChild("tareaCompletada") h1Element: ElementRef;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        this.tipo = params.type || "app";
      }
    );
  }

  ngOnInit() {
    
  }


  finish(){
    console.log("TERMINANDO TAREA...");
    console.log(this.tipo);
    if(this.tipo == 'app' ){
      let h1 = this.h1Element.nativeElement.value;
      this.h1Element.nativeElement.innerHTML = h1 + "<br/>" + "TAREA TERMINADA";

      // @ts-ignore
      if(typeof Android != 'undefined'){
        setTimeout(()=>{
          Android.completeTask();
        }, 3000);
      }
    }
  }
}
