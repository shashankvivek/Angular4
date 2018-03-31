import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdList2Component } from './prod-list2.component';

describe('ProdList2Component', () => {
  let component: ProdList2Component;
  let fixture: ComponentFixture<ProdList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
