import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateAccountComponent } from './migrate-account.component';

describe('MigrateAccountComponent', () => {
  let component: MigrateAccountComponent;
  let fixture: ComponentFixture<MigrateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MigrateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MigrateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
