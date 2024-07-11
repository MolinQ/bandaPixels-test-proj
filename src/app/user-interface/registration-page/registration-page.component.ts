import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../data/services/auth.service";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    NgIf,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent implements OnInit{
  form!: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

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
    this.auth.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true,
          },
        });
      },
      (error) => {
        alert(error.error.message);
      },
    );
  }
}
