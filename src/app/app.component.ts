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

      //Ex:
      let h1 = document.getElementById('tareaCompletada');
      h1.innerHTML = h1.innerHTML + "<br/>" + "TAREA TERMINADA";

        //@ts-ignore
        const showToast = (msg: string) => window.flutter_inappwebview.callHandler('showToast', {msg: msg});
        //@ts-ignore
        const completeTask = () => window.flutter_inappwebview.callHandler('completeTask', []);

        showToast("Redireccionando...");
        setTimeout(()=>{
          completeTask();
        }, 3000);
      
    }
  }
}
