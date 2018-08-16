import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataScrollerModule } from 'primeng/datascroller';

import { DataScrollerDemoComponent } from './data-scroller-demo.component';

@NgModule({
  imports: [
    CommonModule,
		DataScrollerModule
  ],
  declarations: [
		DataScrollerDemoComponent
	],
	exports: [
		DataScrollerDemoComponent
	]
})
export class DataScrollerDemoModule { }
