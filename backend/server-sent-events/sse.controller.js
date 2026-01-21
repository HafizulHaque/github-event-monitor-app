import { connectClient, disconnectClient } from './sse.service.js';

export const sseHandler = (req, res) => {
  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Create send function and register client
  const send = (data) => res.write(`data: ${JSON.stringify(data)}\n\n`);
  connectClient(send);

  // Cleanup when client disconnects
  req.on('close', () => disconnectClient(send));
};
