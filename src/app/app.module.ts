import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataScrollerDemoModule } from './data-scroller-demo/data-scroller-demo.module';
import { FilterWidgetModule } from './filter-widget/filter-widget.module';

import { MessagesModule } from './messages/messages.module';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		DataScrollerDemoModule,
		FilterWidgetModule,
		MessagesModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
