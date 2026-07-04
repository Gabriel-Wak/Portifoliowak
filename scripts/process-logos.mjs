import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = 'C:/Users/wak/.cursor/projects/c-Users-wak-Desktop-portifolio/assets';
const publicDir = join(__dirname, '../public');

const blueSource = `${assets}/logo-blue-source.png`;
const yellowSource = `${assets}/logo-yellow-source.png`;

const TARGET_WIDTH = 360;
const TARGET_HEIGHT = 120;

function isNeutral(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const spread = max - min;

  if (spread > 18) return false;
  if (max < 70) return false;
  if (min > 243) return false;

  return true;
}

function isWhiteBg(r, g, b) {
  return r > 250 && g > 250 && b > 250;
}

function isBlackBg(r, g, b) {
  return Math.max(r, g, b) < 25;
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

function stripNeutral(data) {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    if (isNeutral(data[i], data[i + 1], data[i + 2])) {
      data[i + 3] = 0;
    }
  }
}

function isSaturated(r, g, b) {
  return Math.max(r, g, b) - Math.min(r, g, b) > 35;
}

function removeStrayWhite(data, width, height) {
  const toClear = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = y * width + x;
      const i = idx * 4;
      if (data[i + 3] === 0) continue;

      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (!(r > 246 && g > 246 && b > 246)) continue;

      let nearColor = false;
      for (let dy = -2; dy <= 2; dy += 1) {
        for (let dx = -2; dx <= 2; dx += 1) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const ni = (ny * width + nx) * 4;
          if (data[ni + 3] === 0) continue;
          if (isSaturated(data[ni], data[ni + 1], data[ni + 2])) {
            nearColor = true;
            break;
          }
        }
        if (nearColor) break;
      }

      if (!nearColor) toClear.push(i);
    }
  }

  toClear.forEach((i) => {
    data[i + 3] = 0;
  });
}

function removeBlueBg(data, width, height) {
  stripNeutral(data);
  floodFromEdges(data, width, height, isBlackBg);
  floodFromEdges(data, width, height, isNeutral);
  stripNeutral(data);
}

function removeYellowBg(data, width, height) {
  floodFromEdges(data, width, height, (r, g, b) => isWhiteBg(r, g, b) || isNeutral(r, g, b));
  floodFromEdges(data, width, height, isBlackBg);
  stripNeutral(data);
  removeStrayWhite(data, width, height);
}

async function processSource(input, mode) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  if (mode === 'blue') removeBlueBg(data, info.width, info.height);
  else removeYellowBg(data, info.width, info.height);

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .trim({ threshold: 8 })
    .toBuffer();
}

async function normalizeToCanvas(buffer) {
  return sharp(buffer)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

const blueBuffer = await processSource(blueSource, 'blue');
const yellowBuffer = await processSource(yellowSource, 'yellow');

const blueFinal = await normalizeToCanvas(blueBuffer);
const yellowFinal = await normalizeToCanvas(yellowBuffer);

await sharp(blueFinal).toFile(join(publicDir, 'logo.png'));
await sharp(yellowFinal).toFile(join(publicDir, 'logo-light.png'));

const blueMeta = await sharp(blueFinal).metadata();
const yellowMeta = await sharp(yellowFinal).metadata();

console.log('logo.png (azul)', `${blueMeta.width}x${blueMeta.height}`, blueMeta.hasAlpha ? 'RGBA' : 'RGB');
console.log('logo-light.png (amarelo)', `${yellowMeta.width}x${yellowMeta.height}`, yellowMeta.hasAlpha ? 'RGBA' : 'RGB');
