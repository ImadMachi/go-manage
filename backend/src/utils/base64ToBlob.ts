import { Blob } from 'buffer';

export const base64ToBlob = (b64Data: string, sliceSize = 512) => {
  const parts = b64Data.split(';base64,');

  const contentType = parts[0].split(':')[1];

  const byteCharacters = atob(parts[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

// export const base64ToBlob = (base64Image: string): Blob => {
//   // Split into two parts
//   const parts = base64Image.split(';base64,');

//   // Hold the content type
//   const imageType = parts[0].split(':')[1];

//   // Decode Base64 string
//   const decodedData = atob(parts[1]);

//   // Create UNIT8ARRAY of size same as row data length
//   const uInt8Array = new Uint8Array(decodedData.length);

//   // Insert all character code into uInt8Array
//   for (let i = 0; i < decodedData.length; ++i) {
//     uInt8Array[i] = decodedData.charCodeAt(i);
//   }

//   // Return BLOB image after conversion
//   return new Blob([uInt8Array], { type: imageType });
// };
