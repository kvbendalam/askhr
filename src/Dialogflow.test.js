import { render } from '@testing-library/react';
import DialogflowChat from './DialogflowChat';

test('renders df-messenger with correct attributes', () => {
  render(<DialogflowChat />);

  const dfMessenger = document.querySelector('df-messenger');
  
  expect(dfMessenger).toBeInTheDocument();
  expect(dfMessenger).toHaveAttribute('location', 'us-central1');
  expect(dfMessenger).toHaveAttribute('project-id', 'ai-hr-428916');
  expect(dfMessenger).toHaveAttribute('agent-id', '1cfbbb85-8a35-47b8-996d-6a8f83df984a');
  expect(dfMessenger).toHaveAttribute('language-code', 'en');
  expect(dfMessenger).toHaveAttribute('max-query-length', '-1');
  expect(dfMessenger).toHaveAttribute('chat-icon', 'https://example.com/your-icon-image.png');
});