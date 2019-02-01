import { Component, OnInit } from '@angular/core';
import {
  MatFormFieldAppearance,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions
} from '@angular/material';

// set default form field appearance as fill for this component
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'fill'
};

@Component({
  selector: 'app-fill-appearance-default',
  templateUrl: './fill-appearance-default.component.html',
  styleUrls: ['./fill-appearance-default.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ]
})
export class FillAppearanceDefaultComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
