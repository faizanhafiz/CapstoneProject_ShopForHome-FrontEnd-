import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Classes/user';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-landin-page',
  templateUrl: './landin-page.component.html',
  styleUrls: ['./landin-page.component.css']
})
export class LandinPageComponent implements OnInit {

  
   //signup
   signupsuccess:boolean=false;
   signupsuccessMessage!:String;
   signupfail:boolean=false;
   signupfailMessage!:String;
 
 
    loginsuccess:boolean=false;
    loginsuccessMessage!:String;
    loginfail:boolean=false;
    loginfailMessage!:String;

  ngOnInit(): void {
  }

  user :User = new User();

  loginForm = new FormGroup(
{
   email: new FormControl('' ,[ Validators.required,Validators.email]),
   password: new FormControl('' ,[Validators.required,Validators.minLength(4)])
} 
 );

 signForm= new FormGroup(
  {
    name:new FormControl('',[]),
    email: new FormControl('' ,[Validators.email,Validators.required]),
    password: new FormControl('' ,[Validators.required])

  }
 )

  constructor(private service :ServiceService ,private router:Router)
  {

 
  }
   

 

     signUp()
     {
      this.service.signUp(this.signForm.value)
      .subscribe(

        data=>
        {
           
          console.log(data.message);
          console.log(data.value);
          this.signupsuccess=true;
          this.signupsuccessMessage="Sign Up Successful";
           

          


           
        }

        ,
        error=>
        {
          this.signupfail=true;
          this.signupfailMessage=error.error;
          
           
           
        }
 
        
      )

      this.signForm.reset();
     }


     login()
     {

        
        this.service.login(this.loginForm.value).subscribe(data=>
            {
            
              localStorage.setItem("token",data.valueOf());
              this.loginsuccess=true;
               
              this.loginsuccessMessage="login Successfull";
               
              let  tokeninfo =this.service.getDecodedAccessToken(data.valueOf());

              this.loginsuccess=tokeninfo.status;

              if(tokeninfo.role=="admin")
              {
                 

                 this.router.navigate(['adminDashboard']);

               
              }
              else if(tokeninfo.role=="user")
              {
                this.router.navigate(['userDashboard']);
              }
              
             
 
        
            },
            error=>{
              
              this.loginfail=true;
              
              this.loginfailMessage=error.error;
              
               
            }
            
            )
           
        
            this.loginForm.reset(); 
        
     }






}
