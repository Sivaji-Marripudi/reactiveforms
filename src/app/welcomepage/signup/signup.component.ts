import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide:boolean = true;
  signupForm:FormGroup;
 
  constructor(private formbuilder:FormBuilder) {
    this.signupForm = formbuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      phone:['',[Validators.required,Validators.pattern("[7-9][0-9]{9}")]],
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmedpassword: ['',[Validators.required]]

    });
  }

  ngOnInit(): void {
  }
  postData(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
    }
  }
  

}
