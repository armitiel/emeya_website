import { readdirSync, rmSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const backupDir = join(__dirname, '../backups');
const filesDir = join(backupDir, 'files');
const backupSrcDir = join(filesDir, 'src-backup');

if (!existsSync(backupSrcDir)) {
  console.error('No backup found');
  process.exit(1);
}

// Restore files
const srcDir = join(__dirname, '../src');

// Remove current src directory
rmSync(srcDir, { recursive: true, force: true });

// Restore from backup
cpSync(backupSrcDir, srcDir, { recursive: true });

console.log('Restore completed successfully!');