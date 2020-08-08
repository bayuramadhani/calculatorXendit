const Jimp = require('jimp');
const { createWorker } = require('tesseract.js');
const PSM = require('tesseract.js/src/constants/PSM.js');

async function preProcessingImage(pathFile) {
  // Preprocessing
  const imageModified = await Jimp.read(pathFile);
  await imageModified.resize(2034, 1341);
  await imageModified.quality(100);
  await imageModified.greyscale();
  await imageModified.contrast(+1);
  await imageModified.write(pathFile);
}

async function getTextFromImage(pathFile) {
  let stringBuf = '';
  const worker = createWorker();

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  // await worker.setParameters({
  //   tessedit_pageseg_mode: PSM.AUTO,
  // });

  await preProcessingImage(pathFile);
  const { data: { text } } = await worker.recognize(pathFile);
  await worker.terminate();

  const calculatorResult = text.split('\n')[0].replace('|', '').split(' ');

  await calculatorResult.forEach(async (element) => {
    if (stringBuf === '') {
      stringBuf = element;
    } else {
      stringBuf = `${stringBuf}${element}`;
    }
  });
  // console.log(stringBuf);
  return stringBuf;
}

// getTextFromImage('./../screenshots/calculator-result.png');

module.exports = {
  getTextFromImage,
};
