import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAppearanceDefaultComponent } from './fill-appearance-default.component';

describe('FillAppearanceDefaultComponent', () => {
  let component: FillAppearanceDefaultComponent;
  let fixture: ComponentFixture<FillAppearanceDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillAppearanceDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillAppearanceDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
