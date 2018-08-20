import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FilterWidgetComponent } from './filter-widget.component';

@NgModule({
  imports: [
    CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AutoCompleteModule,
  ],
  declarations: [
		FilterWidgetComponent,
	],
	exports: [
		FilterWidgetComponent,
	]
})
export class FilterWidgetModule { }

