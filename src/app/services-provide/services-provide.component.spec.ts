import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProvideComponent } from './services-provide.component';

describe('ServicesProvideComponent', () => {
  let component: ServicesProvideComponent;
  let fixture: ComponentFixture<ServicesProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesProvideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
