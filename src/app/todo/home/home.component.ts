import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	
	
	todo:string="";
	items:Array<string>=[];
	
  constructor() { }

  ngOnInit(): void {
  }
  add(){
		this.items.push(this.todo);
		this.todo="";
	}
	remove(a:number)
	{
		this.items.splice(a,1);
	}
 

}
