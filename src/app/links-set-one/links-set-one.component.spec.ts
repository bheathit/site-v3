import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksSetOneComponent } from './links-set-one.component';

describe('LinksSetOneComponent', () => {
  let component: LinksSetOneComponent;
  let fixture: ComponentFixture<LinksSetOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksSetOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksSetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
