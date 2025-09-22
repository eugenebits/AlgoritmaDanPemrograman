

const prompt = require("prompt-sync")({ sigint: true });


let buku = [
  "Laskar Pelangi",
  "Negeri 5 Menara",
  "Bumi Manusia",
  "Sang Pemimpi",
  "Ayat-Ayat Cinta"
];

console.log("Daftar buku yang tersedia:");
buku.forEach((judul, index) => {
  console.log(`${index}. ${judul}`);
});


let cari = prompt("\nMasukkan judul buku yang ingin dicari: ");

// Linear Search
let ditemukan = false;
for (let i = 0; i < buku.length; i++) {
  if (buku[i].toLowerCase() === cari.toLowerCase()) {
    console.log(`\n Buku '${cari}' ditemukan di posisi index ${i}`);
    ditemukan = true;
    break;
  }
}

if (!ditemukan) {
  console.log(`\n Buku '${cari}' tidak ditemukan dalam daftar`);
}
