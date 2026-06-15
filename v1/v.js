const CORRECT_WORD = "Geliebte"; 

// Твоя ссылка на вертикальное видео (YouTube Shorts или обычное вертикальное)
const VIDEO_URL = "https://www.youtube.com/embed/1RyHe0nnFTA?autoplay=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3";

function unlock() {
    const input = document.getElementById('secretWord');
    const val = input.value.toLowerCase().trim();
    
    if (val === CORRECT_WORD) {
        document.getElementById('lockScreen').style.display = 'none';
        
        const player = document.getElementById('player');
        const videoFrame = document.getElementById('videoFrame');
        
        player.style.display = 'block';
        videoFrame.src = VIDEO_URL;
        
        // Автоматически разворачиваем на весь экран смартфона вертикально
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.webkitRequestFullscreen) { /* Для Safari / iPhone */
            player.webkitRequestFullscreen();
        }
        
    } else {
        input.style.borderColor = "#8c2323";
        input.value = "";
        input.placeholder = "Неверно, попробуй еще раз...";
    }
}
