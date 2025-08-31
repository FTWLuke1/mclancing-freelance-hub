const { spawn } = require('child_process');
const path = require('path');

// Start the Vite dev server
const viteProcess = spawn('npm', ['run', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite dev server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Vite dev server exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  viteProcess.kill('SIGTERM');
});