import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ml-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() list: string[];
  constructor() { }

  ngOnInit() {
  }

}
