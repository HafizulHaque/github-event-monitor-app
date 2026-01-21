const clients = new Set();

export const connectClient = (send) => {
  clients.add(send);
};

export const disconnectClient = (send) => {
  clients.delete(send);
};

export const publishEvent = (event) => {
  clients.forEach((send) => send(event));
};