import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = false;
  loginForm:FormGroup;
  constructor(private formbuilder:FormBuilder,private rtr:Router) {
    this.loginForm = formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  };

  ngOnInit(): void {
  }
  postData(){
    console.log(this.loginForm.value.email)
    localStorage.setItem("username",this.loginForm.value["email"]);
    localStorage.setItem("password",this.loginForm.value["password"]);
    // console.log(this.loginForm.value.email);
    // console.log(this.loginForm.value.password);
  }
  
}
