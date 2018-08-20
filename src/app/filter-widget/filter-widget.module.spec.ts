import { FilterWidgetModule } from './filter-widget.module';

describe('FilterWidgetModule', () => {
  let filterWidgetModule: FilterWidgetModule;

  beforeEach(() => {
    filterWidgetModule = new FilterWidgetModule();
  });

  it('should create an instance', () => {
    expect(filterWidgetModule).toBeTruthy();
  });
});
