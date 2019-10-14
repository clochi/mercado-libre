import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  search: string;
  searchValue(param: NgForm) {
    this.router.navigate(['items'], { queryParams: { search: param.value.search } });
  }
}
