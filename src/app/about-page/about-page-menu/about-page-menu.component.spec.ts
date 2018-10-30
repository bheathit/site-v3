import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageMenuComponent } from './about-page-menu.component';

describe('AboutPageMenuComponent', () => {
  let component: AboutPageMenuComponent;
  let fixture: ComponentFixture<AboutPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
