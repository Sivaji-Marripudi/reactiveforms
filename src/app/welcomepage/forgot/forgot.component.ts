import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgotForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.forgotForm = formbuilder.group({
      email : ['',[Validators.required,Validators.email]]
    });
  };

  ngOnInit(): void {
  }

}
