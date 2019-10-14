import { TestBed, async, inject } from '@angular/core/testing';
import { CanloadItemsGuard } from './canload-items.guard';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


describe('CanloadItemsGuard', () => {
  const location = jasmine.createSpyObj('locationService', ['path']);
  const router = jasmine.createSpyObj('routerService', ['getCurrentNavigation']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanloadItemsGuard,
      { provide: Location, useValue: location},
      { provide: Router, useValue: router }]
    });
  });

  it('should ...', inject([CanloadItemsGuard], (guard: CanloadItemsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
