import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModButtonComponent } from './mod-button.component';

describe('ModButtonComponent', () => {
  let component: ModButtonComponent;
  let fixture: ComponentFixture<ModButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
