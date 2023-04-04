import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  //arrange
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

 it('should add two numbers',()=>{
  //act
  let actual=service.add(4,5);
  //assert
  expect(actual).toBe(9);
 })

 it('should subtract two numbers',()=>{
  let actual=service.sub(9,5);
  expect(actual).toBe(4);
 })
});
