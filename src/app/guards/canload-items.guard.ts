import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CanloadItemsGuard implements CanLoad {
  constructor(private location: Location, private router: Router) {}
  pattern = new RegExp(/items(\?search=\w+|\/\w+)/, 'g');
  canLoad() {
    return this.location.path() === '' ?
      !!this.router.getCurrentNavigation().extractedUrl.queryParams.search :
      this.location.path().search(this.pattern) !== -1;
    }
  }
