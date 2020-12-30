import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../../app/services/contact.service';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // orderstatus:any;
  // data:Observable<any>;
  contactsList:any;
  postForm:FormGroup;
  constructor(private rtr:Router,private contactservice:ContactService,private formbuilder:FormBuilder) { 
    this.postForm = formbuilder.group({
      id : new FormControl(),
      firstName : new FormControl(),
      lastName : new FormControl()
    });
  }
  ngOnInit(): void {
      this.contactservice.getContacts().subscribe(data => {
        this.contactsList = data;
      });
  }
    // new Observable(observer =>{
    //   setTimeout(() => {
    //     observer.next('inprogress');
    //   },2000);
    //   setTimeout(() => {
    //     observer.next('processing');
    //   },5000);
    //   setTimeout(() => {
    //     observer.next('completed');
    //   },8000)
    // }).subscribe(data => {
    //   this.orderstatus = data;
    // });
    
    gotoPage(){
      localStorage.clear()
      this.rtr.navigate([""])
    }
    onSubmit(form){
      const newFormData = {id:form.value.id,firstName:form.value.firstName,lastName:form.value.lastName}
      this.contactservice.createContacts(newFormData).subscribe(data => {
        console.log(data);
      })
    }

}
