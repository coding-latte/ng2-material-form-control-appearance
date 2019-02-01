import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatDatepickerModule,
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MatInputModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
