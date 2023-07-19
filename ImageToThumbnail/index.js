const sharp = require('sharp');
const fs = require('fs');

async function generateThumbnail(inputPath, outputPath, width, height) {
  try {

    const inputBuffer = fs.readFileSync(inputPath);

 
    const thumbnail = await sharp(inputBuffer)
      .resize(width, height)
      .toBuffer();

   
    fs.writeFileSync(outputPath, thumbnail);

    console.log(`Thumbnail generated and saved to ${outputPath}`);
  } catch (err) {
    console.error('Error generating thumbnail:', err);
  }
}


const inputImagePath = '/Users/krantd/Desktop/Node_Training/ImageToThumbnail/worldcup.jpeg';
const outputThumbnailPath = '/Users/krantd/Desktop/Node_Training/ImageToThumbnail/output/worldcup.jpeg';
const thumbnailWidth = 100; 
const thumbnailHeight = 100; 

generateThumbnail(inputImagePath, outputThumbnailPath, thumbnailWidth, thumbnailHeight);