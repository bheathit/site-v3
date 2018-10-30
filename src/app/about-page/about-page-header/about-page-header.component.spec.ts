import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageHeaderComponent } from './about-page-header.component';

describe('AboutPageHeaderComponent', () => {
  let component: AboutPageHeaderComponent;
  let fixture: ComponentFixture<AboutPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
