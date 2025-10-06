
let dictionary = [
  { id: 1, word: 'apel' },
  { id: 2, word: 'buku' },
  { id: 3, word: 'jambu' },
  { id: 4, word: 'jeruk' },
  { id: 5, word: 'kelapa' },
  { id: 6, word: 'mangga' },
  { id: 7, word: 'pisang' }
];

function searchWord() {
  let target = document.getElementById('searchInput').value.trim().toLowerCase();
  let resultBox = document.getElementById('result');

  if (!target) {
    resultBox.textContent = "Masukkan kata terlebih dahulu!";
    resultBox.className = "result notfound";
    return;
  }

  let left = 0, right = dictionary.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let word = dictionary[mid].word;

    if (word === target) {
      resultBox.textContent = `Kata ditemukan: "${dictionary[mid].word}" (ID: ${dictionary[mid].id})`;
      resultBox.className = "result found";
      return;
    } else if (word < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  resultBox.textContent = "Kata tidak ditemukan dalam kamus";
  resultBox.className = "result notfound";
}
