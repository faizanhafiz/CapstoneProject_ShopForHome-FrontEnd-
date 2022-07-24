import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
 
 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  loginfail=  new Subject<any>();
  failMessage!:String;
  token!:String;
  constructor( private http :HttpClient) { }


 signUpUrl="http://localhost:8080/user/signup";
 loginUrl ="http://localhost:8080/user/login";

  signUp(data:any): Observable<any>
{

     return  this.http.post("http://localhost:8080/user/signup",data)
     

}

 
login(data:any):Observable<any>
{
  return this.http.post(this.loginUrl,data,{responseType:'text' as 'json'});

 
}


 

//jwtTokenDecoder

getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }


}
    reload():void

    {
      console.log(location.href);
      window.location.reload;

    }



    iscategory=  new  Subject<any>();
    isuser= new  Subject<any>();
    isproduct= new  Subject<any>();







}