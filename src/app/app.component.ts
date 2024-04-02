import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { StorageService } from './core/services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public userRole$: Observable<string>;

  constructor(private storageService: StorageService) {
    this.userRole$ = this.storageService.userRole$;
  }
}
