import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasAppComponent } from './xmas-app.component';

describe('XmasAppComponent', () => {
  let component: XmasAppComponent;
  let fixture: ComponentFixture<XmasAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmasAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
