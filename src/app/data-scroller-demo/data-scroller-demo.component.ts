import { Component, OnInit } from '@angular/core';

import { MessageService } from '../messages/message.service';
import { MockDataService } from '../mock-data.service';

import { MockData } from '../mock-data'

@Component({
  selector: 'app-data-scroller-demo',
  templateUrl: './data-scroller-demo.component.html',
  styleUrls: [
		'./data-scroller-demo.component.css',
		'../../../node_modules/primeng/resources/primeng.min.css',
		'../../../node_modules/primeng/resources/themes/nova-dark/theme.css',
	],
})
export class DataScrollerDemoComponent implements OnInit {

	mockData: MockData[];

  constructor(
		private messageService: MessageService,
		private mockDataService: MockDataService) { }

  ngOnInit() {
		this.mockDataService.getData().toPromise().then(mockData => this.mockData = mockData);
  }
}

