import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 loginForm: FormGroup;
 selects = ['Basic', 'Advanced', 'Pro'];
  subselected = "Advanced";
  email='';
  pswd='';
selectedsub:string='Advanced';
loginFormSubmitAttempt:boolean;
error='';

  constructor(private router: Router){}

  ngOnInit()
  {
    this.loginForm = new FormGroup(
      {
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password':new FormControl(null, [Validators.minLength(8),Validators.required, Validators.pattern('^(?=.*[!@#$%^&*()])(?=.*[a-zA-Z]).{8,8}$') 
                                 ]),
        'slct':new FormControl('Advanced', Validators.required)
      }
    )
  }
  emailChange(event:Event){
  this.email=(<HTMLInputElement>event.target).value;
  return this.email;
  }
  
  pswdChange(event:Event)
  {
    this.pswd=(<HTMLInputElement>event.target).value;
    return this.pswd;
  }

  selectChange(event:any){
    this.selectedsub=(<HTMLInputElement>event.target).value;
    return this.selectedsub;      
  }

  onSubmit()
  {
       
    if(!this.loginForm.valid)
    {
     this.error="Please enter the missing data before you click submit!"
      
    }
    else{
    this.router.navigate(['/userdetails']);
    }
   
}
  
  onClear()
  {
    alert('Are you sure to discard the changes')
    this.loginForm.reset();
  }
}

