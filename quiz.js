const soal = [
  {
    pertanyaan: "Hujan turun dari?",
    a: "Langit",
    b: "Bawah",
    c: "Tanah",
    d: "Laut",
    benar: "a",
  },
  {
    pertanyaan: "Warna awan adalah?",
    a: "Hitam",
    b: "Ungu",
    c: "Hijau",
    d: "Putih",
    benar: "d",
  },
  {
    pertanyaan: "Bumi berbentuk?",
    a: "Oval",
    b: "Kotak",
    c: "Bulat",
    d: "Segitiga",
    benar: "c",
  },
];

const pertanyaanEl = document.getElementById("pertanyaan");
const quiz = document.getElementById("quiz");
const jawabEl = document.querySelectorAll(".jawaban");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitPertanyaan = document.getElementById("submit");

let pertanyaanSaatIni = 0;
let nilai = 0;
loadQuiz();

function loadQuiz() {
  hilangkanPilihan();
  const dataPertanyaan = soal[pertanyaanSaatIni];
  pertanyaanEl.innerText = dataPertanyaan.pertanyaan;

  a_text.innerText = dataPertanyaan.a;
  b_text.innerText = dataPertanyaan.b;
  c_text.innerText = dataPertanyaan.c;
  d_text.innerText = dataPertanyaan.d;
}

function getPilihan() {
  let jawab = undefined;

  jawabEl.forEach((jawabEl) => {
    if (jawabEl.checked) {
      jawab = jawabEl.id;
    }
  });
  return jawab;
}

function hilangkanPilihan() {
  jawabEl.forEach((jawabEl) => {
    jawabEl.checked = false;
  });
}
submitPertanyaan.addEventListener("click", () => {
  const jawab = getPilihan();

  if (jawab) {
    if (jawab === soal[pertanyaanSaatIni].benar) {
      nilai++;
    }
    pertanyaanSaatIni++;
    pertanyaanSaatIni < soal.length ? loadQuiz() : (quiz.innerHTML = `<h3>Kamu benar ${nilai} dari ${soal.length} soal</h3><button class="btn btn-primary" onclick="location.reload()">Refresh</button>`);
  }
});
