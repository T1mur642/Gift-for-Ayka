// ==========================================
// 1. ЛОГИКА АВТОРИЗАЦИИ (ДЛЯ INDEX.HTML)
// ==========================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = document.getElementById('username').value.trim();
        const pass = document.getElementById('password').value.trim();

        // Поменяй '2505' на свой реальный пароль (например, дату рождения)
        if (user.toLowerCase() === "deinherz" && pass.toLowerCase() === "180626") {
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'book.html';
        } else {
            const errImg = document.getElementById('errorMessage');
            if (errImg) errImg.style.display = 'block';
        }
    });
}

// ==========================================
// 2. ЗАЩИТА СТРАНИЦЫ КНИГИ (ДЛЯ BOOK.HTML)
// ==========================================
function checkAccess() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}

// ==========================================
// 3. БАЗА ДАННЫХ КНИГИ (ОДНА СТРАНИЦА = ОДИН ЯЗЫК)
// ==========================================
const pages = [
    // --- ПРОЛОГ ---
    { 
        type: "prolog", 
        lang: "ru",
        title: "Пролог", 
        content: `
            <p>Когда мы были вместе впервые, я любил тебя искренне. Но сегодня я понимаю — я тогда ещё не знал, что такое настоящая любовь.</p>
            <p style="margin-top:12px;">Я был юным. Импульсивным. Не до конца понимающим, что значит беречь человека.</p>
            <p style="margin-top:12px;">Прошло шесть лет. Жизнь изменила меня. Она научила меня ответственности. Научила слышать, а не только говорить. Ценить, а не принимать как должное. Оставаться, а не уходить.</p>
            <p style="margin-top:12px;">В моей жизни были люди. Я благодарен им за уроки. Но именно благодаря времени я понял одну вещь — некоторые чувства не исчезают, они просто ждут, пока ты станешь достаточно взрослым для них.</p>
            <p style="margin-top:12px;">8 февраля не было случайностью. Это не возвращение в прошлое. Это встреча двух людей, которые выросли.</p>
            <p style="margin-top:12px;">Сегодня я рядом не потому, что скучал. А потому что осознанно выбираю.</p>
            <p style="margin-top:12px; font-weight:bold;">Эта книга — не про воспоминания. Она про моё решение. Про то, что я знаю, кого хочу видеть рядом. И больше не сомневаюсь.</p>
        ` 
    },
    { 
        type: "prolog", 
        lang: "de",
        title: "Prolog", 
        content: `
            <p>Als wir das erste Mal zusammen waren, habe ich dich aufrichtig geliebt. Aber heute verstehe ich – ich wusste damals noch nicht, was wahre Liebe вообще bedeutet.</p>
            <p style="margin-top:12px;">Ich war jung. Impulsiv. Ich habe nicht ganz verstanden, was es bedeutet, einen Menschen zu beschützen und zu bewahren.</p>
            <p style="margin-top:12px;">Sechs Jahre sind vergangen. Das Leben hat mich verändert. Es hat mich Verantwortung gelehrt. Gelernt zuzuhören, nicht nur zu reden. Zu schätzen, statt alles als selbstverständlich anzusehen. Zu bleiben, statt wegzugehen.</p>
            <p style="margin-top:12px;">Es gab Menschen in meinem Leben. Ich bin ihnen dankbar für die Lektionen. Aber gerade durch die Zeit habe ich eines verstanden – manche Gefühle verschwinden nicht, sie warten einfach darauf, dass man erwachsen genug für sie wird.</p>
            <p style="margin-top:12px;">Der 8. Februar war kein Zufall. Es ist keine Rückkehr in die Vergangenheit. Es ist das Treffen von zwei Menschen, die gewachsen sind.</p>
            <p style="margin-top:12px;">Heute bin ich an deiner Seite, nicht weil ich dich vermisst habe. Sondern weil ich mich ganz bewusst dafür entscheide.</p>
            <p style="margin-top:12px; font-weight:bold;">Dieses Buch handelt nicht von Erinnerungen. Es handelt von meiner Entscheidung. Davon, dass ich weiß, wen ich an meiner Seite sehen will. Und ich zweifle nicht mehr.</p>
        ` // Сюда ты потом сможешь вставить свой точный перевод пролога на немецкий
    },

    // --- ЭТАП 1 ---
    { 
        type: "chapter", 
        lang: "ru",
        title: "Этап 1 — За что я влюбился", 
        content: `
            <p>Говорят, что всё великое начинается с тишины. Наша история началась в шумном школьном классе, но для меня в тот миг наступил абсолютный вакуум.</p>
            <p style="margin-top:12px;">Эти первые страницы — о том мальчике, который еще не знал, что его жизнь изменилась навсегда. О времени, когда мы только учились чувствовать вес слов и взглядов. Я помню каждый коридор, каждую остановку и каждый твой жест, словно это было вчера.</p>
            <p style="margin-top:12px;">Тогда я не понимал, что между нами натянулась та самая нить, о которой пишут в книгах. Она тонкая, как твой голос, но крепче любого металла. Мы были детьми, играли во взрослых, бегали по закрытым паркам и смотрели на город с высоты девятиэтажек, не зная, что строим фундамент для чего-то огромного.</p>
            <p style="margin-top:12px; font-weight:bold;">В этой главе — начало пути. Мои первые "да", сказанные самому себе. Мои первые страхи и мое самое первое, чистое восхищение тобой. Читая это, вспомни ту девочку, которая вошла в класс... потому что тот парень, который смотрел на тебя из глубины комнаты, до сих пор смотрит на тебя так же...</p>
        ` 
    },
    { 
        type: "chapter", 
        lang: "de",
        title: "Etappe 1 — Warum ich mich verliebt habe", 
        content: `
            <p>Man sagt, dass alles Große mit der Stille beginnt. Unsere Geschichte begann in einem lauten Klassenzimmer, aber für mich entstand in diesem Moment ein absolutes Vakuum.</p>
            <p style="margin-top:12px;">Diese ersten Seiten handeln von dem Jungen, der noch nicht wusste, dass sich sein Leben für immer verändert hatte. Von einer Zeit, als wir erst lernten, das Gewicht von Worten und Blicken zu spüren. Ich erinnere mich an jeden Korridor, jede Haltestelle und jede deiner Gesten, als wäre es gestern gewesen.</p>
            <p style="margin-top:12px;">Damals verstand ich nicht, dass sich zwischen uns derselbe Faden gespannt hatte, über den man in Büchern schreibt. Er ist so dünn wie deine Stimme, aber stärker als jedes Metall. Wir waren Kinder, spielten Erwachsene, rannten durch geschlossene Parks und blickten aus der Höhe von Neunstöckern auf die Stadt, ohne zu wissen, dass wir das Fundament für etwas Riesiges bauten.</p>
            <p style="margin-top:12px; font-weight:bold;">In diesem Kapitel liegt der Beginn des Weges. Mein erstes "Ja", das ich mir selbst gesagt habe. Meine ersten Ängste und meine allererste, reinste Bewunderung für dich. Wenn du das liest, erinnere dich an das Mädchen, das das Klassenzimmer betrat... denn der Junge, der dich aus der Tiefe des Raumes ansah, sieht dich immer noch genau so an...</p>
        ` 
    },

    // --- ПРИЧИНА 1 ---
    { 
        type: "reason", 
        lang: "ru",
        title: "Причина 1", 
        content: `<p>Я люблю тебя за тот момент в школе, когда ты вошла в класс, и время будто на секунду замедлилось.<br><br>Ты сначала поздоровалась с девочками, улыбалась, что-то говорила... а потом вдруг посмотрела вглубь класса — словно искала кого-то.<br><br><b>И нашла меня.</b></p>` 
    },
    { 
        type: "reason", 
        lang: "de",
        title: "Grund 1", 
        content: `<p>Ich liebe dich für diesen Moment in der Schule, als du den Raum betreten hast und die Zeit für einen Augenblick langsamer wurde.<br><br>Du hast zuerst die Mädchen begrüßt, gelächelt, etwas gesagt... und dann in die Tiefe des Klassenzimmers geschaut – als würdest du jemanden suchen.<br><br><b>Und du hast mich gefunden.</b></p>` 
    },

    // --- СТРАНИЦА С КНОПКОЙ НА СЕКРЕТНОЕ ВИДЕО (Каждые 10 причин) ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание / Video", 
        content: `
            <div style="font-weight: bold; line-height:1.7;">"Надо быть последним дураком, чтобы прийти в эту единственную жизнь, которую Бог дал, и жить с тем человеком, которого не любишь."<br><span style="font-size: 14px; font-weight: normal; display:block; text-align:right; margin-top:5px;">А.</span></div>
            <div style="margin: 20px 0; border-top:1px dashed #e3decb;"></div>
            <div style="color: #555; font-style: italic; line-height:1.7;">"Man muss der größte Narr sein, um in dieses einzige Leben, das Gott gegeben hat, zu kommen und mit dem Menschen zu leben, den man nicht liebt."<br><span style="font-size: 14px; display:block; text-align:right; margin-top:5px;">A.</span></div>
            <button class="video-btn" onclick="window.open('v1/index.html', '_blank')">Смотреть видеопослание</button>
        `
    }
];

let currentPage = 0;

// Функция отрисовки контента на странице
function renderPage(index) {
    const contentContainer = document.getElementById('bookContent');
    if (!contentContainer) return;

    // В зависимости от языка страницы меняем цвет или мелкие стили текста
    const langClass = pages[index].lang === "de" ? "text-de" : "text-ru";

    contentContainer.innerHTML = `
        <div class="book-title">${pages[index].title}</div>
        <div class="heart-divider">♥</div>
        <div class="content-text ${langClass}">${pages[index].content}</div>
    `;
    
    // Номер страницы внизу (просто порядковый номер экрана)
    document.getElementById('counter').innerText = index + 1;
    
    // Кнопки управления
    document.getElementById('prevBtn').disabled = (index === 0);
    document.getElementById('nextBtn').disabled = (index === pages.length - 1);
}

function changePage(direction) {
    currentPage += direction;
    renderPage(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
