import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataScroller } from 'primeng/primeng';

import { MessageService } from '../messages/message.service';
import { MockDataService } from '../mock-data.service';
import { FilterWidgetService } from '../filter-widget/filter-widget.service';

import { MockData } from '../mock-data'

@Component({
  selector: 'app-data-scroller-demo',
  templateUrl: './data-scroller-demo.component.html',
  styleUrls: ['./data-scroller-demo.component.css'],
})
export class DataScrollerDemoComponent {

	mockData: MockData[];

	@ViewChild('itemList') dataScroller: DataScroller;

	pageSize: number = 25;
	totalRecords : number;

  constructor(
		private messageService: MessageService,
		private mockDataService: MockDataService,
		private filterWidgetService: FilterWidgetService) {
		// fill mockData array with initial data
		this.mockDataService.getData().subscribe(mockData => {
			this.mockData = mockData;
			this.totalRecords = mockData.length;
		})
	}

	ngOnInit() {
		// regsiter event handler callback functions
		this.filterWidgetService.filterWidgetEvent$.subscribe(filterString => {
			this.mockDataService.getData().toPromise().then(mockData => {
				let filteredArray = new Array<MockData>();
				if(filterString != "") {
					filteredArray = mockData.filter(m => m.name.match(filterString));
				} else {
					filteredArray = [ ...mockData ];
				}
				this.mockData = filteredArray;
				this.totalRecords = filteredArray.length;
			})
		})
	}
}

