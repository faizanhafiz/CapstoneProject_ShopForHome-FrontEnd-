import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCategory=false;
  isUser=false;
  isProduct =false;
  constructor(private service:ServiceService) {
    this.service.iscategory.subscribe(

      data=>{
        this.isCategory=data;
      }
    );

    this.service.isuser.subscribe(
      data=>
      {
        this.isUser=data;
      }
    );

     this.service.isproduct.subscribe(

      data=>
      {
        this.isProduct=data;
      }
     );

   }


     
      

   

  ngOnInit(): void {
  }

}
