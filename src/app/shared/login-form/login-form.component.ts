import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink, RouterModule} from "@angular/router";
import {AuthService} from "../../data/services/auth.service";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    NgIf,
    RouterModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  form!: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    this.auth.logIn(this.form.value).subscribe(
      () => {
        this.router.navigate(['/client', 'list']);
        if (this.auth.userName === 'Admin' && this.auth.getToken() !== null) {
          this.router.navigate(['/admin', 'list']);
        }
      },
      () => {
        alert('enter correct username and password');
      },
    );
  }


}
