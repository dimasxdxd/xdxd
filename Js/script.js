const tanggalTujuan = new Date('Mar 11, 2024, 00:00:00').getTime();

const hitungMundur = setInterval(function () {

    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const sisaMilidetik = selisih % (1000 * 60 * 60 * 24);

    const jam = Math.floor(sisaMilidetik / (1000 * 60 * 60));
    const sisaMilidetikSetelahJam = sisaMilidetik % (1000 * 60 * 60);

    const menit = Math.floor(sisaMilidetikSetelahJam / (1000 * 60));
    const sisaMilidetikSetelahMenit = sisaMilidetikSetelahJam % (1000 * 60);

    const detik = Math.floor(sisaMilidetikSetelahMenit / 1000);

    const countHari = document.getElementsByClassName('hari')[0];
    const countJam = document.getElementsByClassName('jam')[0];
    const countMenit = document.getElementsByClassName('menit')[0];
    const countDetik = document.getElementsByClassName('detik')[0];

    countHari.innerHTML = `${hari}`
    countJam.innerHTML = `${jam}`
    countMenit.innerHTML = `${menit}`
    countDetik.innerHTML = `${detik}`

    if (selisih <= 0) {
        clearInterval(hitungMundur);
    }

}, 1000);

const audio = document.querySelector('audio');

audio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});

audio.play();