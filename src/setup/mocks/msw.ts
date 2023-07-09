import worker from './browser.ts';

if (import.meta.env.MODE === 'development') {
  void worker.start();
}
