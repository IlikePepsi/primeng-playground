import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataScrollerModule } from 'primeng/datascroller';

import { DataScrollerDemoComponent } from './data-scroller-demo.component';

@NgModule({
  imports: [
    CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		DataScrollerModule,
  ],
  declarations: [
		DataScrollerDemoComponent,
	],
	exports: [
		DataScrollerDemoComponent
	]
})
export class DataScrollerDemoModule { }
