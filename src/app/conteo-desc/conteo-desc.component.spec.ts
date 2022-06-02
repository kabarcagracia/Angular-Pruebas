import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteoDescComponent } from './conteo-desc.component';

describe('ConteoDescComponent', () => {
  let component: ConteoDescComponent;
  let fixture: ComponentFixture<ConteoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteoDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
