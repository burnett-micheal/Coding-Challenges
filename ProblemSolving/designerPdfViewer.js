// Link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const width = word.length;
  let height = -Infinity;
  for (let i = 0; i < word.length; i++) {
    const charHeight = h[alphabet.findIndex(a => a === word[i])];
    if (charHeight > height) height = charHeight;
  }
  return width * height;
}