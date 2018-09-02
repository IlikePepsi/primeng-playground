import { Component, EventEmitter, Output } from '@angular/core';

import { FilterWidgetService } from './filter-widget.service';
//import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.css']
})
export class FilterWidgetComponent {

	filterString: string = "";

  constructor(private filterWidgetService: FilterWidgetService) { }

	//@Output() listFilteredEvent = new EventEmitter<string>();

	handleKeyUpEvent(event) {
		if(event.key === "Enter")
			//this.listFilteredEvent.emit(this.filterString);
			this.filterWidgetService.push(this.filterString);
	}

	handleClickEvent() {
		//this.listFilteredEvent.emit(this.filterString);
		this.filterWidgetService.push(this.filterString);
	}
}

