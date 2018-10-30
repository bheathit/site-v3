import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageMenuComponent } from './contact-page-menu.component';

describe('ContactPageMenuComponent', () => {
  let component: ContactPageMenuComponent;
  let fixture: ComponentFixture<ContactPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
