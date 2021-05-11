import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name ="Tamojit Roy";
  num=1;
  red(){
    this.num-=1;
    if(this.num<1){
      this.num=1;
    }
  }

}
