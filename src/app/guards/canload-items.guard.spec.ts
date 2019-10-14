import { TestBed, async, inject } from '@angular/core/testing';
import { CanloadItemsGuard } from './canload-items.guard';
import { Location } from '@angular/common';

describe('CanloadItemsGuard', () => {
  const location = jasmine.createSpyObj('locationService', ['path']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanloadItemsGuard,
      { provide: Location, useValue: location}]
    });
  });

  it('should ...', inject([CanloadItemsGuard], (guard: CanloadItemsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
