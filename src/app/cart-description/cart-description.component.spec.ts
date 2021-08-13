import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDescriptionComponent } from './cart-description.component';

describe('CartDescriptionComponent', () => {
  let component: CartDescriptionComponent;
  let fixture: ComponentFixture<CartDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
