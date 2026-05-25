const CORRECT_WORD = "moment1"; // Твой ключ
const VIDEO_URL = "https://www.youtube.com/embed/taaSYRW2Rg8?autoplay=1";

function unlock() {
    const input = document.getElementById('secretWord');
    const val = input.value.toLowerCase().trim();
    
    if (val === CORRECT_WORD) {
        document.getElementById('lockScreen').style.display = 'none';
        const player = document.getElementById('player');
        player.style.display = 'block';
        document.getElementById('videoFrame').src = VIDEO_URL;
    } else {
        input.style.borderColor = "#8c2323";
        input.value = "";
        input.placeholder = "Неверно, попробуй еще раз...";
    }
}
