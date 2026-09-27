// Converts public/images/**/*.png (and .jpg/.jpeg) to WebP: same directory,
// same basename, capped at 1600px on the long edge (never upscaled),
// quality 80. Run with `npm run optimize-images` after adding new images.
// The .png/.jpg originals are deleted once the .webp is written — source
// images should live outside `public/` (e.g. in design files) if you need
// to keep the lossless originals around.
import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_DIMENSION = 1600;
const QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function convert(file) {
  const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const before = (await stat(file)).size;

  await sharp(file)
    .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath);

  const after = (await stat(webpPath)).size;
  await unlink(file);

  const savedPct = (100 * (1 - after / before)).toFixed(0);
  console.log(
    `${path.relative(process.cwd(), file)} -> ${path.basename(webpPath)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${savedPct}%)`
  );

  return { before, after };
}

const files = await walk(IMAGES_DIR);
console.log(`Found ${files.length} PNG/JPG files under public/images\n`);

let totalBefore = 0;
let totalAfter = 0;
for (const file of files) {
  const { before, after } = await convert(file);
  totalBefore += before;
  totalAfter += after;
}

const remaining = await walk(IMAGES_DIR);
console.log(`\n${remaining.length} PNG/JPG files remain (should be 0 if all converted cleanly).`);
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
