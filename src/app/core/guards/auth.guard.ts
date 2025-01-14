import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    this.storageService.isLoggedIn();
    return true;
  }
}
