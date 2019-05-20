import { TestBed } from '@angular/core/testing';

import { GetProductsInfoService } from './get-products-info.service';

describe('GetProductsInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductsInfoService = TestBed.get(GetProductsInfoService);
    expect(service).toBeTruthy();
  });
});
