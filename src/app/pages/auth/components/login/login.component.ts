import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../../../core/services/storage.service';
import { AuthData } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe({
      next: (res: AuthData) => {
        res.token;
        this.storageService.saveUser(res);
        this.router.navigateByUrl('dashboard');
      },
      error: err => {
        this._snackBar.open(err.error.error, 'close', {
          duration: 3000,
        });
      },
    });
  }
}
