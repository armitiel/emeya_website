import { writeFileSync, readFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create backup directories if they don't exist
const backupDir = join(__dirname, '../backups');
const filesDir = join(backupDir, 'files');

[backupDir, filesDir].forEach(dir => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
});

// Copy current project files
const srcDir = join(__dirname, '../src');
const backupSrcDir = join(filesDir, 'src-backup');

// Remove existing backup if it exists
if (existsSync(backupSrcDir)) {
  rmSync(backupSrcDir, { recursive: true, force: true });
}

// Create new backup
cpSync(srcDir, backupSrcDir, { recursive: true });

console.log('Backup completed successfully!');