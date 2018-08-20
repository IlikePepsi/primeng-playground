import { Component, ViewChild, Input } from '@angular/core';
import { DataScroller } from 'primeng/primeng';

import { MessageService } from '../messages/message.service';
import { MockDataService } from '../mock-data.service';

import { MockData } from '../mock-data'

@Component({
  selector: 'app-data-scroller-demo',
  templateUrl: './data-scroller-demo.component.html',
  styleUrls: ['./data-scroller-demo.component.css'],
})
export class DataScrollerDemoComponent {

	private _filterString: string;
	private _loadedItems: number;
	mockData: MockData[];

	@Input() set filterString(value: string) {
		this._filterString = value;
		this._loadedItems = 0;
		this.mockData = [];
		this.dataScroller.reset();
		this.dataScroller.onLazyLoad.emit({"first": 0, "rows":25});
	}

	@ViewChild('itemList') dataScroller: DataScroller;

	pageSize: number = 25;
	totalRecords : number;

  constructor(
		private messageService: MessageService,
		private mockDataService: MockDataService) { }

	loadData(event) {
		if(this._loadedItems === event.first) {
			this.mockDataService.getData().toPromise().then(mockData => {
				let filteredArray = new Array<MockData>();
				if(this._filterString) {
					filteredArray = mockData.filter(item => item.name.match(this._filterString));
				}
				else {
					filteredArray = mockData;
				}
				if(this.mockData.length < filteredArray.length) {
					let newArray = filteredArray.slice(event.first, event.first + event.rows);
					for(let i = 0; i < newArray.length; i++) {
						this.mockData.push(newArray[i]);
					}
				}
				this.totalRecords = filteredArray.length;
				this.messageService.add(`Data loaded between ${event.first} and ${event.first + event.rows}. TotalRecords: ${this.totalRecords}`);
			});
			this._loadedItems += event.rows;
		}
	}
}

