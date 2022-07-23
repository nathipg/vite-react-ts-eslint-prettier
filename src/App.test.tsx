import { render } from '@testing-library/react';

import App from './App';

describe('Component: App', () => {
  const setUp = () => {
    return render(<App />);
  };

  it('should be defined', () => {
    const wrapper = setUp();
    expect(wrapper).toBeDefined();
  });
});
