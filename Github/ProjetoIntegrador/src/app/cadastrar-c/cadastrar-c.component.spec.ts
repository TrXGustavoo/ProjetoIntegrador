import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCComponent } from './cadastrar-c.component';

describe('CadastrarCComponent', () => {
  let component: CadastrarCComponent;
  let fixture: ComponentFixture<CadastrarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
