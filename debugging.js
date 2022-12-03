let todos = [];

function hewanAir(nama, jenis, isLive) {
  return {
    nama,
    jenis,
    isLive,
  };
}

function addHewanAir() {
  let badak = hewanAir("ikhsan", 19, false);

  aksesBadak(badak);
  return badak;
}

function aksesBadak(badak) {
  console.log(badak["isLive"]);
}

addHewanAir();

function hewan(nama, jenis, isLive) {
  this.nama = nama;
  this.jenis = jenis;
  this.isLive = isLive;
}

function addHewan() {
  let landak = new hewan("landak", "mamalia", true);

  aksesLandak(landak);

  return landak;
}

function aksesLandak(landak) {
  console.log(landak["jenis"]);
}
