import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTableComponent } from './clinical-table.component';

describe('ClinicalTableComponent', () => {
  let component: ClinicalTableComponent;
  let fixture: ComponentFixture<ClinicalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
