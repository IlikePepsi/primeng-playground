import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//import { DataScrollerModule } from 'primeng/datascroller';
import { DataScrollerDemoModule } from './data-scroller-demo/data-scroller-demo.module';

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
		//DataScrollerModule,
		DataScrollerDemoModule,
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
