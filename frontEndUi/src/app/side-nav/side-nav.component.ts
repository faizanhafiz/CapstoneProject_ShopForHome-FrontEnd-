import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
   iscategory = false ;

   isproduct=-false;

   isuser=false;
  constructor(private service:ServiceService) {
     
    this.service.iscategory.subscribe(
      

             data=>
             {
                this.iscategory=data;
             }
    );

    this.service.isproduct.subscribe(
      

      data=>
      {
         this.isproduct=data;
      }
);


this.service.isuser.subscribe(
      

  data=>
  {
     this.isuser=data;
  }
);






   }



  ngOnInit(): void {
  }

   

   
  
  


   updateIsCategory()
   {
     
      
          this.service.isproduct.next(false);
         

     
          this.service.isuser.next(false);
       


       this.service.iscategory.next(true);
   }

   updateIsProduct()
   {
     
    
        this.service.iscategory.next(false);
     

    
        this.service.isuser.next(false);
     
    this.service.isproduct.next(true);
   }

   updateIsUser()
   {

    
          this.service.iscategory.next(false);
       
  
      
          this.service.isproduct.next(false);
        
     




    this.service.isuser.next(true);
   }


    getUser()
    {
        

    }



}
 
