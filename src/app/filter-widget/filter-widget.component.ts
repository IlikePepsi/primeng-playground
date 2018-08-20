import { Component, EventEmitter, Output } from '@angular/core';

//import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.css']
})
export class FilterWidgetComponent {

	filterString: string;
	results: string[];

  //constructor(private mockDataService: MockDataService) { }
  constructor() { }

	//@Output() listFilteredEvent = new EventEmitter<string[]>();
	@Output() listFilteredEvent = new EventEmitter<string>();

	//search(event) {
	//	this.mockDataService.getData().toPromise().then(data => {
	//		this.results = data
	//			.filter(item => item.name.match(event.query))
	//			.map(item => item.name);
	//	});
	//	this.listFilteredEvent.emit(this.results);
	//}

	handleKeyUpEvent(event) {
		if(event.key === "Enter")
			this.listFilteredEvent.emit(this.filterString);
	}

	handleClickEvent() {
		this.listFilteredEvent.emit(this.filterString);
	}
}

