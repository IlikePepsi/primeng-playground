import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { MessageService } from './message.service'

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		MessagesComponent,
	],
	exports: [
		MessagesComponent,
	],
})
export class MessagesModule {
}
