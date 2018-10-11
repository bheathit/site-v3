
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateTestComponent } from './mate-test.component';

describe('MateTestComponent', () => {
  let component: MateTestComponent;
  let fixture: ComponentFixture<MateTestComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
