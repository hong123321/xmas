import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { XmasAppComponent } from './xmas-app.component';
import { KonvaModule } from "ng2-konva";
import { AppUploadImageComponent } from './app-upload-image/app-upload-image.component';


@NgModule({
  declarations: [
    XmasAppComponent,
    AppUploadImageComponent
  ],
  imports: [
    CommonModule,
    KonvaModule
  ],
  exports:[XmasAppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class XmasModule { }