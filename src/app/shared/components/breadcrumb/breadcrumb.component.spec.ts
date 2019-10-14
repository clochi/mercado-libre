import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  const list = ['Tecnología y Computación', 'Notebook HP'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    component.list = list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the given list', () => {
    const breadcrumbItems: HTMLElement[] = fixture.nativeElement.querySelectorAll('.breadcrumb__item');

    expect(breadcrumbItems.length).toEqual(2);
  });

  it('should not show breadcrumb if there are no items', () => {
    component.list = [];
    fixture.detectChanges();
    const breadcrumbItems: NodeList[] = fixture.nativeElement.querySelectorAll('.breadcrumb__item');

    expect(breadcrumbItems.length).toEqual(0);
  });

});
