import { ExtendDatePipe } from './extend-date.pipe';

describe('ExtendDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ExtendDatePipe('Fr-fr');
    expect(pipe).toBeTruthy();
  });
});
