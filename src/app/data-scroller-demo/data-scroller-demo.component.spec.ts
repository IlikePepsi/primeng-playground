import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScrollerDemoComponent } from './data-scroller-demo.component';

describe('DataScrollerDemoComponent', () => {
  let component: DataScrollerDemoComponent;
  let fixture: ComponentFixture<DataScrollerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScrollerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScrollerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
