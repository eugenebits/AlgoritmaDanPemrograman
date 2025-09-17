// antrian disimpan di array
let antrian = [];

// ambil elemen
const inputNama = document.getElementById("namaInput");
const daftarAntrian = document.getElementById("daftarAntrian");
const statusBox = document.getElementById("status");

// fungsi buat update tampilan daftar antrian
function updateDaftarAntrian() {
  if (antrian.length === 0) {
    daftarAntrian.innerHTML = "Belum ada antrian 🌸";
  } else {
    daftarAntrian.innerHTML = "";
    antrian.forEach((nama, i) => {
      const div = document.createElement("div");
      div.textContent = `${i + 1}. ${nama}`;
      div.classList.add("antrian-item");
      daftarAntrian.appendChild(div);

      // animasi fade in tiap kali update
      setTimeout(() => {
        div.classList.add("show");
      }, 50);
    });
  }
}

// fungsi buat tambah antrian
function tambahAntrian() {
  const nama = inputNama.value.trim();
  if (nama === "") {
    statusBox.textContent = "⚠️ Isi nama dulu ya cantik!";
    statusBox.style.color = "#cc0066";
    return;
  }
  antrian.push(nama);
  inputNama.value = "";

  statusBox.textContent = `✨ ${nama} berhasil masuk antrian! ✨`;
  statusBox.style.color = "#800080";

  updateDaftarAntrian();
}

// fungsi buat layani antrian
function layaniAntrian() {
  if (antrian.length === 0) {
    statusBox.textContent = "🙅‍♀️ Antrian kosong, gaada yg bisa dilayanin!";
    statusBox.style.color = "#cc0066";
    return;
  }
  const nama = antrian.shift();

  statusBox.textContent = `💁 Sedang melayani: ${nama}`;
  statusBox.style.color = "#ff3399";

  updateDaftarAntrian();
}

// kasih animasi cantik ke item antrian
const style = document.createElement("style");
style.innerHTML = `
  .antrian-item {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease;
    background: #ffe6f7;
    margin: 6px 0;
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid #ffb3d9;
  }
  .antrian-item.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
