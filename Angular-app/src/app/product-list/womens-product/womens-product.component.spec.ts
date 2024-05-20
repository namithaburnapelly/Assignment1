import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensProductComponent } from './womens-product.component';

describe('WomensProductComponent', () => {
  let component: WomensProductComponent;
  let fixture: ComponentFixture<WomensProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomensProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomensProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
