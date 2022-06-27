import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = ''
  user:any;
  response:User[]=[];

  loginForm = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password' : new FormControl(null,[Validators.required]),
    
    })

  constructor(private auth:AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  submitloginForm(loginForm: FormGroup){

    const Email=loginForm.value.email;
    const password=loginForm.value.password;

    this.auth.login(Email,password).subscribe((data)=>
    {
 
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('dataUser', JSON.stringify(data));
      
        this.auth.saveCurrentUser();
        this.router.navigate(['']);
 
    },
    err=>{
      this.error=err;
    })
  }

  // goToRegister()
  // {
  //   this.router.navigate(['/register']);
  // }


}
