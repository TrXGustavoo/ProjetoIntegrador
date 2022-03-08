import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIComponent } from './menu-i.component';

describe('MenuIComponent', () => {
  let component: MenuIComponent;
  let fixture: ComponentFixture<MenuIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
