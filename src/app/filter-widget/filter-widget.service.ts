import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FilterWidgetService {
	private filterWidgetEventSource = new Subject<string>();
	public filterWidgetEvent$ = this.filterWidgetEventSource.asObservable();

	push(event) {
		this.filterWidgetEventSource.next(event);
	}
}
