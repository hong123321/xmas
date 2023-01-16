import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUploadImageComponent } from './app-upload-image.component';

describe('AppUploadImageComponent', () => {
  let component: AppUploadImageComponent;
  let fixture: ComponentFixture<AppUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUploadImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
