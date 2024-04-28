const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros/origin');
const destination = path.resolve(__dirname, 'src/public/images/heros');
const sizes = [
  {
    name: 'small',
    unit: 425,
  },
  {
    name: 'medium',
    unit: 768,
  },
  {
    name: 'large',
    unit: 1024,
  },
];

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target).forEach((image) => {
  sizes.forEach((element) => {
    sharp(`${target}/${image}`)
      .resize(element.unit)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-${
            element.name
          }.jpg`,
        ),
      );
  });
});
