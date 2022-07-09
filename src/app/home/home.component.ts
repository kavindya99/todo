import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loginForm!:FormGroup;
  Response: any;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.init();
  }

  public loginFunction(username:string,password:string):void{
    if(username=="admin" && password=="admin"){
      this.router.navigate(['/todo']);
    }else{
      this.ErrorMessage("Incorrect username or password \nAuthentication failed");
    }
  }

  private init(): void{
    this.loginForm=this.formBuilder.group({
      email:[],
      password:[]
    });
  }

  ErrorMessage (error: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: false,
    })
    
    Toast.fire({
      icon: 'error',
      title: error
    })
  }
  
  SuccessMessage () {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: false,
    })
    
    Toast.fire({
      icon: 'success',
      title: "Logged in Successfully"
    })
  }

}
