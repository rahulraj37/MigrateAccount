import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsListComponent } from './devs-list.component';

describe('DevsListComponent', () => {
  let component: DevsListComponent;
  let fixture: ComponentFixture<DevsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
