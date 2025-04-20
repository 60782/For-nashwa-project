const content = document.getElementById('content');
const nextBtn = document.getElementById('nextBtn');
const loveSong = document.getElementById('loveSong');

let step = 0;

const screens = [
    "Peringatan !!\n\nJika dibuka Maka akan mendapatkan sesuatu yang tidak terduga.",
    "Terimakasih Sudah Datang Ke kehidupanku",
    `Sampai kapanpun Kamu yang menjadi Orang Favorite ku\n
sampai kapanpun itu kamu akan ku usahakan sampai akhir\n
entah apa pendapat orang, duniaku akan selalu baik baik saja jika denganmu\n
sehat sehat selalu manusia favoritku, sayangku, cantiku, duniaku`,
    `Mungkin kisah kita baru saja dimulai,\n
namun akan ku pastikan kisah kita akan menjadi kisah yang sangat indahh,\n
dimana kita menceritakan kepada anak kita nanti.`,
];

const image = '<img src="foto.jpg" alt="Foto Kenangan">';

function fadeInAudio(audio, duration = 4000) {
    audio.volume = 0;
    audio.play();
    let step = 0.05;
    let fade = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume = Math.min(audio.volume + step, 1);
        } else {
            clearInterval(fade);
        }
    }, duration * step);
}

nextBtn.addEventListener('click', () => {
    step++;

    if (step === 3) fadeInAudio(loveSong);

    if (step <= screens.length) {
        content.style.animation = 'none';
        void content.offsetWidth;
        content.style.animation = null;
        content.innerHTML = screens[step - 1];
        if (step === screens.length) content.innerHTML += image;
    } else {
        content.innerHTML = "Selesai. Terima kasih telah membaca semuanya.";
        nextBtn.style.display = "none";
    }
});
