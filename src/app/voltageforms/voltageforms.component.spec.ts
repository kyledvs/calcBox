import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageformsComponent } from './voltageforms.component';

describe('VoltageformsComponent', () => {
  let component: VoltageformsComponent;
  let fixture: ComponentFixture<VoltageformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoltageformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
