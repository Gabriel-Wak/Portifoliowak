import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '../public/boneco.png');
const output = join(__dirname, '../public/boneco.png');

function isBlackBg(r, g, b) {
  return Math.max(r, g, b) < 28;
}

function floodFromEdges(data, width, height, matchFn) {
  const total = width * height;
  const visited = new Uint8Array(total);
  const queue = [];

  const tryPush = (idx) => {
    if (visited[idx] || data[idx * 4 + 3] === 0) return;
    const i = idx * 4;
    if (!matchFn(data[i], data[i + 1], data[i + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    tryPush(x);
    tryPush((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    tryPush(y * width);
    tryPush(y * width + width - 1);
  }

  while (queue.length) {
    const idx = queue.pop();
    data[idx * 4 + 3] = 0;

    const x = idx % width;
    const y = (idx - x) / width;
    if (x > 0) tryPush(idx - 1);
    if (x < width - 1) tryPush(idx + 1);
    if (y > 0) tryPush(idx - width);
    if (y < height - 1) tryPush(idx + width);
  }
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
floodFromEdges(data, info.width, info.height, isBlackBg);

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize({ height: 480, fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(output);

const meta = await sharp(output).metadata();
console.log('boneco.png', `${meta.width}x${meta.height}`, meta.hasAlpha ? 'RGBA transparent' : 'RGB');
