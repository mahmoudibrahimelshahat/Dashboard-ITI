import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router : Router) { 
    if(localStorage.getItem('userToken') !== null)
    {
      this.saveCurrentUser();
    }
  }

  currentUser=new BehaviorSubject(null);


saveCurrentUser()
{
  let token:any= localStorage.getItem('userToken');
  //decoding
  this.currentUser.next(jwtDecode(token));
  console.log(this.currentUser);
}

  login(email:string, password:string): Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:3000/api/v1/users/login",{
      email:email,
      password:password
    })
    
  }



  logout(){
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    // localStorage.removeItem('userData');
    localStorage.removeItem('dataUser');
    this.router.navigate(['/login'])

  }
}

