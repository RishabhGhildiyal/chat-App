import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatroomService } from 'src/app/service/chatroom.service';
import {
  COMMON_EMAIL,
  COMMON_VALIDATION,
  PATTERN_EMAIL,
  PATTERN_PASS,
} from 'src/app/validations/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  checked = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private room:ChatroomService) {}

  ngOnInit(): void {
    this.form();
  }

  form() {
    this.loginForm = this.fb.group({
      email: ['', [PATTERN_EMAIL, COMMON_EMAIL, COMMON_VALIDATION]],
      password: [
        '',
        [COMMON_VALIDATION, PATTERN_PASS, Validators.minLength(6)],
      ],
      name:['',Validators.required]
    });
  }
  onSubmit() {
    if(this.loginForm.valid){
      console.log('kkkkk');

      this.route.navigate(['/chat'])
      this.room.setUserInfo(this.loginForm.value);
    }
  }
}
