import { DataScrollerDemoModule } from './data-scroller-demo.module';

describe('DataScrollerDemoModule', () => {
  let dataScrollerDemoModule: DataScrollerDemoModule;

  beforeEach(() => {
    dataScrollerDemoModule = new DataScrollerDemoModule();
  });

  it('should create an instance', () => {
    expect(dataScrollerDemoModule).toBeTruthy();
  });
});
