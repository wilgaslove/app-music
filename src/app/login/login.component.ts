import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]

})
export class LoginComponent {
  emailPassewold = new FormControl('');
}
