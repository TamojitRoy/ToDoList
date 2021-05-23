import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  username:string="";
  password:string= "";
  currentUser:Boolean=false;
  failUser:Boolean=false;
  access:Boolean=false;
  authen:Boolean=false;
  button:Boolean=false;

  constructor(
    private  login:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  setNew(){
    this.username="" ;
    this.password="" ;
    this.currentUser=false;
    this.failUser=false;
    this.access=false;
    this.authen=false;
    this.button=false;
  }
  submit() {
    this.currentUser=false;
    this.failUser=false;
    this.access=false;
    this.authen=false;
    this.button=false;
    this.currentUser = this.login.checkUsername(this.username, this.password);
    this.fail();
    this.happen();
  
  }
  fail(){
    if(this.currentUser==false){
      this.failUser=true;
    }
  }
  cont(){
    if(this.currentUser==false){
      this.access=true;
    }
    else if(this.currentUser==true){
      this.authen=true;
      this.router.navigateByUrl('/home');
    }
  }
  happen(){
    this.button = true;
  }

}
