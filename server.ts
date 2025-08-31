import { spawn } from 'child_process';

// Prefer env-provided host/port but default to 0.0.0.0:8080 as required
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

const viteArgs = ['run', 'dev', '--', '--host', HOST, '--port', PORT];

const vite = spawn('npm', viteArgs, {
  stdio: 'inherit',
  shell: true,
});

vite.on('error', (err) => {
  console.error('[server.ts] Failed to start Vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`[server.ts] Vite exited with code ${code}`);
  process.exit(code ?? 0);
});

const shutdown = (signal: string) => () => {
  console.log(`[server.ts] Received ${signal}, shutting down...`);
  vite.kill(signal as any);
};

process.on('SIGINT', shutdown('SIGINT'));
process.on('SIGTERM', shutdown('SIGTERM'));
