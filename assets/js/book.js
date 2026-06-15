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
    // --- СТРАНИЦА 1: ПРОЛОГ (RU) ---
    { 
        type: "prolog", 
        lang: "ru",
        title: "Пролог", 
        content: `
            <p>Знаешь, мне всегда казалось странным, что люди пытаются объяснить любовь: пишут стихи, снимают фильмы, сочиняют песни и говорят тысячи красивых слов, будто её можно разобрать на части и понять разумом. Я тоже когда-то так думал, но чем старше становился, тем яснее понимал одну вещь: настоящая любовь почти никогда не начинается красиво. Она начинается с обычных дней, с одного взгляда, с одной улыбки и с одного человека, который неожиданно становится важнее всех остальных. Когда-то мы были просто детьми, сидели за школьными партами, переживали из-за оценок, строили какие-то смешные планы на жизнь и даже представить не могли, сколько всего ждёт нас впереди. Если бы тогда кто-нибудь сказал мне, что спустя годы я напишу целую книгу о тебе, я бы просто рассмеялся.</p>
            <p style="margin-top:12px;">Но жизнь любит удивлять: она разводила нас в разные стороны, заставляла ошибаться, уходить, терять друг друга, ждать и сомневаться. Иногда мне казалось, что наша история закончилась ещё до того, как успела по-настоящему начаться, но каким-то удивительным образом мы снова и снова находили дорогу друг к другу. И чем старше я становлюсь, тем больше убеждаюсь: любовь — это не тот человек, без которого ты не можешь жить, любовь — это тот человек, с которым ты наконец понимаешь, ради чего хочешь жить. Эта книга не про идеальные отношения, здесь будут мои ошибки, мои страхи, моя ревность, моя глупость, мои воспоминания и мои мечты. Здесь будут наши счастливые моменты и наши самые тяжёлые дни, потому что я хочу оставить честную историю — историю о том, как одна девочка когда-то вошла в класс и даже не подозревала, что навсегда изменит чью-то жизнь. Сто причин — это слишком мало для того, чтобы рассказать всё, что я чувствую к тебе, но, возможно, этого достаточно, чтобы однажды, спустя много лет, мы открыли эту книгу снова, сели рядом, улыбнулись и вспомнили, каким долгим был путь друг к другу. Потому что, если во всей моей жизни есть что-то, в чём я никогда не сомневался по-настоящему, — это ты. Поэтому эта книга не о ста причинах, на самом деле она всегда была только об одной.</p>
            <p style="margin-top:16px; font-weight:bold; font-size:18px;">О тебе.</p>
        ` 
    },

    // --- СТРАНИЦА 2: PROLOG (DE) ---
    { 
        type: "prolog", 
        lang: "de",
        title: "Prolog", 
        content: `
            <p>Weißt du, es kam mir schon immer seltsam vor, dass Menschen versuchen, die Liebe zu erklären: Sie schreiben Gedichte, drehen Filme, komponieren Lieder und sprechen Tausende von schönen Worten, als könnte man die Liebe einfach in Einzelteile zerlegen und mit dem Verstand begreifen. Ich habe früher auch so gedacht, doch je älter ich wurde, desto klarer verstand ich eines: Wahre Liebe beginnt fast nie glanzvoll. Sie beginnt an ganz gewöhnlichen Tagen, mit einem einzigen Blick, mit einem einzigen Lächeln und mit einem einzigen Menschen, der plötzlich wichtiger wird als alles andere auf der Welt. Einst waren wir einfach nur Kinder; wir saßen an unseren Schulbänken, machten uns Sorgen um Noten, schmiedeten irgendwelche albernen Pläne für das Leben und konnten uns nicht einmal im Traum vorstellen, wie viel uns noch bevorstehen würde. Hätte mir damals jemand gesagt, dass ich Jahre später ein ganzes Buch über dich schreiben würde, hätte ich wohl nur gelacht.</p>
            <p style="margin-top:12px;">Aber das Leben liebt Überraschungen: Es hat uns in verschiedene Richtungen geführt, hat uns Fehler machen lassen, uns gezwungen zu gehen, uns gegenseitig zu verlieren, zu warten und zu zweifeln. Manchmal hatte ich das Gefühl, unsere Geschichte wäre vorbei, noch bevor sie überhaupt richtig begonnen hatte, aber auf eine wundersame Weise haben wir immer und immer wieder den Weg zueinander gefunden. Und je älter ich werde, desto mehr bin ich davon überzeugt: Liebe ist nicht der Mensch, ohne den du nicht leben kannst, Liebe ist der Mensch, mit dem du endlich verstehst, wofür du leben willst. Dieses Buch handelt nicht von einer perfekten Beziehung; hier finden sich meine Fehler, meine Ängste, meine Eifersucht, meine Dummheit, meine Erinnerungen und meine Träume. Hier werden unsere glücklichsten Momente und unsere schwersten Tage stehen, weil ich eine ehrliche Geschichte hinterlassen möchte – die Geschichte darüber, wie ein Mädchen einst das Klassenzimmer betrat und keine Ahnung hatte, dass sie für immer das Leben eines Menschen verändern würde. Hundert Gründe sind viel zu wenig, um all das zu erzählen, was ich für dich empfinde, aber vielleicht reicht es aus, damit wir eines Tages, nach vielen Jahren, dieses Buch wieder aufschlagen, uns nebeneinander setzen, lächeln und uns daran erinnern, wie lang der Weg zueinander war. Denn wenn es in meinem ganzen Leben etwas gibt, woran ich nie wirklich gezweifelt habe, dann bist es du. Deshalb handelt dieses Buch nicht von hundert Gründen; in Wahrheit ging es darin immer nur um einen einzigen.</p>
            <p style="margin-top:16px; font-weight:bold; font-size:18px;">Um dich.</p>
        ` 
    },

    // --- СТРАНИЦА 3: ЭТАП 1 (RU) ---
    { 
        type: "chapter", 
        lang: "ru",
        title: "ЭТАП • 1", 
        content: `
            <p style="letter-spacing: 1px; font-weight: bold; color: #8e8a82; margin-bottom: 20px;">ЗА ЧТО Я ВЛЮБИЛСЯ</p>
            <p>Если честно, мне до сих пор иногда не верится, сколько лет прошло с нашего первого дня. Мы тогда были совсем детьми, глупыми подростками, которые мало что понимали в жизни. Вокруг все пытались казаться круче, громче, постоянно что-то доказывали друг другу. А я… я просто жил своей привычной жизнью, прятался за компьютерами, технологиями и думал, что мне никто не нужен.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold;">Пока в один день всё не перевернулось.</p>
            <p style="margin-top:12px;">Ты помнишь тот момент, когда ты зашла в класс? Время тогда правда будто остановилось. Ты просто улыбнулась, а я пропал. И когда ты подошла ко мне и назвала по имени, внутри меня мальчишка из начальных классов закричал от счастья, потому что понял: ты меня помнишь. Ты меня заметила.</p>
            <p style="margin-top:12px;">В этой первой части я хочу вернуть тебя туда, в самое начало нашей истории. Я хочу показать тебе то время моими глазами. Рассказать о том, как я жутко волновался перед другом, пытаясь строить из себя крутого парня, пока он не сказал мне правду в лицо. О том, как я засыпал и просыпался с телефоном в руках, лишь бы не заканчивалась наша бесконечная переписка. О том, как мы бродили по закрытым паркам и сидели на крыше девятиэтажки, и мне казалось, что весь мир принадлежит нам двоим.</p>
            <p style="margin-top:12px;">Я собрал здесь 20 причин. Это 20 моментов из прошлого, из-за которых я тогда, сам того не понимая, влюбился в тебя окончательно и бесповоротно. И знаешь… даже когда мы потеряли друг друга на годы, этот свет внутри меня так и не погас.</p>
            <p style="margin-top:16px; font-weight: bold;">Посмотри, с чего всё начиналось…</p>
        ` 
    },

    // --- СТРАНИЦА 4: ETAPPE 1 (DE) ---
    { 
        type: "chapter", 
        lang: "de",
        title: "ETAPPE • 1", 
        content: `
            <p style="letter-spacing: 1px; font-weight: bold; color: #8e8a82; margin-bottom: 20px;">WARUM ICH MICH IN DICH VERLIEBT HABE</p>
            <p>Um ehrlich zu sein, kann ich es bis heute manchmal kaum glauben, wie viele Jahre seit unserem ersten Tag vergangen sind. Wir waren damals noch absolute Kinder, alberne Teenager, die kaum etwas vom Leben verstanden. Um uns herum versuchten alle, cooler und lauter zu wirken, und wollten sich ständig gegenseitig etwas beweisen. Und ich… ich lebte einfach mein gewohntes Leben, versteckte mich hinter Computern und Technologie und dachte, ich bräuchte niemanden.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold;">Bis sich an einem Tag alles schlagartig änderte.</p>
            <p style="margin-top:12px;">Erinnerst du dich noch an den Moment, als du das Klassenzimmer betreten hast? Die Zeit schien damals wirklich stillzustehen. Du hast einfach nur gelächelt, und um mich war es geschehen. Und als du auf mich zukamst und mich beim Namen nanntest, schrie in meinem Inneren der kleine Junge aus der Grundschule vor Glück, weil er begriff: Du erinnerst dich an mich. Du hast mich bemerkt.</p>
            <p style="margin-top:12px;">In diesem ersten Etappe möchte ich dich genau dorthin zurückbringt – an den allerersten Anfang unserer Geschichte. Ich möchte dir diese Zeit durch meine Augen zeigen. Dir davon erzählen, wie furchtbar nervös ich vor meinem Freund war, während ich versuchte, den coolen Typen zu spielen, bis er mir die Wahrheit ungeschminkt ins Gesicht sagte. Davon, wie ich mit dem Handy in der Hand einschlief und wieder aufwachte, nur damit unsere endlosen Chats kein Ende nahmen. Davon, wie wir durch abgesperrte Parks spazierten und auf dem Dach eines Neunstöckers saßen, und es mir vorkam, als gehöre die ganze Welt nur uns beiden.</p>
            <p style="margin-top:12px;">Ich habe hier 20 Gründe gesammelt. Es sind 20 Momente aus der Vergangenheit, derentwegen ich mich damals, ohne es selbst zu merken, endgültig und unaufhaltsam in dich verliebt habe. Und weißt du… selbst als wir uns jahrelang aus den Augen verloren hatten, ist dieses Licht in mir nie erloschen.</p>
            <p style="margin-top:16px; font-weight: bold;">Schau dir an, wie alles begann…</p>
        ` 
    },

    // --- СТРАНИЦА 5: ПРИЧИНА 1 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 1", 
        content: `
            <p>Я люблю тебя за тот момент в школе, когда ты вошла в класс, и время будто на секунду замедлилось.</p>
            <p style="margin-top:12px;">Ты сначала поздоровалась с девочками, улыбалась, что-то говорила…</p>
            <p style="margin-top:4px;">а потом вдруг посмотрела вглубь класса — словно искала кого-то.</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal;">И нашла меня.</p>
            <p style="margin-top:16px;">В тот момент я почувствовал не просто удивление.</p>
            <p style="margin-top:4px;">Я почувствовал, что между прошлым и настоящим есть невидимая нить.</p>
            <p style="margin-top:4px; font-weight: bold;">И она всё это время не рвалась.</p>
        ` 
    },

    // --- СТРАНИЦА 6: GRUND 1 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 1", 
        content: `
            <p>Ich liebe dich für diesen Moment in der 10. Klasse, als du den Raum betreten hast und die Zeit für einen Augenblick langsamer wurde.</p>
            <p style="margin-top:12px;">Du hast zuerst die Mädchen begrüßt, gelächelt, etwas gesagt…</p>
            <p style="margin-top:4px;">und dann in die Tiefe des Klassenzimmers geschaut – als würdest du jemanden suchen.</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal;">Und du hast mich gefunden.</p>
            <p style="margin-top:16px;">In diesem Moment war es nicht nur Überraschung.</p>
            <p style="margin-top:4px;">Es war das Gefühl, dass es einen unsichtbaren Faden zwischen unserer Vergangenheit und unserer Gegenwart gibt.</p>
            <p style="margin-top:4px; font-weight: bold;">Und dass er nie gerissen ist.</p>
        ` 
    },
    // --- СТРАНИЦА 7: ПРИЧИНА 2 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 2", 
        content: `
            <p>Я люблю тебя за то, как ты подошла ко мне, указала пальцем и сказала:</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal; color: #8c2323;">«Ты Тимур, если не ошибаюсь».</p>
            <p style="margin-top:12px;">Это была простая фраза.</p>
            <p style="margin-top:4px;">Но для меня в ней было больше, чем просто узнавание.</p>
            <p style="margin-top:12px;">Это было подтверждение, что я не исчез из твоей памяти.</p>
            <p style="margin-top:4px;">Что где-то внутри тебя сохранился тот мальчик из начальных классов.</p>
            <p style="margin-top:16px; font-weight: bold;">И в тот момент я понял — я важен.</p>
        ` 
    },

    // --- СТРАНИЦА 8: GRUND 2 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 2", 
        content: `
            <p>Ich liebe dich dafür, wie du auf mich zugegangen bist, mit dem Finger auf mich gezeigt und gesagt hast:</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal; color: #8c2323;">„Du bist Timur, wenn ich mich nicht irre.“</p>
            <p style="margin-top:12px;">Es war ein einfacher Satz.</p>
            <p style="margin-top:4px;">Aber für mich bedeutete er mehr als nur Wiedererkennen.</p>
            <p style="margin-top:12px;">Es war der Beweis, dass ich nicht aus deiner Erinnerung verschwunden war.</p>
            <p style="margin-top:4px;">Dass irgendwo in dir der Junge aus der Grundschule noch existierte.</p>
            <p style="margin-top:16px; font-weight: bold;">Und in diesem Moment wusste ich – ich bin dir nicht egal.</p>
        ` 
    },

    // --- СТРАНИЦА 9: ПРИЧИНА 3 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 3", 
        content: `
            <p>Я люблю тебя за тот странный момент, когда я впервые признался самому себе, что влюбился.</p>
            <p style="margin-top:12px;">Я стоял с другом, делал вид, что мне всё равно.<br>Шутил, строил из себя уверенного, будто это я контролирую ситуацию.</p>
            <p style="margin-top:12px;">А потом он сказал:<br><span style="font-style: normal; font-weight: bold;">«Братан… кажется, это ты поплыл».</span></p>
            <p style="margin-top:12px;">И я выдохнул.<br>И тихо ответил:<br><span style="font-style: normal; font-weight: bold;">«Кажется… да».</span></p>
            <p style="margin-top:16px;">В тот момент я перестал притворяться.</p>
            <p style="margin-top:4px; font-weight: bold;">И впервые позволил себе быть честным — перед собой.</p>
        ` 
    },

    // --- СТРАНИЦА 10: GRUND 3 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 3", 
        content: `
            <p>Ich liebe dich für diesen seltsamen Moment, in dem ich mir zum ersten Mal selbst eingestanden habe, dass ich verliebt bin.</p>
            <p style="margin-top:12px;">Ich stand mit meinem Freund da, tat so, als wäre es mir egal.<br>Ich machte Witze, spielte den Selbstsicheren, als hätte ich alles unter Kontrolle.</p>
            <p style="margin-top:12px;">Und dann sagte er:<br><span style="font-style: normal; font-weight: bold;">„Bruder… ich glaube, du bist derjenige, der gefallen ist.“</span></p>
            <p style="margin-top:12px;">Ich atmete aus.<br>Und antwortete leise:<br><span style="font-style: normal; font-weight: bold;">„Ja… ich glaube auch.“</span></p>
            <p style="margin-top:16px;">In diesem Moment hörte ich auf, mich zu verstellen.</p>
            <p style="margin-top:4px; font-weight: bold;">Und war zum ersten Mal ehrlich zu mir selbst.</p>
        ` 
    },

    // --- СТРАНИЦА 11: ПРИЧИНА 4 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 4", 
        content: `
            <p>Я люблю тебя за твоё спокойствие в мире, где все пытались быть громче.</p>
            <p style="margin-top:12px;">В подростковом возрасте каждый стремился доказать, что он особенный.</p>
            <p style="margin-top:4px;">Кто-то привлекал внимание криком, кто-то дерзостью, кто-то показной уверенностью.</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal;">А тебе это было не нужно.</p>
            <p style="margin-top:12px;">Ты не пыталась сиять — ты просто светилась.</p>
            <p style="margin-top:4px; font-weight: bold;">И именно это делало тебя самой яркой.</p>
        ` 
    },

    // --- СТРАНИЦА 12: GRUND 4 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 4", 
        content: `
            <p>Ich liebe dich für deine Ruhe in einer Welt, in der alle versuchten, lauter zu sein.</p>
            <p style="margin-top:12px;">In diesem Alter wollte jeder beweisen, dass er besonders ist.</p>
            <p style="margin-top:4px;">Manche durch Lautstärke, andere durch Provokation oder gespieltes Selbstbewusstsein.</p>
            <p style="margin-top:12px; font-weight: bold; font-style: normal;">Aber du hattest das nicht nötig.</p>
            <p style="margin-top:12px;">Du hast nicht versucht zu strahlen – du hast es einfach getan.</p>
            <p style="margin-top:4px; font-weight: bold;">Und genau das hat dich am hellsten gemacht.</p>
        ` 
    },

    // --- СТРАНИЦА 13: ПРИЧИНА 5 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 5", 
        content: `
            <p>Я люблю тебя за твою мягкость.</p>
            <p style="margin-top:12px;">За то, как ты говорила «ничего страшного» там, где другие обижались.</p>
            <p style="margin-top:12px;">Ты не держала зла.<br>Не накапливала раздражение.<br>Не делала из мелочей драму.</p>
            <p style="margin-top:16px;">Рядом с тобой хотелось быть лучше —<br>не потому что нужно,</p>
            <p style="margin-top:4px; font-weight: bold;">а потому что ты сама была примером доброты.</p>
        ` 
    },

    // --- СТРАНИЦА 14: GRUND 5 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 5", 
        content: `
            <p>Ich liebe dich für deine Sanftheit.</p>
            <p style="margin-top:12px;">Dafür, wie du „ist schon gut“ gesagt hast, wo andere vielleicht beleidigt gewesen wären.</p>
            <p style="margin-top:12px;">Du hast keinen Groll getragen.<br>Du hast keine kleinen Dinge zu großen Dramen gemacht.</p>
            <p style="margin-top:16px;">In deiner Nähe wollte man besser sein –<br>nicht weil man musste,</p>
            <p style="margin-top:4px; font-weight: bold;">sondern weil du selbst ein Beispiel für Güte warst.</p>
        ` 
    },

    // --- СТРАНИЦА 15: ПРИЧИНА 6 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 6", 
        content: `
            <p>Я люблю тебя за то, как ты слушала меня.</p>
            <p style="margin-top:12px;">Даже когда я увлечённо рассказывал о технологиях, о программировании, о вещах, которые тебе были не так близки.</p>
            <p style="margin-top:12px;">Ты не перебивала.<br>Не делала вид.<br>Ты действительно пыталась понять.</p>
            <p style="margin-top:12px;">И в конце всегда говорила с лёгким удивлением:<br><span style="font-style: normal; font-weight: bold; color: #8c2323;">«Неужели ты всё это знаешь?»</span></p>
            <p style="margin-top:16px;">И в тот момент я чувствовал —<br>меня видят.</p>
            <p style="margin-top:4px; font-weight: bold;">Меня ценят.</p>
        ` 
    },

    // --- СТРАНИЦА 16: GRUND 6 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 6", 
        content: `
            <p>Ich liebe dich dafür, wie du mir zugehört hast.</p>
            <p style="margin-top:12px;">Selbst wenn ich begeistert über Technik, Programmierung und Dinge sprach, die dir nicht besonders nah waren.</p>
            <p style="margin-top:12px;">Du hast mich nicht unterbrochen.<br>Du hast nichts vorgespielt.<br>Du hast wirklich versucht zu verstehen.</p>
            <p style="margin-top:12px;">Und am Ende hast du mit einem leichten Staunen gesagt:<br><span style="font-style: normal; font-weight: bold; color: #8c2323;">„Weißt du das wirklich alles?“</span></p>
            <p style="margin-top:16px;">Und in diesem Moment fühlte ich mich gesehen.</p>
            <p style="margin-top:4px; font-weight: bold;">Und wertgeschätzt.</p>
        ` 
    },

    // --- СТРАНИЦА 17: ПРИЧИНА 7 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 7", 
        content: `
            <p>Я люблю тебя за ту особенную радость, которую я чувствовал рядом с тобой.</p>
            <p style="margin-top:12px;">Это была не буря эмоций.<br>Это было тихое, глубокое счастье.</p>
            <p style="margin-top:12px;">С тобой мир становился мягче.<br>Проблемы — меньше.<br>Будущее — светлее.</p>
            <p style="margin-top:16px;">Рядом с тобой я не убегал от жизни.</p>
            <p style="margin-top:4px; font-weight: bold;">Я хотел её проживать.</p>
        ` 
    },

    // --- СТРАНИЦА 18: GRUND 7 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 7", 
        content: `
            <p>Ich liebe dich für diese besondere Freude, die ich in deiner Nähe gespürt habe.</p>
            <p style="margin-top:12px;">Es war kein Sturm aus Emotionen.<br>Es war ein stilles, tiefes Glück.</p>
            <p style="margin-top:12px;">Mit dir wurde die Welt weicher.<br>Probleme kleiner.<br>Die Zukunft heller.</p>
            <p style="margin-top:16px;">In deiner Nähe wollte ich nicht vor dem Leben fliehen.</p>
            <p style="margin-top:4px; font-weight: bold;">Ich wollte es leben.</p>
        ` 
    },

    // --- СТРАНИЦА 19: ПРИЧИНА 8 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 8", 
        content: `
            <p>Я люблю тебя за твой смех.</p>
            <p style="margin-top:12px;">И за то, как ты умела продолжить любую шутку, сделать её ещё смешнее, ещё живее.</p>
            <p style="margin-top:12px;">Это был не просто смех.</p>
            <p style="margin-top:4px; font-weight: bold;">Это было ощущение, что мы на одной волне.</p>
            <p style="margin-top:4px; font-style: normal;">Что мы понимаем друг друга без объяснений.</p>
        ` 
    },

    // --- СТРАНИЦА 20: GRUND 8 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 8", 
        content: `
            <p>Ich liebe dich für dein Lachen.</p>
            <p style="margin-top:12px;">Und dafür, wie du jeden Witz weitergeführt und ihn noch lebendiger gemacht hast.</p>
            <p style="margin-top:12px;">Es war nicht nur Lachen.</p>
            <p style="margin-top:4px; font-weight: bold;">Es war das Gefühl, auf derselben Wellenlänge zu sein.</p>
            <p style="margin-top:4px; font-style: normal;">Uns ohne große Worte zu verstehen.</p>
        ` 
    },
    // --- СТРАНИЦА 21: ПРИЧИНА 9 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 9", 
        content: `
            <p>Я люблю тебя за наши бесконечные переписки.</p>
            <p style="margin-top:12px;">За утренние сообщения.<br>За ночные разговоры, когда никто не хотел первым сказать «спокойной ночи».</p>
            <p style="margin-top:12px;">Мы писали друг другу о мелочах, о глупостях, о серьёзном.</p>
            <p style="margin-top:16px;">И в этом было ощущение —<br>будто мир сократился до двух экранов и двух сердец.</p>
        ` 
    },

    // --- СТРАНИЦА 22: GRUND 9 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 9", 
        content: `
            <p>Ich liebe dich für unsere endlosen Nachrichten.</p>
            <p style="margin-top:12px;">Für die Guten-Morgen-Texte.<br>Für die Gespräche in der Nacht, wenn keiner von uns zuerst „Gute Nacht“ sagen wollte.</p>
            <p style="margin-top:12px;">Wir schrieben über Kleinigkeiten, über Albernes, über Ernstes.</p>
            <p style="margin-top:16px;">Und es fühlte sich an,<br>als wäre die Welt auf zwei Bildschirme und zwei Herzen geschrumpft.</p>
        ` 
    },

    // --- СТРАНИЦА 23: ПРИЧИНА 10 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 10", 
        content: `
            <p>Я люблю тебя за то чувство, которое невозможно объяснить словами.</p>
            <p style="margin-top:12px;">Это было больше, чем влюблённость.<br>Больше, чем симпатия.</p>
            <p style="margin-top:12px;">Es war das Gefühl, am richtigen Ort zu sein.</p>
            <p style="margin-top:4px;">С тем человеком, с которым всё внутри становится на своё место.</p>
            <p style="margin-top:12px;">И до сих пор я не нашёл для этого точного слова.</p>
            <p style="margin-top:16px; font-weight: bold;">Но я точно знаю — это было настоящим.</p>
        ` 
    },

    // --- СТРАНИЦА 24: GRUND 10 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 10", 
        content: `
            <p>Ich liebe dich für dieses Gefühl, das sich nicht in Worte fassen lässt.</p>
            <p style="margin-top:12px;">Es war mehr als Verliebtheit.<br>Mehr als Sympathie.</p>
            <p style="margin-top:12px;">Es war das Gefühl, am richtigen Ort zu sein.</p>
            <p style="margin-top:4px;">Mit dem richtigen Menschen, bei dem innerlich alles seinen Platz findet.</p>
            <p style="margin-top:12px;">Bis heute habe ich kein genaues Wort dafür gefunden.</p>
            <p style="margin-top:16px; font-weight: bold;">Aber ich weiß – es war echt.</p>
        ` 
    },

    // --- СТРАНИЦА 25: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 1 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 1", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 16px;">
                "Надо быть последним дураком, чтобы прийти в эту единственную жизнь, которую Бог дал, и жить с тем человеком, которого не любишь."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 15px;">
                „Man muss der größte Narr sein, um in dieses einzige Leben zu kommen, das Gott einem geschenkt hat, und es mit einem Menschen zu verbringen, den man nicht liebt.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v1/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
    // --- СТРАНИЦА 26: ПРИЧИНА 11 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 11", 
        content: `
            <p>Я люблю тебя за то, что рядом с тобой я чувствовал и энергию, и спокойствие одновременно.</p>
            <p style="margin-top:12px;">Ты могла смеяться так, будто способна перевернуть мир,</p>
            <p style="margin-top:4px;">а через минуту становилась сосредоточенной и серьёзной — и тогда казалось, что ничто не сможет тебя сбить.</p>
            <p style="margin-top:12px;">В тебе всегда было движение.</p>
            <p style="margin-top:4px; font-weight: bold;">Но рядом с тобой внутри меня было тихо.</p>
        ` 
    },

    // --- СТРАНИЦА 27: GRUND 11 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 11", 
        content: `
            <p>Ich liebe dich dafür, dass ich in deiner Nähe gleichzeitig Energie und Ruhe gespürt habe.</p>
            <p style="margin-top:12px;">Du konntest lachen, als würdest du die Welt umdrehen,</p>
            <p style="margin-top:4px;">und im nächsten Moment wurdest du konzentriert und ernst – als könnte dich nichts aus der Bahn werfen.</p>
            <p style="margin-top:12px;">In dir war immer Bewegung.</p>
            <p style="margin-top:4px; font-weight: bold;">Doch in deiner Nähe war es in mir still.</p>
        ` 
    },

    // --- СТРАНИЦА 28: ПРИЧИНА 12 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 12", 
        content: `
            <p>Я люблю тебя за твою мягкость.</p>
            <p style="margin-top:12px;">За ту редкую доброту, которая не показная и не громкая.</p>
            <p style="margin-top:12px;">Ты никогда не делала добро ради похвалы.<br>Ты просто считала это нормой.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И именно это делало тебя особенной.</p>
        ` 
    },

    // --- СТРАНИЦА 29: GRUND 12 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 12", 
        content: `
            <p>Ich liebe dich für deine Sanftheit.</p>
            <p style="margin-top:12px;">Für diese seltene Güte, die weder laut noch zur Schau gestellt ist.</p>
            <p style="margin-top:12px;">Du hast nie Gutes getan, um gelobt zu werden.<br>Du hast es einfach als selbstverständlich gesehen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und genau das machte dich besonders.</p>
        ` 
    },

    // --- СТРАНИЦА 30: ПРИЧИНА 13 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 13", 
        content: `
            <p>Я люблю тебя за то, что я доверял тебе почти сразу.</p>
            <p style="margin-top:12px;">Я не знаю, как ты это делала.</p>
            <p style="margin-top:12px;">Но рядом с тобой не хотелось защищаться.<br>Не хотелось играть роль.<br>Не хотелось быть лучше, чем я есть.</p>
            <p style="margin-top:16px; font-weight: bold;">С тобой можно было быть настоящим.</p>
        ` 
    },

    // --- СТРАНИЦА 31: GRUND 13 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 13", 
        content: `
            <p>Ich liebe dich dafür, dass ich dir fast sofort vertraut habe.</p>
            <p style="margin-top:12px;">Ich weiß nicht, wie du das geschafft hast.</p>
            <p style="margin-top:12px;">Aber in deiner Nähe wollte ich mich nicht schützen.<br>Ich wollte keine Rolle spielen.<br>Ich wollte nicht besser erscheinen, als ich bin.</p>
            <p style="margin-top:16px; font-weight: bold;">Mit dir konnte ich echt sein.</p>
        ` 
    },

    // --- СТРАНИЦА 32: ПРИЧИНА 14 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 14", 
        content: `
            <p>Я люблю тебя за наши приключения.</p>
            <p style="margin-top:12px;">За закрытые парки, по которым мы гуляли.</p>
            <p style="margin-top:4px;">За крышу девятиэтажного дома, где казалось, что весь город у наших ног.</p>
            <p style="margin-top:12px;">Это было немного безрассудно.<br>Немного по-детски.</p>
            <p style="margin-top:4px; font-style: normal; font-weight: bold;">Но невероятно живо.</p>
            <p style="margin-top:12px;">С тобой жизнь не была скучной.<br>Она была историей.</p>
        ` 
    },

    // --- СТРАНИЦА 33: GRUND 14 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 14", 
        content: `
            <p>Ich liebe dich für unsere Abenteuer.</p>
            <p style="margin-top:12px;">Für die geschlossenen Parks, durch die wir spazierten.</p>
            <p style="margin-top:4px;">Für das Dach des neunstöckigen Hauses, wo es sich anfühlte, als läge die ganze Stadt zu unseren Füßen.</p>
            <p style="margin-top:12px;">Es war ein bisschen verrückt.<br>Ein bisschen kindlich.</p>
            <p style="margin-top:4px; font-style: normal; font-weight: bold;">Aber unglaublich lebendig.</p>
            <p style="margin-top:12px;">Mit dir war das Leben nicht langweilig.<br>Es war eine Geschichte.</p>
        ` 
    },

    // --- СТРАНИЦА 34: ПРИЧИНА 15 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 15", 
        content: `
            <p>Я люблю тебя за то, как я гордился тем, что ты рядом.</p>
            <p style="margin-top:12px;">Не из-за статуса.<br>Не из-за внешности.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold;">А потому что ты была настоящей.</p>
            <p style="margin-top:12px;">И я знал — рядом со мной человек с глубиной.</p>
        ` 
    },

    // --- СТРАНИЦА 35: GRUND 15 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 15", 
        content: `
            <p>Ich liebe dich dafür, wie stolz ich war, dass du an meiner Seite warst.</p>
            <p style="margin-top:12px;">Nicht wegen eines Status.<br>Nicht wegen des Aussehens.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold;">Sondern weil du echt warst.</p>
            <p style="margin-top:12px;">Und ich wusste – neben mir steht ein Mensch mit Tiefe.</p>
        ` 
    },

    // --- СТРАНИЦА 36: ПРИЧИНА 16 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 16", 
        content: `
            <p>Я люблю тебя за глубину твоих мыслей.</p>
            <p style="margin-top:12px;">За то, как ты рассуждала о жизни.</p>
            <p style="margin-top:4px;">За то, что в твоих словах всегда было больше, чем казалось сначала.</p>
            <p style="margin-top:16px;">С тобой можно было не только смеяться.</p>
            <p style="margin-top:4px; font-weight: bold;">С тобой можно было думать.</p>
        ` 
    },

    // --- СТРАНИЦА 37: GRUND 16 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 16", 
        content: `
            <p>Ich liebe dich für die Tiefe deiner Gedanken.</p>
            <p style="margin-top:12px;">Für die Art, wie du über das Leben gesprochen hast.</p>
            <p style="margin-top:4px;">Dafür, dass in deinen Worten immer mehr steckte, als es zunächst schien.</p>
            <p style="margin-top:16px;">Mit dir konnte man nicht nur lachen.</p>
            <p style="margin-top:4px; font-weight: bold;">Mit dir konnte man auch nachdenken.</p>
        ` 
    },

    // --- СТРАНИЦА 38: ПРИЧИНА 17 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 17", 
        content: `
            <p>Я люблю тебя за то ощущение «ты другая».</p>
            <p style="margin-top:12px;">Оно появилось с первых дней.<br>И не исчезло до сих пор.</p>
            <p style="margin-top:16px;">В мире много людей.<br>Но не каждый оставляет след.</p>
            <p style="margin-top:8px; font-weight: bold; font-style: normal; color: #8c2323;">Ты оставила.</p>
        ` 
    },

    // --- СТРАНИЦА 39: GRUND 17 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 17", 
        content: `
            <p>Ich liebe dich für dieses Gefühl: „Du bist anders.“</p>
            <p style="margin-top:12px;">Es war von den ersten Tagen an da.<br>Und es ist bis heute nicht verschwunden.</p>
            <p style="margin-top:16px;">Es gibt viele Menschen auf der Welt.<br>Aber nicht jeder hinterlässt eine Spur.</p>
            <p style="margin-top:8px; font-weight: bold; font-style: normal; color: #8c2323;">Du hast es getan.</p>
        ` 
    },

    // --- СТРАНИЦА 40: ПРИЧИНА 18 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 18", 
        content: `
            <p>Я люблю тебя за то, что я боялся тебя потерять.</p>
            <p style="margin-top:12px;">Тогда это казалось невозможным.<br>Абсурдным.</p>
            <p style="margin-top:12px;">Но внутри было ощущение, что это слишком ценное, чтобы относиться к этому легко.</p>
            <p style="margin-top:16px; font-weight: bold;">И, возможно, именно потому разлука стала таким уроком.</p>
        ` 
    },

    // --- СТРАНИЦА 41: GRUND 18 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 18", 
        content: `
            <p>Ich liebe dich dafür, dass ich Angst hatte, dich zu verlieren.</p>
            <p style="margin-top:12px;">Damals schien es unmöglich.<br>Fast absurd.</p>
            <p style="margin-top:12px;">Aber innerlich wusste ich, dass es zu wertvoll ist, um es leicht zu nehmen.</p>
            <p style="margin-top:16px; font-weight: bold;">Und vielleicht wurde gerade deshalb die Trennung zu einer so großen Lektion.</p>
        ` 
    },
    // --- СТРАНИЦА 42: ПРИЧИНА 19 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 19", 
        content: `
            <p>Я люблю тебя за то, как много у нас общего.</p>
            <p style="margin-top:12px;">Интересы.<br>Характер.<br>Способ чувствовать.</p>
            <p style="margin-top:12px;">С тобой не нужно было подстраиваться.</p>
            <p style="margin-top:4px; font-weight: bold;">С тобой нужно было просто быть.</p>
        ` 
    },

    // --- СТРАНИЦА 43: GRUND 19 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 19", 
        content: `
            <p>Ich liebe dich dafür, wie viel wir gemeinsam haben.</p>
            <p style="margin-top:12px;">Interessen.<br>Charakter.<br>Die Art zu fühlen.</p>
            <p style="margin-top:12px;">Mit dir musste ich mich nicht verstellen.</p>
            <p style="margin-top:4px; font-weight: bold;">Ich musste einfach nur sein.</p>
        ` 
    },

    // --- СТРАНИЦА 44: ПРИЧИНА 20 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 20", 
        content: `
            <p>Я люблю тебя за твою милоту.</p>
            <p style="margin-top:12px;">Но не в детском смысле этого слова.</p>
            <p style="margin-top:4px;">А за ту искренность, чистоту и свет, которые исходят от тебя.</p>
            <p style="margin-top:12px;">За ту лёгкость, с которой ты умеешь быть настоящей.</p>
            <p style="margin-top:16px;">И, возможно, именно за это я влюбился тогда.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">И не перестал любить внутри себя.</p>
        ` 
    },

    // --- СТРАНИЦА 45: GRUND 20 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 20", 
        content: `
            <p>Ich liebe dich für deine Zartheit.</p>
            <p style="margin-top:12px;">Nicht im kindlichen Sinn.</p>
            <p style="margin-top:4px;">Sondern für die Aufrichtigkeit, Reinheit und das Licht, das von dir ausgeht.</p>
            <p style="margin-top:12px;">Für die Leichtigkeit, mit der du einfach du selbst bist.</p>
            <p style="margin-top:16px;">Und vielleicht habe ich mich genau deshalb damals verliebt.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">Und habe innerlich nie aufgehört.</p>
        ` 
    },

    // --- СТРАНИЦА 46: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 2 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 2", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 16px; text-align: left;">
                "У меня всегда в отношениях возникал вопрос:<br>
                - Если бы жизнь сложилась совсем по-другому, и у меня была бы другая жизнь, влюбилась бы в него снова и на всю жизнь? И знаешь, я всегда говорила нет или было трудно ответить, но с тобой я с уверенностью могу сказать да, я бы снова и снова выбрала бы тебя."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 15px; text-align: left;">
                „Ich habe mir in Beziehungen immer eine Frage gestellt:<br>
                Wenn das Leben völlig anders verlaufen wäre und ich ein ganz anderes Leben gehabt hätte – würde ich mich wieder für immer in ihn verlieben? Und weißt du, ich habe immer ‚Nein‘ gesagt oder es fiel mir schwer, darauf zu antworten. Aber bei dir kann ich mit absoluter Gewissheit sagen: Ja, ich würde dich immer und immer wieder wählen.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v2/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 47: ЭТАП 2 (ВСТУПЛЕНИЕ RU) ---
    { 
        type: "chapter", 
        lang: "ru",
        title: "Э Т А П  •  2", 
        content: `
            <div style="font-size: 18px; font-weight: bold; letter-spacing: 2px; color: #8c2323; margin-bottom: 15px; text-align: center;">ЗА ТО, КАКАЯ ТЫ</div>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6;">Знаешь, идеальных людей не бывает. Да и если честно, с идеальным человеком, наверное, очень скучно жить. В этой части я хочу поговорить с тобой о том, какая ты на самом деле. Не для всех остальных, перед кем ты кажешься сильной, собранной и уверенной в себе, а для меня.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Я ведь долго наблюдал за тобой. За тем, как ты сосредоточенно учишь немецкий, буквально отгораживаясь от всего мира тишиной. За тем, как ты забавно двигаешь головой и улыбаешься, когда смущаешься. За тем, как ты споришь со мной и не даешь себя сломать — и как сильно я люблю тебя в эти моменты, потому что вижу твой стержень.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Раньше я думал, что любовь — это когда всё просто и гладко. С тобой я понял, что любить человека — это значит принимать и его страхи, и его упрямство, и моменты, когда он закрывается в своей раковине от всего мира. Я помню, как цинично спорил с тобой о том, что в отношениях главное — комфорт. И помню, как твоя простая фраза: <i>«А зачем жить комфортно с человеком, которого не любишь?»</i> — перевернула всё в моей голове. Ты научила меня чувствовать жизнь глубже.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Здесь собраны еще 20 мыслей. Это то, за что я люблю твою сложность, твою ранимость и твою невероятную внутреннюю силу. Это про то, как в тебе уживаются взрослая, ответственная девушка, готовая перевернуть горы ради близких, и маленькая, хрупкая девочка, которую мне хочется оберегать от всего мира.</p>
            <p style="text-align: center; font-weight: bold; margin-top: 15px; color: #2c2a29;">Я люблю тебя за то, какая ты есть.<br><span style="color: #8c2323;">Настоящая. Моя.</span></p>
        ` 
    },

    // --- СТРАНИЦА 48: ETAPPE 2 (ВСТУПЛЕНИЕ DE) ---
    { 
        type: "chapter", 
        lang: "de",
        title: "E T A P P E  •  2", 
        content: `
            <div style="font-size: 16px; font-weight: bold; letter-spacing: 1px; color: #8c2323; margin-bottom: 15px; text-align: center;">FÜR DAS, WIE DU BIST</div>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6;">Weißt du, perfekte Menschen gibt es nicht. Und um ehrlich zu sein, wäre das Leben mit einem perfekten Menschen wahrscheinlich auch ziemlich langweilig. In diesem Teil möchte ich mit dir darüber sprechen, wie du wirklich bist. Nicht für all die anderen, vor denen du stark, diszipliniert und selbstbewusst wirkst, sondern für mich.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Ich habe dich nämlich lange beobachtet. Wie du hochkonzentriert Deutsch lernst und dich dabei regelrecht mit Stille von der gesamten Welt abschottest. Wie du auf diese süße Art deinen Kopf bewegst und lächelst, wenn du verlegen bist. Wie du mit mir diskutierst und dich nicht verbiegen lässt – und wie sehr ich dich in genau diesen Momenten liebe, weil ich deine innere Stärke sehe.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Früher dachte ich, Liebe sei etwas, das einfach und reibungslos verläuft. Durch dich habe ich verstanden, dass einen Menschen zu lieben bedeutet, auch seine Ängste, seine Sturheit und die Momente zu akzeptieren, in denen er sich in sein Schneckenhaus vor der ganzen Welt zurückzieht. Ich weiß noch, wie zynisch ich mit dir darüber gestritten habe, dass in einer Beziehung der Komfort das Wichtigste sei. Und ich weiß noch, wie dein einfacher Satz: <i>„Und wozu lebt man komfortabel mit jemandem, den man nicht liebt?“</i> — alles in meinem Kopf auf den Kopf gestellt hat. Du hast mich gelehrt, das Leben tiefer zu spüren.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Hier sind weitere 20 Gedanken gesammelt. Es ist das, weshalb ich deine Komplexität, deine Verletzlichkeit und deine unglaubliche innere Kraft liebe. Es geht darum, wie in dir eine erwachsene, verantwortungsbewusste Frau, die für ihre Liebsten Berge versetzen würde, und ein kleines, zerbrechliches Mädchen zusammenleben, das ich am liebsten vor der ganzen Welt beschützen möchte.</p>
            <p style="text-align: center; font-weight: bold; margin-top: 15px; color: #2c2a29;">Ich liebe dich für das, wie du bist.<br><span style="color: #8c2323;">Echt. Mein.</span></p>
        ` 
    },

    // --- СТРАНИЦА 49: ПРИЧИНА 21 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 21", 
        content: `
            <p>Я люблю тебя за то, что именно благодаря тебе я понял одну странную вещь.</p>
            <p style="margin-top:12px;">Иногда человек понимает, что ему нужно,<br>только когда начинает терять это.</p>
            <p style="margin-top:12px;">Я встречал других девушек.<br>Разные характеры, разные отношения.</p>
            <p style="margin-top:12px;">Но с каждым новым знакомством я всё яснее видел одну деталь —<br>они могут быть хорошими.<br><span style="font-weight: bold; color: #8c2323;">Но они не ты.</span></p>
            <p style="margin-top:16px;">И тогда я понял, что дело не в том, что ты идеальная.<br>Дело в том, что именно твоя сложность, твоя ранимость, твоя странность оказались тем, без чего моё сердце не чувствует себя дома.</p>
        ` 
    },

    // --- СТРАНИЦА 50: GRUND 21 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 21", 
        content: `
            <p>Ich liebe dich, weil ich genau durch dich eine seltsame Sache verstanden habe.</p>
            <p style="margin-top:12px;">Manchmal merkt ein Mensch erst, was er braucht,<br>wenn er droht, es zu verlieren.</p>
            <p style="margin-top:12px;">Ich habe andere Mädchen getroffen.<br>Verschiedene Charaktere, verschiedene Beziehungen.</p>
            <p style="margin-top:12px;">Doch mit jeder neuen Bekanntschaft wurde mir eines immer klarer:<br>Sie mögen gut sein.<br><span style="font-weight: bold; color: #8c2323;">Aber sie sind nicht du.</span></p>
            <p style="margin-top:16px;">Und da begriff ich, dass es nicht daran liegt, dass du perfekt bist.<br>Es liegt daran, dass genau deine Komplexität, deine Verletzlichkeit, deine Eigenheit zu dem wurden, ohne das mein Herz sich einfach nicht zu Hause fühlt.</p>
        ` 
    },

    // --- СТРАНИЦА 51: ПРИЧИНА 22 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 22", 
        content: `
            <p>Я люблю тебя за одну странную вещь, которую я понял не сразу.</p>
            <p style="margin-top:12px;">Когда мне было тяжело, я иногда просто делился с тобой.<br>Не потому что ждал решения.<br>Просто хотелось, чтобы кто-то услышал.</p>
            <p style="margin-top:12px;">И ты часто делала странное — переводила разговор на другую тему.</p>
            <p style="margin-top:12px;">Сначала я думал, что ты просто не понимаешь меня, и даже немного обижался. Но потом я заметил одну деталь: после разговора с тобой мне становилось легче.</p>
            <p style="margin-top:16px; font-weight: bold;">И только позже я понял:<br>ты не игнорировала мою боль. Ты просто забирала у неё внимание, чтобы она перестала быть центром моего мира.</p>
            <p style="margin-top:4px; font-style: normal; color: #8c2323;">И каким-то образом это работало.</p>
        ` 
    },

    // --- СТРАНИЦА 52: GRUND 22 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 22", 
        content: `
            <p>Ich liebe dich für eine seltsame Sache, die ich nicht sofort verstanden habe.</p>
            <p style="margin-top:12px;">Wenn es mir schwerging, habe ich mich dir manchmal einfach anvertraut.<br>Nicht, weil ich eine Lösung erwartet hätte.<br>Ich wollte einfach nur gehört werden.</p>
            <p style="margin-top:12px;">Und du hast oft etwas Eigenartiges getan — du hast das Thema gewechselt.</p>
            <p style="margin-top:12px;">Zuerst dachte ich, du verstehst mich einfach nicht, und war sogar ein bisschen gekränkt. Aber dann bemerkte ich ein Detail: nach dem Gespräch mit dir wurde mir leichter ums Herz.</p>
            <p style="margin-top:16px; font-weight: bold;">Erst viel später habe ich verstanden:<br>Du hast meinen Schmerz nicht ignoriert. Du hast ihm nur die Aufmerksamkeit entzogen, damit er aufhört, der Mittelpunkt meiner Welt zu sein.</p>
            <p style="margin-top:4px; font-style: normal; color: #8c2323;">Und irgendwie hat das funktioniert.</p>
        ` 
    },

    // --- СТРАНИЦА 53: ПРИЧИНА 23 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 23", 
        content: `
            <p>Я люблю тебя даже за ту часть тебя, которая иногда закрывается от меня.</p>
            <p style="margin-top:12px;">Честно говоря, мне это тяжело. Потому что, когда тебе больно, мне хочется быть тем человеком, которому ты можешь всё рассказать.</p>
            <p style="margin-top:12px;">Иногда я думаю: может быть, ты просто привыкла справляться одна. Может быть, мир слишком часто заставлял тебя быть сильной.</p>
            <p style="margin-top:12px;">Но даже когда ты молчишь, я всё равно чувствую эту борьбу внутри тебя.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, возможно, именно поэтому мне так хочется однажды стать тем местом, где тебе больше не нужно будет защищаться.</p>
        ` 
    },

    // --- СТРАНИЦА 54: GRUND 23 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 23", 
        content: `
            <p>Ich liebe dich sogar für den Teil von dir, der sich manchmal vor mir verschließt.</p>
            <p style="margin-top:12px;">Ehrlich gesagt, fällt mir das schwer. Denn wenn du leidest, möchte ich der Mensch sein, dem du alles erzählen kannst.</p>
            <p style="margin-top:12px;">Manchmal denke ich: Vielleicht bist du es einfach gewohnt, alles allein durchzustehen. Vielleicht hat die Welt dich zu oft gezwungen, stark zu sein.</p>
            <p style="margin-top:12px;">Doch selbst wenn du schweigst, spüre ich diesen Kampf in deinem Inneren.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und genau deshalb wünsche ich mir wohl so sehr, eines Tages der Ort zu sein, an dem du dich nicht mehr verteidigen musst.</p>
        ` 
    },

    // --- СТРАНИЦА 55: ПРИЧИНА 24 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 24", 
        content: `
            <p>Я люблю одну маленькую деталь, которую, возможно, почти никто не замечает.</p>
            <p style="margin-top:12px;">Когда ты немного смущаешься или чувствуешь неловкость, ты слегка двигаешь головой из стороны в сторону и при этом улыбаешься.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold; text-align: center; color: #8c2323;">Будто говоришь без слов: «что?..»</p>
            <p style="margin-top:12px;">Это длится всего секунду. Но каждый раз, когда я видел это, я понимал одну простую вещь:</p>
            <p style="margin-top:8px; font-weight: bold;">за всей твоей силой живёт очень живая и настоящая девочка.</p>
        ` 
    },

    // --- СТРАНИЦА 56: GRUND 24 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 24", 
        content: `
            <p>Ich liebe ein kleines Detail an dir, das außer mir vielleicht kaum jemand bemerkt.</p>
            <p style="margin-top:12px;">Wenn du ein wenig verlegen bist oder dich unwohl fühlst, bewegst du deinen Kopf leicht von einer Seite zur anderen und lächelst dabei.</p>
            <p style="margin-top:12px; font-style: normal; font-weight: bold; text-align: center; color: #8c2323;">Als würdest du wortlos sagen: „Was denn?..“</p>
            <p style="margin-top:12px;">Das dauert nur eine Sekunde. Aber jedes Mal, wenn ich es sah, wurde mir eine einfache Sache klar:</p>
            <p style="margin-top:8px; font-weight: bold;">Hinter all deiner Stärke lebt ein unheimlich lebendiges und echtes Mädchen.</p>
        ` 
    },

    // --- СТРАНИЦА 57: ПРИЧИНА 25 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 25", 
        content: `
            <p>Я люблю тебя за твою силу.</p>
            <p style="margin-top:12px;">Но не за ту силу, которую люди показывают миру, а за ту, которая проявляется в ответственности.</p>
            <p style="margin-top:12px;">Ты никогда не боялась брать на себя больше, чем берут другие. Иногда даже слишком много.</p>
            <p style="margin-top:12px;">И самое удивительное — в тебе никогда не было этой пустой самоуверенности, когда человек просто говорит: «я справлюсь». Ты просто спокойно берёшь и делаешь.</p>
            <p style="margin-top:16px; font-weight: bold;">Будто внутри тебя есть тихая уверенность: если есть цель — значит есть и способ её достичь.</p>
            <p style="margin-top:12px; font-style: italic; color: #666;">И рядом с этим многие люди кажутся теми, кто просто стоит на месте и ждёт, когда жизнь решит всё за них.</p>
        ` 
    },

    // --- СТРАНИЦА 58: GRUND 25 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 25", 
        content: `
            <p>Ich liebe dich für deine Stärke.</p>
            <p style="margin-top:12px;">Aber nicht für die Art von Stärke, die man der Welt präsentiert, sondern für die, die sich in deiner Verantwortung zeigt.</p>
            <p style="margin-top:12px;">Du hast dich nie davor gescheut, mehr auf dich zu nehmen als andere. Manchmal sogar zu viel.</p>
            <p style="margin-top:12px;">Und das Erstaunlichste ist — in dir gab es nie diese leere Selbstgefälligkeit, bei der man einfach nur sagt: „Ich schaffe das schon.“ Du packst es einfach ruhig an und tust es.</p>
            <p style="margin-top:16px; font-weight: bold;">Als gäbe es in dir eine stille Gewissheit: Wenn es ein Ziel gibt, dann gibt es auch einen Weg dorthin.</p>
            <p style="margin-top:12px; font-style: italic; color: #666;">Und im Vergleich dazu wirken viele Menschen wie diejenigen, die bloß auf der Stelle treten und darauf warten, dass das Leben alles für sie regelt.</p>
        ` 
    },
        // --- СТРАНИЦА 59: ПРИЧИНА 26 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 26", 
        content: `
            <p>Я люблю то, как в тебе уживаютcя два человека.</p>
            <p style="margin-top:12px;">Снаружи ты сильная. Уверенная. Та, которая может свернуть горы.</p>
            <p style="margin-top:12px;">Но внутри есть очень ранимая часть тебя. Та самая маленькая девочка, которой важно чувствовать заботу.</p>
            <p style="margin-top:4px;">Которой важно знать, что её любят и что рядом есть люди, которым она действительно нужна.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И почему-то именно эта часть тебя всегда заставляла моё сердце относиться к тебе ещё бережнее.</p>
        ` 
    },

    // --- СТРАНИЦА 60: GRUND 26 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 26", 
        content: `
            <p>Ich liebe es, wie zwei Persönlichkeiten in dir harmonieren.</p>
            <p style="margin-top:12px;">Nach außen hin bist du stark. Selbstbewusst. Eine, die Berge versetzen kann.</p>
            <p style="margin-top:12px;">Doch tief im Inneren gibt es einen sehr verletzlichen Teil von dir. Dieses kleine Mädchen, dem es so wichtig ist, Geborgenheit zu spüren.</p>
            <p style="margin-top:4px;">Dem es wichtig ist zu wissen, dass es geliebt wird und dass da Menschen sind, die es wirklich brauchen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und irgendwie hat genau diese Seite an dir mein Herz immer dazu gebracht, noch behutsamer mit dir umzugehen.</p>
        ` 
    },

    // --- СТРАНИЦА 61: ПРИЧИНА 27 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 27", 
        content: `
            <p>Я люблю то, как ты даришь внимание.</p>
            <p style="margin-top:12px;">Ты любишь делать подарки. Любишь радовать близких.</p>
            <p style="margin-top:12px;">Но самое трогательное в этом даже не сами подарки. А то, как ты к этому относишься.</p>
            <p style="margin-top:4px;">Будто для тебя гораздо важнее увидеть радость другого человека, чем получить что-то самой.</p>
            <p style="margin-top:16px; font-weight: bold;">Иногда мне кажется, что ты получаешь больше счастья, когда даришь.</p>
            <p style="margin-top:4px; font-style: normal; color: #8c2323;">И это одна из самых красивых черт твоего сердца.</p>
        ` 
    },

    // --- СТРАНИЦА 62: GRUND 27 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 27", 
        content: `
            <p>Ich liebe es, wie du anderen deine Aufmerksamkeit schenkst.</p>
            <p style="margin-top:12px;">Du liebst es, Geschenke zu machen. Du liebst es, deinen Liebsten eine Freude zu bereiten.</p>
            <p style="margin-top:12px;">Doch das Berührendste daran sind nicht einmal die Geschenke selbst. Sondern deine innere Haltung dazu.</p>
            <p style="margin-top:4px;">Als wäre es dir unendlich viel wichtiger, die Freude des anderen zu sehen, als selbst etwas zu bekommen.</p>
            <p style="margin-top:16px; font-weight: bold;">Manchmal habe ich das Gefühl, dass es dich glücklicher macht zu geben, als zu nehmen.</p>
            <p style="margin-top:4px; font-style: normal; color: #8c2323;">Und das ist einer der schönsten Züge deines Herzens.</p>
        ` 
    },

    // --- СТРАНИЦА 63: ПРИЧИНА 28 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 28", 
        content: `
            <p>Я люблю даже твою сложность.</p>
            <p style="margin-top:12px;">Иногда ты можешь вспылить. Иногда можешь ревновать. И со стороны это может казаться чем-то трудным.</p>
            <p style="margin-top:12px;">Но со временем я понял одну вещь: за этим стоит не злость и не желание ранить. За этим стоят твои чувства. Ты просто умеешь чувствовать очень глубоко.</p>
            <p style="margin-top:4px;">И иногда этих эмоций внутри тебя становится так много, что они просто вырываются наружу.</p>
            <p style="margin-top:16px; font-weight: bold;">Да, с этим бывает непросто. Но, если честно, я лучше выберу человека с настоящими чувствами, чем того, у кого внутри всегда пусто и спокойно.</p>
        ` 
    },

    // --- СТРАНИЦА 64: GRUND 28 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 28", 
        content: `
            <p>Ich liebe selbst deine komplizierte Seite.</p>
            <p style="margin-top:12px;">Manchmal wirst du impulsiv. Manchmal bist du eifersüchtig. Und von außen betrachtet mag das schwierig erscheinen.</p>
            <p style="margin-top:12px;">Doch mit der Zeit habe ich eines verstanden: Dahinter steckt keine Bosheit und kein Wunsch, zu verletzen. Dahinter stehen deine Gefühle. Du kannst einfach unglaublich tief empfinden.</p>
            <p style="margin-top:4px;">Und manchmal werden diese Emotionen in dir so intensiv, dass sie einfach nach draußen ausbrechen.</p>
            <p style="margin-top:16px; font-weight: bold;">Ja, das ist nicht immer leicht. Aber um ehrlich zu sein, wähle ich lieber einen Menschen mit echten Gefühlen, als jemanden, in dem es immer nur leer und ruhig ist.</p>
        ` 
    },

    // --- СТРАНИЦА 65: ПРИЧИНА 29 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 29", 
        content: `
            <p>Я люблю тебя за то, что иногда ты меняешь мой взгляд на вещи.</p>
            <p style="margin-top:12px;">Однажды мы спорили о любви. Я говорил довольно цинично: если рядом человек, который подходит тебе, с которым можно спокойно и удобно жить — разве любовь так уж обязательна?</p>
            <p style="margin-top:12px;">Ты тогда сказала одну фразу. Очень простую:<br><span style="font-style: italic; color: #8c2323;">«А зачем жить комфортно с человеком, которого не любишь?»</span></p>
            <p style="margin-top:16px; font-weight: bold;">И в тот момент я вдруг понял, что ты чувствуешь жизнь глубже, чем я.</p>
        ` 
    },

    // --- СТРАНИЦА 66: GRUND 29 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 29", 
        content: `
            <p>Ich liebe dich dafür, dass du manchmal meinen Blick auf die Dinge veränderst.</p>
            <p style="margin-top:12px;">Einmal haben wir über die Liebe gestritten. Ich argumentierte recht zynisch: Wenn man einen Partner hat, der zu einem passt, mit dem man ein ruhiges und bequemes Leben führen kann — ist Liebe dann überhaupt so wichtig?</p>
            <p style="margin-top:12px;">Du hast damals einen Satz gesagt. Einen ganz einfachen:<br><span style="font-style: italic; color: #8c2323;">„Und warum sollte man komfortabel mit jemandem leben, den man nicht liebt?“</span></p>
            <p style="margin-top:16px; font-weight: bold;">Und in diesem Moment wurde mir plötzlich klar, dass du das Leben viel tiefer spürst als ich.</p>
        ` 
    },

    // --- СТРАНИЦА 67: ПРИЧИНА 30 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 30", 
        content: `
            <p>Я люблю один образ, который до сих пор иногда вспоминаю.</p>
            <p style="margin-top:12px;">Ты сидела и учила немецкий. Настолько сосредоточенная, что вокруг тебя будто образовалась маленькая тишина.</p>
            <p style="margin-top:4px;">Я говорил с тобой — но ты не слышала. Потому что вся твоя энергия была направлена в одно место.</p>
            <p style="margin-top:12px;">И, если честно, за этим было очень интересно наблюдать.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">Потому что in solche Momente видно, насколько ты умеешь по-настоящему стремиться к чему-то.</p>
        ` 
    },

    // --- СТРАНИЦА 68: GRUND 30 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 30", 
        content: `
            <p>Ich liebe ein bestimmtes Bild von dir, an das ich mich heute noch manchmal erinnere.</p>
            <p style="margin-top:12px;">Du saßt da und hast Deutsch gelernt. So unendlich konzentriert, dass sich um dich herum fast eine kleine Blase der Stille bildete.</p>
            <p style="margin-top:4px;">Ich habe mit dir gesprochen — aber du hast mich nicht gehört. Weil all deine Energie auf diesen einen Punkt gerichtet war.</p>
            <p style="margin-top:12px;">Und um ehrlich zu sein, war es faszinierend, dich dabei zu beobachten.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">Denn in solchen Momenten sieht man, wie sehr du fähig bist, dich einer Sache mit ganzem Herzen zu verschreiben.</p>
        ` 
    },

    // --- СТРАНИЦА 69: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 3 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 3", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 16px; text-align: left;">
                "Как хорошо, что у меня есть человек, о ком я думаю, когда засыпаю и когда просыпаюсь."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 15px; text-align: left;">
                „Wie schön es doch ist, dass ich einen Menschen habe, an den ich beim Einschlafen und beim Aufwachen denke.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v3/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 70: ПРИЧИНА 31 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 31", 
        content: `
            <p>Я люблю то, какая ты противоречивая.</p>
            <p style="margin-top:12px;">В тебе есть нежность, которую редко встретишь. Но вместе с ней в тебе есть упрямство, которое невозможно сломать.</p>
            <p style="margin-top:12px;">Если ты решила помочь, ты сделаешь это в любом случае. Не из-за принципа. А потому что внутри ты уже приняла это решение.</p>
            <p style="margin-top:4px;">И никакие слова уже не могут его изменить.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И именно в этом есть что-то очень настоящее.</p>
        ` 
    },

    // --- СТРАНИЦА 71: GRUND 31 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 31", 
        content: `
            <p>Ich liebe es, wie widersprüchlich du bist.</p>
            <p style="margin-top:12px;">In dir liegt eine Zärtlichkeit, der man nur selten begegnet. Doch gleichzeitig hast du eine Sturheit, die absolut unbezwingbar ist.</p>
            <p style="margin-top:12px;">Wenn du dir vorgenommen hast zu helfen, dann tust du es — ohne Wenn und Aber. Nicht aus Prinzip. Sondern weil du die Entscheidung tief in dir längst getroffen hast.</p>
            <p style="margin-top:4px;">Und keine Worte der Welt können dich dann noch umstimmen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und genau darin liegt etwas unheimlich Echtes.</p>
        ` 
    },

    // --- СТРАНИЦА 72: ПРИЧИНА 32 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 32", 
        content: `
            <p>Я люблю то, как ты меняешься в зависимости от того, кто рядом с тобой.</p>
            <p style="margin-top:12px;">Среди незнакомых ты собранная. Сильная. Целеустремлённая. Та, которая знает, чего хочет, и не даёт себя сломать.</p>
            <p style="margin-top:12px;">Но рядом с близкими ты становишься совсем другой.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">Мягкой. Тёплой. Той самой маленькой девочкой, которую хочется оберегать.</p>
        ` 
    },

    // --- СТРАНИЦА 73: GRUND 32 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 32", 
        content: `
            <p>Ich liebe es, wie du dich veränderst, je nachdem, wer gerade bei dir ist.</p>
            <p style="margin-top:12px;">Unter Fremden bist du fokussiert. Stark. Zielstrebig. Eine Frau, die weiß, was sie will, und sich von niemandem unterkriegen lässt.</p>
            <p style="margin-top:12px;">Doch in der Nähe deiner Liebsten wirst du völlig anders.</p>
            <p style="margin-top:4px; font-weight: bold; color: #8c2323;">Weich. Warmherzig. Genau das kleine Mädchen, das man einfach beschützen möchte.</p>
        ` 
    },

    // --- СТРАНИЦА 74: ПРИЧИНА 33 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 33", 
        content: `
            <p>Я уважаю тебя за твою честность.</p>
            <p style="margin-top:12px; font-weight: bold;">Настоящую.</p>
            <p style="margin-top:4px;">Не ту, которая удобна, и не ту, которую показывают, когда это выгодно. А ту, которую невозможно подделать.</p>
            <p style="margin-top:12px;">Иногда она может быть резкой. Иногда неудобной.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Но именно поэтому ей можно верить.</p>
        ` 
    },

    // --- СТРАНИЦА 75: GRUND 33 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 33", 
        content: `
            <p>Ich respektiere dich für deine Ehrlichkeit.</p>
            <p style="margin-top:12px; font-weight: bold;">Die echte Ehrlichkeit.</p>
            <p style="margin-top:4px;">Nicht die, die gerade bequem ist, oder die man nur zeigt, wenn es von Vorteil ist. Sondern jene, die man schlichtweg nicht fälschen kann.</p>
            <p style="margin-top:12px;">Manchmal mag sie barsch sein. Manchmal unbequem.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Aber genau deshalb kann man ihr bedingungslos vertrauen.</p>
        ` 
    },

    // --- СТРАНИЦА 76: ПРИЧИНА 34 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 34", 
        content: `
            <p>Я люблю тебя за то, как ты изменила моё понимание отношений.</p>
            <p style="margin-top:12px;">Раньше я думал, что идеальные отношения — это когда всё спокойно и без конфликтов. Когда человек рядом удобный.</p>
            <p style="margin-top:12px;">С тобой я понял другое. Иногда ты споришь. Иногда стоишь на своём. Иногда не делаешь так, как я сказал. И в моменте это может злить.</p>
            <p style="margin-top:12px;">Но потом происходит что-то странное. Когда ты всё-таки поступаешь так, как я хотел, я понимаю: это не потому, что тебя сломали. Это потому, что ты выбрала это сама.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, наверное, именно в такие моменты я чувствую, насколько сильно я тебя люблю.</p>
        ` 
    },

    // --- СТРАНИЦА 77: GRUND 34 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 34", 
        content: `
            <p>Ich liebe dich dafür, wie du mein Verständnis von Beziehungen verändert hast.</p>
            <p style="margin-top:12px;">Früher dachte ich, die perfekte Beziehung sei harmonisch und völlig konfliktfrei. Wenn der Partner einfach unkompliziert ist.</p>
            <p style="margin-top:12px;">Durch dich habe ich etwas anderes gelernt. Manchmal streitest du. Manchmal beharrst du auf deiner Meinung. Manchmal tust du eben nicht das, was ich gesagt habe. Im ersten Moment kann mich das wütend machen.</p>
            <p style="margin-top:12px;">Doch dann passiert etwas Seltsames. Wenn du am Ende doch so handelst, wie ich es mir gewünscht habe, wird mir klar: Das ist nicht geschehen, weil dein Wille gebrochen wurde. Sondern weil du dich selbst dafür entschieden hast.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und vermutlich spüre ich genau in solchen Momenten, wie unendlich tief ich dich liebe.</p>
        ` 
    },

    // --- СТРАНИЦА 78: ПРИЧИНА 35 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 35", 
        content: `
            <p>Я люблю то, чего я никогда не видел раньше.</p>
            <p style="margin-top:12px;">Когда я вёл себя холодно или говорил обидные вещи, другие люди пытались удержать. Стараться сильнее. Доказывать что-то.</p>
            <p style="margin-top:12px;">А ты делала наоборот. Ты могла отпустить. Сказать, что тебе тоже всё равно.</p>
            <p style="margin-top:12px; font-weight: bold;">И знаешь, в этом было что-то очень сильное и очень страшное одновременно.</p>
            <p style="margin-top:16px;">Потому что в этот момент я понимал: ты любишь глубже, чем другие. Но при этом ты никогда не позволишь себе стать слабее из-за этого.</p>
        ` 
    },

    // --- СТРАНИЦА 79: GRUND 35 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 35", 
        content: `
            <p>Ich liebe etwas an dir, das ich so noch nie zuvor gesehen habe.</p>
            <p style="margin-top:12px;">Wenn ich mich distanziert verhalten oder verletzende Dinge gesagt habe, versuchten andere oft, mich festzuhalten. Sich mehr anzustrengen. Etwas zu beweisen.</p>
            <p style="margin-top:12px;">Du aber hast das Gegenteil getan. Du konntest loslassen. Sagen, dass es dir ebenso gleichgültig ist.</p>
            <p style="margin-top:12px; font-weight: bold;">Und weißt du, das hatte etwas unheimlich Starkes und zugleich Erschreckendes an sich.</p>
            <p style="margin-top:16px;">Denn genau in diesem Augenblick wurde mir klar: Deine Liebe ist tiefer als die der anderen. Aber du wirst es niemals zulassen, dass sie dich schwach macht.</p>
        ` 
    },
        // --- СТРАНИЦА 80: ПРИЧИНА 36 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 36", 
        content: `
            <p>Я люблю тебя даже за твой страх.</p>
            <p style="margin-top:12px;">Не потому что он красивый. И не потому что он простой. А потому что он настоящий.</p>
            <p style="margin-top:12px;">В тебе есть страх быть отвергнутой самыми близкими людьми. Страх, который ты не выбирала. Страх, который появился не по твоей вине.</p>
            <p style="margin-top:16px; font-weight: bold;">И, честно говоря, это делает тебя не слабой. Это делает тебя живой.</p>
            <p style="margin-top:4px; color: #8c2323;">Потому что несмотря на всё это, ты продолжаешь быть такой же тёплой, такой же доброй, такой же настоящей.</p>
        ` 
    },

    // --- СТРАНИЦА 81: GRUND 36 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 36", 
        content: `
            <p>Ich liebe dich selbst für deine Angst.</p>
            <p style="margin-top:12px;">Nicht, weil sie schön wäre. Und nicht, weil sie unkompliziert ist. Sondern weil sie real ist.</p>
            <p style="margin-top:12px;">In dir wohnt die Angst, von den Menschen, die dir am nächsten stehen, zurückgewiesen zu werden. Eine Angst, die du dir nicht ausgesucht hast. Eine Angst, die ohne dein Verschulden entstanden ist.</p>
            <p style="margin-top:16px; font-weight: bold;">Und um ehrlich zu sein, macht dich das nicht schwach. Es macht dich lebendig.</p>
            <p style="margin-top:4px; color: #8c2323;">Denn trotz alledem bist du geblieben, wer du bist: Genauso warmherzig, genauso gütig, genauso echt.</p>
        ` 
    },

    // --- СТРАНИЦА 82: ПРИЧИНА 37 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 37", 
        content: `
            <p>Я люблю одну вещь, которая сначала казалась мне сложной. Твоё мышление.</p>
            <p style="margin-top:12px;">Ты не живёшь только логикой и не живёшь только эмоциями. Ты где-то посередине.</p>
            <p style="margin-top:12px;">У тебя есть идеализм, но он не отрывает тебя от реальности. Ты смотришь на мир шире, чем просто «удобно» или «неудобно».</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, если честно, именно это заставило меня пересмотреть некоторые свои взгляды.</p>
        ` 
    },

    // --- СТРАНИЦА 83: GRUND 37 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 37", 
        content: `
            <p>Ich liebe eine Eigenschaft an dir, die mir anfangs schwierig erschien. Deine Art zu denken.</p>
            <p style="margin-top:12px;">Du lebst weder nur nach reiner Logik, noch verlierst du dich völlig in deinen Emotionen. Du bewegst dich genau in der Mitte.</p>
            <p style="margin-top:12px;">Du besitzt einen Idealismus, der dich jedoch nie den Boden unter den Füßen verlieren lässt. Du betrachtest die Welt weitaus tiefgründiger als nur in Kategorien von „praktisch“ oder „unpraktisch“.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und um ehrlich zu sein, hat genau das mich dazu gebracht, einige meiner eigenen Ansichten zu überdenken.</p>
        ` 
    },

    // --- СТРАНИЦА 84: ПРИЧИНА 38 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 38", 
        content: `
            <p>Я люблю одну твою тихую сторону, о которой ты даже не говоришь вслух.</p>
            <p style="margin-top:12px;">Снаружи у тебя есть амбиции. Цели. Планы. Ты можешь говорить о карьере, о деньгах, о больших возможностях.</p>
            <p style="margin-top:12px;">Но иногда мне кажется, что глубже всего внутри у тебя есть совсем другая мечта: спокойная жизнь. Любящий человек рядом. Семья. Дети. Просто будущее, в котором можно выдохнуть.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, если честно, именно эта мечта кажется мне самой настоящей.</p>
        ` 
    },

    // --- СТРАНИЦА 85: GRUND 38 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 38", 
        content: `
            <p>Ich liebe eine ganz leise Seite an dir, über die du kaum ein Wort verlierst.</p>
            <p style="margin-top:12px;">Nach außen hin hast du Ambitionen. Ziele. Pläne. Du kannst über Karriere sprechen, über Erfolg und große Möglichkeiten.</p>
            <p style="margin-top:12px;">Doch manchmal habe ich das Gefühl, dass tief in deinem Inneren ein ganz anderer Traum wohnt: ein ruhiges Leben. Ein liebender Mensch an deiner Seite. Eine Familie. Kinder. Einfach eine Zukunft, in der man endlich tief durchatmen kann.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und um ehrlich zu sein, wirkt genau dieser Traum auf mich am allerreinsten.</p>
        ` 
    },

    // --- СТРАНИЦА 86: ПРИЧИНА 39 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 39", 
        content: `
            <p>Я люблю твоё отношение к жизни.</p>
            <p style="margin-top:12px;">Ты знаешь, что она не всегда справедлива. Ты уже сталкивалась с этим. И да, ты не становишься равнодушной. Тебе всё ещё больно, когда что-то происходит не так.</p>
            <p style="margin-top:12px;">Но ты не живёшь этой болью. Ты принимаешь её и продолжаешь идти вперёд.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, возможно, именно в этом есть твоя настоящая зрелость.</p>
        ` 
    },

    // --- СТРАНИЦА 87: GRUND 39 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 39", 
        content: `
            <p>Ich liebe deine Lebenseinstellung.</p>
            <p style="margin-top:12px;">Du weißt, dass das Leben nicht immer fair ist. Du hast diese Erfahrung bereits gemacht. Und nein, du wirst dadurch nicht gleichgültig. Es tut dir immer noch weh, wenn Dinge schieflaufen.</p>
            <p style="margin-top:12px;">Aber du lässt dich von diesem Schmerz nicht beherrschen. Du nimmst ihn an und gehst erhobenen Hauptes weiter voran.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und vielleicht liegt genau darin deine wahre Reife.</p>
        ` 
    },

    // --- СТРАНИЦА 88: ПРИЧИНА 40 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 40", 
        content: `
            <p>Я люблю тебя за твою суть.</p>
            <p style="margin-top:12px;">Если убрать всё внешнее, останешься ты. Твоя доброта. Твоя нежность. Твоя способность переживать и не быть равнодушной.</p>
            <p style="margin-top:12px;">Твой характер, который не ломается. Твоё упорство и твой дух.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">И, если честно, именно за это<br>я бы выбрал тебя снова.</p>
        ` 
    },

    // --- СТРАНИЦА 89: GRUND 40 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 40", 
        content: `
            <p>Ich liebe dich für deine Essenz.</p>
            <p style="margin-top:12px;">Wenn man alles Äußere wegnimmt, bleibst du übrig. Deine Güte. Deine Zärtlichkeit. Deine Fähigkeit, mitzufühlen und niemals gleichgültig zu sein.</p>
            <p style="margin-top:12px;">Dein Charakter, der sich nicht verbiegen lässt. Deine Beharrlichkeit und dein starker Geist.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Und um ehrlich zu sein, ist es genau das,<br>warum ich mich immer wieder für dich entscheiden würde.</p>
        ` 
    },

    // --- СТРАНИЦА 90: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 4 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 4", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 15px; text-align: left;">
                "Как хорошо что глаза моего самого любимого человека видят только меня когда его всегда и везде окружают разные люди."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Wie schön es ist, dass die Augen meines über alles geliebten Menschen nur mich sehen, selbst wenn er immer und überall von so vielen anderen Leuten umgeben ist.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v4/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 91: ЭТАП 3 (ВСТУПЛЕНИЕ RU) ---
    { 
        type: "chapter", 
        lang: "ru",
        title: "Э Т А П  •  3", 
        content: `
            <div style="font-size: 18px; font-weight: bold; letter-spacing: 2px; color: #8c2323; margin-bottom: 15px; text-align: center;">ЗА ТО, КАК ТЫ ВЛИЯЕШЬ НА МЕНЯ</div>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6;">Знаешь, я долго пытался быть сильным. Строил из себя парня с холодной головой, у которого всегда есть планы, цели и амбиции. Мне казалось, что так правильно — никого не впускать слишком глубоко, чтобы никто не мог тебя сломать. Я привык к этой тишине и даже почти смирился с тем, что буду жить по инерции, ничего толком не чувствуя.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">А потом снова появилась ты. И все мои прежние ожидания полетели к чертям.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Ты умудрилась изменить во мне абсолютно всё, даже не прося об этом. В этой части я хочу честно, без масок, рассказать тебе, как сильно ты на меня влияешь. О том, как я жутко испугался 8 февраля, глядя на тебя в тех самых чёрных сапогах, потому что впервые осознал: если ты уйдёшь, я останусь абсолютно пустым. О том, как меня переворачивает изнутри твоё отношение ко мне — когда ты, забив на свой праздник, искала меня, привезла лекарства и оставила деньги, просто почувствовав, что мне плохо.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Рядом с тобой я повзрослел. Перестал бояться ответственности, семьи и будущего. Мои мечты больше не размытые — теперь я просто хочу сделать тебя счастливой в конце этого пути. Ты стала моей первой мыслью в тишине и привычкой, без которой мне мало просто слушать музыку или гулять в одиночку. Каждое чувство теперь хочется проживать только с тобой.</p>
            <p style="text-align: center; font-weight: bold; margin-top: 15px; color: #2c2a29; line-height: 1.5;">Я уже знаю, что такое жизнь без тебя, и я не хочу туда возвращаться. Тот поцелуй вернул меня на своё место. Я не просто люблю тебя.<br><span style="color: #8c2323;">С тобой я снова стал живым.</span></p>
        ` 
    },

    // --- СТРАНИЦА 92: ETAPPE 3 (ВСТУПЛЕНИЕ DE) ---
    { 
        type: "chapter", 
        lang: "de",
        title: "E T A P P E  •  3", 
        content: `
            <div style="font-size: 16px; font-weight: bold; letter-spacing: 1px; color: #8c2323; margin-bottom: 15px; text-align: center;">FÜR DAS, WIE DU MICH BEEINFLUSST</div>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6;">Weißt du, ich habe lange versucht, stark zu sein. Ich habe den Unnahbaren mit kühlem Kopf gespielt, der immer Pläne, Ziele und Ambitionen hat. Mir schien es richtig so – niemanden zu tief an sich heranzulassen, damit dich niemand verletzen kann. Ich hatte mich an diese Stille gewöhnt und mich fast schon damit abgefunden, einfach nur aus Trägheit vor mich hinzuleben, ohne wirklich etwas zu fühlen.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Und dann bist du wieder aufgetaucht. Und all meine bisherigen Erwartungen flogen zum Teufel.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">Du hast es geschafft, absolut alles in mir zu verändern, ohne mich auch nur einmal darum zu bitten. In diesem Teil möchte ich dir ganz ehrlich und ohne Masken erzählen, wie stark dein Einfluss auf mich ist. Davon, wie schrecklich ich mich am 8. Februar erschrocken habe, als ich dich in diesen schwarzen Stiefeln ansah, weil mir zum ersten Mal klar wurde: Wenn du gehst, bleibe ich völlig leer zurück. Davon, wie sehr mich deine Fürsorge innerlich aufwühlt – als du, obwohl es dein eigener Feiertag war, alles stehen und liegen gelassen hast, um mich zu suchen, mir Medikamente zu bringen und Geld dazulassen, einfach nur, weil du gespürt hast, dass es mir schlecht geht.</p>
            <p style="text-indent: 20px; text-align: justify; line-height: 1.6; margin-top: 10px;">An deiner Seite bin ich erwachsen geworden. Ich habe aufgehört, Angst vor Verantwortung, Familie und der Zukunft zu haben. Meine Träume sind nicht mehr verschwommen – jetzt will ich dich am Ende dieses Weges einfach nur glücklich machen. Du bist zu meinem ersten Gedanken in der Stille geworden und zu einer Gewohnheit, ohne die es mir nicht mehr reicht, einfach nur Musik zu hören oder alleine spazieren zu gehen. Jedes Gefühl möchte ich jetzt nur noch mit dir teilen.</p>
            <p style="text-align: center; font-weight: bold; margin-top: 15px; color: #2c2a29; line-height: 1.5;">Ich weiß bereits, wie ein Leben ohne dich aussieht, und ich will nicht dorthin zurück. Jener Kuss hat mich wieder an meinen Platz zurückgebracht. Ich liebe dich nicht einfach nur.<br><span style="color: #8c2323;">Mit dir bin ich wieder lebendig geworden.</span></p>
        ` 
    },

    // --- СТРАНИЦА 93: ПРИЧИНА 41 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 41", 
        content: `
            <p>Я люблю тебя за то, как я это понял. Не сразу. Не красиво. А через странное состояние, которое я не мог объяснить.</p>
            <p style="margin-top:12px;">Когда мы встретились после всех этих лет, я будто выпал из реальности. Я не был полностью там. И не был полностью здесь.</p>
            <p style="margin-top:12px;">Ты стояла передной — настоящая. Но внутри поднималось что-то из прошлого. И всё смешалось.</p>
            <p style="margin-top:4px;">И самое странное — я чувствовал, что ты не принадлежишь мне. Но при этом я впервые за долгое время почувствовал себя цельным.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">После встречи я не хотел ни с кем говорить. Потому что внутри происходило что-то важнее слов. И только через пару дней я понял: ты — не просто чувство. Ты — часть меня, без которой я теряю себя.</p>
        ` 
    },

    // --- СТРАНИЦА 94: GRUND 41 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 41", 
        content: `
            <p>Ich liebe dich dafür, wie ich es verstanden habe. Nicht sofort. Nicht wie im Bilderbuch. Sondern durch einen seltsamen Zustand, den ich mir selbst nicht erklären konnte.</p>
            <p style="margin-top:12px;">Als wir uns wiedergesehen haben, nach all diesen Jahren, war es, als würde ich aus der Realität fallen. Ich war nicht ganz dort. Und ich war nicht ganz hier.</p>
            <p style="margin-top:12px;">Du standest vor mir — so real. Doch in meinem Inneren kam etwas aus der Vergangenheit hoch. Und alles vermischte sich.</p>
            <p style="margin-top:4px;">Und das Seltsamste war — ich spürte, dass du mir nicht gehörst. Aber gleichzeitig habe ich mich seit langer Zeit zum ersten Mal wieder ganz gefühlt.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Nach diesem Treffen wollte ich mit niemandem reden. Weil in meinem Inneren etwas passierte, das wichtiger war als Worte. Erst ein paar Tage später begriff ich: Du bist nicht nur ein Gefühl. Du bist ein Teil von mir, ohne den ich mich selbst verliere.</p>
        ` 
    },

    // --- СТРАНИЦА 95: ПРИЧИНА 42 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 42", 
        content: `
            <p>Я люблю тебя за то, что именно с тобой я понял, что такое любовь.</p>
            <p style="margin-top:12px;">До тебя это слово ничего для меня не значило. Я мог встречаться. Мог быть рядом. Мог испытывать симпатию. Но я не понимал, как это — поставить другого человека выше себя. С тобой это произошло само.</p>
            <p style="margin-top:12px;">И знаешь, в какой-то момент я поймал себя на странной мысли. Я не хотел тебя даже поцеловать. Не потому что не любил.</p>
            <p style="margin-top:4px; font-weight: bold;">А потому что внутри было ощущение, что ты слишком… настоящая. Слишком чистая. И я будто не имею права прикасаться к этому.</p>
            <p style="margin-top:16px; color: #8c2323; font-weight: bold;">И тогда я понял: это не просто чувства. Это что-то, что невозможно сравнить ни с чем другим.</p>
        ` 
    },

    // --- СТРАНИЦА 96: GRUND 42 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 42", 
        content: `
            <p>Ich liebe dich dafür, dass ich erst durch dich verstanden habe, was Liebe eigentlich bedeutet.</p>
            <p style="margin-top:12px;">Vor dir war dieses Wort völlig bedeutungslos für mich. Ich konnte Beziehungen führen. Konnte jemandem nah sein. Konnte Zuneigung empfinden. Aber ich verstand nicht, wie es ist, einen anderen Menschen über sich selbst zu stellen. Mit dich passierte das ganz von allein.</p>
            <p style="margin-top:12px;">Und weißt du, in einem bestimmten Moment ertappte ich mich bei einem seltsamen Gedanken. Ich wollte dich nicht einmal küssen. Nicht, weil ich dich nicht geliebt hätte.</p>
            <p style="margin-top:4px; font-weight: bold;">Sondern weil in mir dieses Gefühl war, dass du zu… echt bist. Zu rein. Als hätte ich gar kein Recht, das zu berühren.</p>
            <p style="margin-top:16px; color: #8c2323; font-weight: bold;">Und da verstand ich: Das sind nicht bloß Gefühle. Das ist etwas, das man mit absolut nichts anderem vergleichen kann.</p>
        ` 
    },

    // --- СТРАНИЦА 97: ПРИЧИНА 43 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 43", 
        content: `
            <p>Я люблю тебя за то, что ты становишься моей первой мыслью, когда я остаюсь один. Не потому что я специально думаю о тебе. А потому что ты просто появляешься.</p>
            <p style="margin-top:12px;">Иногда я вспоминаю наши последние разговоры. Иногда — какие-то случайные моменты. Но чаще всего — твой голос. Тот самый, когда ты только проснулась. Когда говоришь что-то тихо и ласково.</p>
            <p style="margin-top:4px;">И в эти секунды я будто выпадаю из реальности.</p>
            <p style="margin-top:16px; font-weight: bold;">И есть ещё одна мысль, которая приходит почти всегда: Как ты там? Всё ли у тебя хорошо?</p>
            <p style="margin-top:4px; color: #8c2323;">И, наверное, в этом нет ничего сложного. Просто… ты стала для меня человеком, за которого я переживаю даже в тишине.</p>
        ` 
    },

    // --- СТРАНИЦА 98: GRUND 43 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 43", 
        content: `
            <p>Ich liebe dich dafür, dass du mein erster Gedanke bist, sobald ich allein bin. Nicht, weil ich erzwinge, an dich zu denken. Sondern weil du einfach da bist.</p>
            <p style="margin-top:12px;">Manchmal erinnere ich mich an unsere letzten Gespräche. Manchmal an irgendwelche zufälligen Momente. Aber am allermeisten — an deine Stimme. Genau die, wenn du gerade erst aufgewacht bist. Wenn du etwas ganz leise und zärtlich sagst.</p>
            <p style="margin-top:4px;">Und in diesen Sekunden falle ich wie aus der Realität.</p>
            <p style="margin-top:16px; font-weight: bold;">Und es gibt noch einen Gedanken, der fast immer mitschwingt: Wie geht es dir dort? Ist bei dir alles gut?</p>
            <p style="margin-top:4px; color: #8c2323;">Und wahrscheinlich ist daran überhaupt nichts Kompliziertes. Es ist nur… du bist für mich zu dem Menschen geworden, um den ich mir selbst in der Stille Sorgen mache.</p>
        ` 
    },

    // --- СТРАНИЦА 99: ПРИЧИНА 44 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 44", 
        content: `
            <p>Я люблю тебя за то, что рядом с тобой мой мир стал настоящим.</p>
            <p style="margin-top:12px;">У меня всегда были цели. Амбиции. Мечты. Я знал, куда хочу идти. Но, если честно, без тебя это всё было как будто без жизни. Как будто я просто существую. Делаю то, что должен. Иду туда, куда «правильно». Но не живу по-настоящему.</p>
            <p style="margin-top:12px;">С тобой всё изменилось. Мечты перестали быть размытыми. Они стали чёткими. Смысл перестал быть абстрактным. Он стал личным.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Теперь это не просто путь.<br>Это путь, в конце которого я хочу увидеть тебя счастливой.</p>
        ` 
    },

    // --- СТРАНИЦА 100: GRUND 44 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 44", 
        content: `
            <p>Ich liebe dich dafür, dass an deiner Seite meine Welt endlich real geworden ist.</p>
            <p style="margin-top:12px;">Ich hatte schon immer Ziele. Ambitionen. Träume. Ich wusste genau, wo ich hinwill. Aber um ehrlich zu sein, war all das ohne dich wie ohne Leben. Als würde ich bloß existieren. Tun, was ich tun muss. Dorthin gehen, wo es „richtig“ ist. Aber nicht wirklich leben.</p>
            <p style="margin-top:12px;">Mit dir hat sich alles verändert. Die Träume sind nicht mehr verschwommen. Sie wurden glasklar. Der Sinn ist nicht mehr abstrakt. Er wurde persönlich.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Jetzt ist es nicht mehr nur ein Weg.<br>Es ist ein Weg, an dessen Ende ich dich glücklich sehen will.</p>
        ` 
    },

    // --- СТРАНИЦА 101: ПРИЧИНА 45 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 45", 
        content: `
            <p>Я люблю тебя за то, что рядом с тобой я повзрослел. Не потому что меня заставили. Не потому что «надо». А потому что внутри что-то изменилось.</p>
            <p style="margin-top:12px;">Раньше я боялся этого. Боялся ответственности. Боялся семьи. Боялся, что жизнь с кем-то — это как будто потерять свободу. Я привык всё делать сам. Никого не впускать слишком глубоко.</p>
            <p style="margin-top:12px;">Но с тобой это исчезло. Теперь я не боюсь. Теперь я хочу взять на себя больше. Твои проблемы. Будущее. Семью. И впервые это не кажется тяжестью.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И самое странное — я не чувствую, что что-то теряю. Я чувствую, что впервые по-настоящему начинаю жить.</p>
        ` 
    },

    // --- СТРАНИЦА 102: GRUND 45 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 45", 
        content: `
            <p>Ich liebe dich dafür, dass ich an deiner Seite erwachsen geworden bin. Nicht, weil man mich gezwungen hätte. Nicht, weil ich „musste“. Sondern weil sich tief in mir etwas verändert hat.</p>
            <p style="margin-top:12px;">Früher hatte ich Angst davor. Angst vor der Verantwortung. Angst vor Familie. Angst, dass ein Leben zu zweit bedeutet, meine Freiheit zu verlieren. Ich war es gewohnt, alles allein zu regeln. Niemanden zu nah an mich heranzulassen.</p>
            <p style="margin-top:12px;">Doch mit dir ist das verflogen. Jetzt habe ich keine Angst mehr. Jetzt will ich mehr auf mich nehmen. Deine Probleme. Die Zukunft. Eine Familie. Und zum ersten Mal fühlt sich das nicht wie eine Last an.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und das Seltsamste ist — ich habe nicht das Gefühl, etwas zu verlieren. Ich spüre, dass ich zum ersten Mal wirklich anfange zu leben.</p>
        ` 
    },
        // --- СТРАНИЦА 103: ПРИЧИНА 46 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 46", 
        content: `
            <p>Я люблю тебя за то, что ты разрушила мои прежние ожидания.</p>
            <p style="margin-top:12px;">До тебя я строил отношения без настоящего чувства. С холодной головой. С расчётом. Мне казалось, что так правильнее. Проще.</p>
            <p style="margin-top:12px;">Но теперь я понимаю, насколько это было далеко от правды.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">После тебя всё остальное стало казаться… плоским. Как будто в них не хватает самого главного. Жизни.</p>
        ` 
    },

    // --- СТРАНИЦА 104: GRUND 46 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 46", 
        content: `
            <p>Ich liebe dich dafür, dass du meine früheren Erwartungen zerstört hast.</p>
            <p style="margin-top:12px;">Vor dir habe ich Beziehungen geführt, ohne echte Gefühle zu investieren. Mit kühlem Kopf. Mit Kalkül. Ich dachte, so sei es richtiger. Einfacher.</p>
            <p style="margin-top:12px;">Doch jetzt verstehe ich, wie unendlich weit das von der Wahrheit entfernt war.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Nach dir beginnt alles andere flach zu wirken. Als würde darin das Wichtigste von allem fehlen. Das Leben.</p>
        ` 
    },

    // --- СТРАНИЦА 105: ПРИЧИНА 47 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 47", 
        content: `
            <p>Я люблю тебя за то, что ты открыла мне глаза. Не словами. А своим поведением.</p>
            <p style="margin-top:12px;">Рядом с тобой я увидел, как выглядит настоящая искренность. Без фильтров. Без расчёта. Без желания казаться лучше. Ты говоришь правду, потому что для тебя это правильно.</p>
            <p style="margin-top:12px;">И после этого я начал замечать другую сторону людей. Как часто за словами скрывается выгода. Как часто за вниманием есть расчёт.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я, возможно, видел это и раньше. Но только с тобой я начал это понимать.</p>
        ` 
    },

    // --- СТРАНИЦА 106: GRUND 47 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 47", 
        content: `
            <p>Ich liebe dich dafür, dass du mir die Augen geöffnet hast. Nicht mit Worten. Sondern mit deinem Wesen.</p>
            <p style="margin-top:12px;">An deiner Seite habe ich gesehen, wie echte Aufrichtigkeit aussieht. Ohne Filter. Ohne Kalkül. Ohne den Wunsch, besser wirken zu wollen. Du sagst die Wahrheit, einfach weil es für dich das Richtige ist.</p>
            <p style="margin-top:12px;">Und danach begann ich, die andere Seite der Menschen zu bemerken. Wie oft sich hinter Worten nur ein Vorteil verbirgt. Wie oft hinter Aufmerksamkeit Berechnung steckt.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich habe das vielleicht auch früher schon gesehen. Aber erst durch dich habe ich angefangen, es wirklich zu verstehen.</p>
        ` 
    },

    // --- СТРАНИЦА 107: ПРИЧИНА 48 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 48", 
        content: `
            <p>Я люблю тебя за то, что через тебя я узнал себя. Я всегда думал, что понимаю, какой я. Спокойный. Контролирующий себя. Не поддающийся эмоциям.</p>
            <p style="margin-top:12px;">Я никогда не ревновал. Мне казалось, что это слабость, которая ко мне не имеет отношения. Но с тобой всё оказалось иначе.</p>
            <p style="margin-top:12px;">Я помню тот момент. Простой. Обычный. Ты просто поставила своё фото. И вдруг во мне что-то сжалось. Настроение изменилось. Мысли стали тяжёлыми.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И тогда я впервые понял: я ревную. И это было странно. Потому что я не знал, что во мне есть это чувство. И именно ты показала мне эту часть меня.</p>
        ` 
    },

    // --- СТРАНИЦА 108: GRUND 48 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 48", 
        content: `
            <p>Ich liebe dich dafür, dass ich mich durch dich selbst kennengelernt habe. Ich dachte immer, ich wüsste genau, wer ich bin. Ruhig. Beherrscht. Unzugänglich für emotionale Ausbrüche.</p>
            <p style="margin-top:12px;">Ich war nie eifersüchtig. Es schien mir eine Schwäche zu sein, die absolut nichts mit mir zu tun hat. Doch mit dir kam alles ganz anders.</p>
            <p style="margin-top:12px;">Ich erinnere mich an diesen Moment. Ganz simpel. Ganz alltäglich. Du hast einfach ein Foto von dir hochgeladen. Und plötzlich zog sich in mir alles zusammen. Meine Stimmung kippte. Die Gedanken wurden schwer.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und da habe ich zum ersten Mal begriffen: Ich bin eifersüchtig. Und das war seltsam. Weil ich gar nicht wusste, dass dieses Gefühl in mir existiert. Und genau du hast mir diese Seite von mir gezeigt.</p>
        ` 
    },

    // --- СТРАНИЦА 109: ПРИЧИНА 49 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 49", 
        content: `
            <p>Я люблю тебя за то, что именно в страхе я нашёл свою честность. Помнишь 8 февраля? Ты в чёрном. В тех самых сапогах, которые так берегла.</p>
            <p style="margin-top:12px;">Я смотрел на тебя и чувствовал, как внутри всё начинает разрушаться... Мне никогда не было так по-настоящему страшно. Не страх показаться слабым. А страх, что если ты уйдёшь — я останусь абсолютно пустым. Будто из меня вынесут всё, что заставляло меня дышать.</p>
            <p style="margin-top:16px; font-weight: bold;">В ту секунду я понял: ты — не просто человек рядом. Ты — та единственная реальность, которую я выбрал навсегда.</p>
            <p style="margin-top:4px; color: #8c2323; font-style: italic;">Пусть другие называют это безумием. Я лучше буду «психом» с тобой, чем «нормальным» в мире, где тебя нет.</p>
        ` 
    },

    // --- СТРАНИЦА 110: GRUND 49 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 49", 
        content: `
            <p>Ich liebe dich dafür, dass ich gerade in der Angst meine Ehrlichkeit gefunden habe. Erinnerst du dich an den 8. Februar? Du ganz in Schwarz. In genau den Stiefeln, die du so sehr gehütet hast.</p>
            <p style="margin-top:12px;">Ich sah dich an und spürte, wie tief in mir alles in Scherben brach... Ich hatte noch nie solche unbändige Angst. Nicht die Angst, schwach zu wirken. Sondern die Angst, dass wenn du gehst — ich vollkommen leer zurückbleibe. Als würde man alles aus mir herausreißen, was mich überhaupt atmen lässt.</p>
            <p style="margin-top:16px; font-weight: bold;">In dieser Sekunde verstand ich: Du bist nicht nur irgendjemand an meiner Seite. Du bist die einzige Realität, die ich für immer gewählt habe.</p>
            <p style="margin-top:4px; color: #8c2323; font-style: italic;">Sollen die anderen es ruhig Wahnsinn nennen. Ich bin lieber ein „Verrückter“ mit dir, als „normal“ zu sein in einer Welt, in der es dich nicht gibt.</p>
        ` 
    },

    // --- СТРАНИЦА 111: ПРИЧИНА 50 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 50", 
        content: `
            <p>Я люблю тебя за то, что ты стала частью моего состояния. Даже когда тебя нет рядом, ты всё равно влияешь на меня.</p>
            <p style="margin-top:12px;">Иногда я просто вспоминаю тебя — и внутри становится тепло. Появляется энергия. Радость. А иногда, когда нет связи, когда я не знаю, как ты, становится тяжело. Как будто чего-то не хватает.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И потом я возвращаюсь, читаю твои сообщения, вижу, как ты думала обо мне, о нас, о будущем, и в этот момент я понимаю: расстояние ничего не меняет. Потому что ты всё равно остаёшься внутри меня.</p>
        ` 
    },

    // --- СТРАНИЦА 112: GRUND 50 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 50", 
        content: `
            <p>Ich liebe dich dafür, dass du ein Teil meines Seinszustands geworden bist. Selbst wenn du nicht in meiner Nähe bist, beeinflusst du mich.</p>
            <p style="margin-top:12px;">Manchmal erinnere ich mich einfach an dich — und in mir wird es schlagartig warm. Energie kommt auf. Freude. Und manchmal, wenn wir keinen Kontakt haben, wenn ich nicht weiß, wie es dir geht, wird es schwer. Als würde etwas Wesentliches fehlen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und dann komme ich zurück, lese deine Nachrichten, sehe, wie du an mich gedacht hast, an uns, an die Zukunft, und in genau diesem Moment begreife ich: Die Entfernung ändert rein gar nichts. Weil du ohnehin tief in mir bleibst.</p>
        ` 
    },

    // --- СТРАНИЦА 113: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 5 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 5", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Иногда даже обидно чуть чуть из за того что ты так сильно заботишься и проявляешь свою любовь всяким образом и говоришь что ты любишь больше меня, но ты даже на самую малость не представляешь что я к тебе чувствую и не могу это все обяснить или как либо показать потому что когда мы вместе и я рядом стабой я чувствую микрошок и стою как камень"
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Manchmal tut es fast ein bisschen weh, wenn ich sehe, wie rücksichtsvoll du bist, wie du mir auf jede erdenkliche Weise deine Liebe zeigst und sagst, dass du mich mehr liebst als ich dich. Denn du hast nicht den leisesten Schimmer, was ich wirklich für dich empfinde. Ich kann es einfach nicht erklären oder irgendwie zeigen… Jedes Mal, wenn wir zusammen sind und ich an deiner Seite stehe, stehe ich wie unter Schock und bin wie versteinert.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v5/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 114: ПРИЧИНА 51 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 51", 
        content: `
            <p>Я люблю тебя за то, что ты стала моей привычкой, о которой я даже не просил. Я не пытался включить тебя в свою жизнь настолько глубоко. Это произошло само.</p>
            <p style="margin-top:12px;">В какой-то момент я просто заметил, что больше не думаю один. Любая ситуация — и внутри появляется ты. Я думаю о будущем — и ты уже там, как будто всегда была. Я представляю простые вещи — разговоры, вечера, смех, даже тишину — и ты в каждом из этих моментов.</p>
            <p style="margin-top:12px;">И самое странное… раньше мне было комфортно одному. Я мог идти, слушать музыку, наслаждаться погодой и этого было достаточно.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">А сейчас — этого мало. Потому что теперь каждое чувство хочется проживать не в одиночку. А с тобой.</p>
        ` 
    },

    // --- СТРАНИЦА 115: GRUND 51 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 51", 
        content: `
            <p>Ich liebe dich dafür, dass du zu einer Gewohnheit geworden bist, um die ich nicht einmal gebeten habe. Ich habe gar nicht versucht, dich so tief in mein Leben zu integrieren. Es passierte ganz von selbst.</p>
            <p style="margin-top:12px;">Irgendwann habe ich einfach gemerkt, dass ich gedanklich nicht mehr allein bin. Egal welche Situation — sofort bist du in meinem Kopf. Ich denke an die Zukunft — und du bist schon da, als wärst du schon immer dort gewesen. Ich stelle mir die einfachsten Dinge vor — Gespräche, Abende, Lachen, selbst das Schweigen — und du bist in jedem dieser Momente.</p>
            <p style="margin-top:12px;">Und das Seltsamste ist… früher habe ich mich allein wohlgefühlt. Ich konnte spazieren gehen, Musik hören, das Wetter genießen und das war völlig genug.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Doch jetzt — reicht das nicht mehr. Weil ich jetzt jedes einzelne Gefühl nicht mehr im Alleingang durchleben will. Sondern mit dir.</p>
        ` 
    },

    // --- СТРАНИЦА 116: ПРИЧИНА 52 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 52", 
        content: `
            <p>Я люблю тебя за то, что ты показала мне доброту, которую невозможно подделать. Я никогда не забуду тот момент. Мне было настолько плохо, что я впервые в жизни почувствовал настоящую боль. Не ту, которую можно потерпеть. А ту, которая ломает тебя изнутри.</p>
            <p style="margin-top:12px;">Я был один. Без сил. Без денег. Без нормального состояния. И ты даже не знала всего. Ты просто почувствовала, что что-то не так. Ты искала меня. Переживала. И в тот момент, когда у тебя был праздник, радость, живую жизнь вокруг тебя, ты просто встала и ушла. И приехала ко мне.</p>
            <p style="margin-top:12px;">Не потому что надо. Не потому что попросили. А потому что ты не могла иначе. Ты оставила деньги, когда у меня их не было. Ты купила лекарства, которые я сам бы не смог купить.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И в тот момент я не просто увидел твою доброту. Я почувствовал её на себе. И, наверное, именно тогда я окончательно понял, какой ты человек на самом деле.</p>
        ` 
    },

    // --- СТРАНИЦА 117: GRUND 52 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 52", 
        content: `
            <p>Ich liebe dich dafür, dass du mir eine Güte gezeigt hast, die man unmöglich vortäuschen kann. Ich werde diesen Moment niemals vergessen. Es ging mir so unglaublich schlecht, dass ich zum ersten Mal in meinem Leben wahren Schmerz gespürt habe. Nicht die Art von Schmerz, die man irgendwie aushält. Sondern die, die dich von innen heraus bricht.</p>
            <p style="margin-top:12px;">Ich war allein. Ohne Kraft. Ohne Geld. In einem furchtbaren Zustand. Und du wusstest nicht einmal alles. Du hast bloß gespürt, dass etwas ganz und gar nicht stimmt. Du hast nach mir gesucht. Hast dir Sorgen gemacht. Und in genau dem Moment, als du eigentlich feiertest, Freunde und Freude um dich hattest, bist du einfach aufgestanden und gegangen. Und bist zu mir gefahren.</p>
            <p style="margin-top:12px;">Nicht, weil du musstest. Nicht, weil dich jemand darum bat. Sondern weil du gar nicht anders konntest. Du hast mir Geld dagelassen, als ich keines hatte. Du hast Medikamente gekauft, die ich mir selbst nicht hätte besorgen können.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und in diesem Augenblick habe ich deine Güte nicht nur gesehen. Ich habe sie am eigenen Leib erfahren. Und wahrscheinlich habe ich genau damals endgültig verstanden, was für ein Mensch du tief im Inneren wirklich bist.</p>
        ` 
    },

    // --- СТРАНИЦА 118: ПРИЧИНА 53 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 53", 
        content: `
            <p>Я люблю тебя за слова, которые были простыми, но остались со мной сильнее, чем многие другие. Мы сидели возле окна 9-этажного дома. Для кого-то это было бы просто глупостью. Просто выйти на девятиэтажку. Просто подростковая идея.</p>
            <p style="margin-top:12px;">Но ты посмотрела на это иначе. Ты сказала, что дело не в крыше. Не в высоте. А в том, что я увидел твоё желание и сделал это. Что кто-то бы посмеялся. Кто-то бы не понял. Кто-то бы сказал, что это глупо. А я — нет.</p>
            <p style="margin-top:12px;">И в тот момент во мне что-то поменялось. Потому что я вдруг понял: я хочу быть тем человеком, который замечает такие вещи.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Который не обесценивает чужие маленькие желания. Который делает их реальностью. И, наверное, именно тогда я впервые почувствовал, что могу быть для тебя кем-то по-настоящему важным.</p>
        ` 
    },

    // --- СТРАНИЦА 119: GRUND 53 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 53", 
        content: `
            <p>Ich liebe dich für die Worte, die so einfach waren, aber tiefer in mir nachklingen als so viele andere. Wir saßen am Fenster im 9. Stock eines Hauses. Für andere wäre das bloß eine Dummheit gewesen. Einfach in den neunten Stock zu gehen. Nur so eine Teenager-Idee.</p>
            <p style="margin-top:12px;">Aber du hast es anders betrachtet. Du hast gesagt, es geht nicht um das Dach. Nicht um die Höhe. Sondern darum, dass ich deinen Wunsch gesehen und ihn einfach erfüllt habe. Dass jemand anderes vielleicht gelacht hätte. Es nicht verstanden hätte. Gesagt hätte, es sei albern. Aber ich nicht.</p>
            <p style="margin-top:12px;">Und in diesem Moment hat sich in mir etwas verändert. Weil mir plötzlich klar wurde: Ich will genau der Mensch sein, der solche kleinen Dinge bemerkt.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Der die winzigen Wünsche des anderen niemals abwertet. Sondern sie zur Realität macht. Und wahrscheinlich habe ich genau damals zum ersten Mal gespürt, dass ich für dich jemand von echter Bedeutung sein kann.</p>
        ` 
    },

    // --- СТРАНИЦА 120: ПРИЧИНА 54 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 54", 
        content: `
            <p>Я люблю тебя за то, как ты изменила моё представление о женщинах. Раньше мне казалось, что я понимаю, кто сильнее, кто слабее. Что есть какие-то «законы», по которым устроены люди.</p>
            <p style="margin-top:12px;">Но потом я узнал тебя. И понял, что никакие представления не работают, когда сталкиваешься с реальным человеком. Ты пережила то, о чём я даже не могу говорить.</p>
            <p style="margin-top:12px;">И самое тяжёлое для меня — это осознание, что в тот момент я не был рядом. Это чувство до сих пор внутри меня. Но ещё сильнее другое: ты не сломалась. Ты живёшь. Ты радуешься. Ты умеешь любить.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И, если честно, смотря на тебя, я понял одну вещь — сила не имеет пола. Но ты для меня стала её самым настоящим примером.</p>
        ` 
    },

    // --- СТРАНИЦА 121: GRUND 54 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 54", 
        content: `
            <p>Ich liebe dich dafür, wie du meine Vorstellung von Frauen verändert hast. Früher dachte ich, ich wüsste genau, wer stark und wer schwach ist. Dass es feste „Gesetze“ gibt, nach denen Menschen funktionieren.</p>
            <p style="margin-top:12px;">Doch dann lernte ich dich kennen. Und begriff, dass all diese Vorstellungen wertlos sind, sobald man einem echten Menschen gegenübersteht. Du hast Dinge durchgestanden, über die ich nicht einmal sprechen kann.</p>
            <p style="margin-top:12px;">Und das Schwerste für mich ist die Erkenntnis, dass ich in diesem Moment nicht an deiner Seite war. Dieses Gefühl sitzt immer noch tief in mir. Aber etwas anderes ist noch viel stärker: Du bist nicht zerbrochen. Du lebst. Du kannst dich freuen. Du hast die Fähigkeit zu lieben bewahrt.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und um ehrlich zu sein, wenn ich dich ansehe, wird mir eines klar — Stärke hat kein Geschlecht. Aber für mich bist du zu ihrem wahrhaftigsten Beispiel geworden.</p>
        ` 
    },

    // --- СТРАНИЦА 122: ПРИЧИНА 55 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 55", 
        content: `
            <p>Я люблю тебя за то, что в тебе есть то, что я боюсь потерять больше всего на свете. Не внешность. Не моменты. Не даже наши воспоминания.</p>
            <p style="margin-top:12px;">Я боюсь потерять твою суть. Ту внутреннюю силу, которая делает тебя тобой. Тот стержень, который держит тебя, даже когда жизнь пытается сломать.</p>
            <p style="margin-top:12px;">И одновременно — ту маленькую, ранимую девочку внутри тебя, которая умеет любить так, как я никогда не смогу научиться. Твою нежность. Твою женственность. Твою живую, настоящую душу.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Потому что я знаю: таких людей не бывает дважды.</p>
        ` 
    },

    // --- СТРАНИЦА 123: GRUND 55 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 55", 
        content: `
            <p>Ich liebe dich, weil in dir das liegt, was ich mehr als alles andere auf der Welt zu verlieren fürchte. Nicht dein Aussehen. Nicht die Augenblicke. Nicht einmal unsere Erinnerungen.</p>
            <p style="margin-top:12px;">Ich habe Angst, deine Essenz zu verlieren. Diese innere Kraft, die dich erst zu dir macht. Diesen Kern, der dich aufrecht hält, selbst wenn das Leben versucht, dich zu brechen.</p>
            <p style="margin-top:12px;">Und gleichzeitig — das kleine, verletzliche Mädchen in dir, das auf eine Weise lieben kann, wie ich es wohl niemals lernen werde. Deine Zärtlichkeit. Deine Weiblichkeit. Deine lebendige, unverfälschte Seele.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Denn ich weiß ganz genau: Solche Menschen gibt es kein zweites Mal.</p>
        ` 
    },

    // --- СТРАНИЦА 124: ПРИЧИНА 56 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 56", 
        content: `
            <p>Я люблю тебя за то, что без той встречи я был бы человеком, которого сам бы не уважал. Я бы жил проще. Без лишних чувств. Без глубины. Без привязанности. Мне бы казалось, что это нормально. Что так и должно быть. Я бы встречался, расставался, шёл дальше, не оставляя ничего внутри.</p>
            <p style="margin-top:12px;">Но потом появилась ты. И всё это перестало иметь смысл. Потому что впервые в моей жизни появился человек, который стал для меня не просто кем-то рядом, а чем-то необходимым.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И самое странное — ты хрупкая. Маленькая. Но именно ты сломала ту часть меня, которую, как я думал, сломать невозможно. И, наверное, это лучшее, что со мной когда-либо случалось.</p>
        ` 
    },

    // --- СТРАНИЦА 125: GRUND 56 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 56", 
        content: `
            <p>Ich liebe dich dafür, dass ich ohne jene Begegnung ein Mensch geblieben wäre, den ich selbst nicht respektieren könnte. Ich hätte ein einfacheres Leben geführt. Ohne überflüssige Gefühle. Ohne Tiefgang. Ohne Bindungen. Es hätte mir normal geschienen. Als müsste es genau so sein. Ich hätte flüchtige Beziehungen gehabt, mich getrennt, wäre weitergegangen, ohne dass irgendetwas in mir zurückbleibt.</p>
            <p style="margin-top:12px;">Doch dann bist du aufgetaucht. Und all das verlor augenblicklich seinen Sinn. Weil zum ersten Mal in meinem Leben ein Mensch da war, der für mich nicht bloß irgendjemand Begleitendes wurde, sondern absolut lebensnotwendig.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und das Seltsamste ist — du bist so zierlich. So klein. Aber ausgerechnet du hast den Teil von mir aufgebrochen, von dem ich dachte, er sei absolut unbezwingbar. Und wahrscheinlich ist das das Beste, was mir je im Leben passiert ist.</p>
        ` 
    },

    // --- СТРАНИЦА 126: ПРИЧИНА 57 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 57", 
        content: `
            <p>Я люблю тебя за то, что я тебя не только люблю — я тебя уважаю. И это не про что-то одно. Это про то, какой ты человек в целом.</p>
            <p style="margin-top:8px;">Твоя сдержанность — когда ты не говоришь лишнего, даже если можешь.</p>
            <p style="margin-top:4px;">Твоя дружелюбность — которая не показная, а настоящая.</p>
            <p style="margin-top:4px;">Твоя культура — которая чувствуется в каждом твоём слове, в каждом поведении.</p>
            <p style="margin-top:4px;">Твоя целеустремлённость — когда ты просто идёшь вперёд, не делая из этого шоу.</p>
            <p style="margin-top:12px; font-weight: bold; color: #8c2323;">И самое главное — твоя человечность. Такая редкая, что иногда кажется, что её просто не бывает. Но ты есть. И именно поэтому я не просто люблю тебя. Я горжусь тобой.</p>
        ` 
    },

    // --- СТРАНИЦА 127: GRUND 57 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 57", 
        content: `
            <p>Ich liebe dich dafür, dass ich dich nicht nur liebe — ich respektiere dich zutiefst. Und das bezieht sich nicht nur auf eine Sache. Es geht darum, wer du als Mensch im Gesamten bist.</p>
            <p style="margin-top:8px;">Deine Zurückhaltung — wenn du kein Wort zu viel verlierst, selbst wenn du es könntest.</p>
            <p style="margin-top:4px;">Deine Freundlichkeit — die niemals aufgesetzt ist, sondern von Herzen kommt.</p>
            <p style="margin-top:4px;">Deine innere Kultur — die man spürt in jedem deiner Worte, in all deinem Verhalten.</p>
            <p style="margin-top:4px;">Deine Zielstrebigkeit — wenn du einfach unbeirrt vorangehst, ohne eine große Show daraus zu machen.</p>
            <p style="margin-top:12px; font-weight: bold; color: #8c2323;">Und das Wichtigste von allem — Deine Menschlichkeit. Sie ist so selten, dass man manchmal glaubt, es gäbe sie gar nicht mehr. Aber du existierst. Und genau deshalb liebe ich dich nicht nur. Ich bin unglaublich stolz auf dich.</p>
        ` 
    },

    // --- СТРАНИЦА 128: ПРИЧИНА 58 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 58", 
        content: `
            <p>Я люблю тебя за то, что ты изменила смысл моих мечт. Раньше я мечтал один. Я всегда говорил себе: я добьюсь всего, не важно — будет рядом кто-то или нет. Если человек рядом — он должен просто не мешать. Так я думал.</p>
            <p style="margin-top:12px;">Но потом появилась ты. И я впервые начал мечтать вместе. Мы говорим о будущем, строим планы, думаем, как будем всего добиваться. И в какой-то момент я заметил одну вещь — ты ставишь мои мечты выше своих. И это ломает меня.</p>
            <p style="margin-top:12px;">Потому что внутри у меня происходит наоборот: я начинаю ставить твои мечты выше своих. И тогда мои цели перестают быть просто целями. Они становятся путём к тому, чтобы дать тебе жизнь, которую ты заслуживаешь.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И самое главное — теперь я не могу представить ни одной своей мечты без тебя. Потому что без тебя они снова становятся пустыми.</p>
        ` 
    },

    // --- СТРАНИЦА 129: GRUND 58 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 58", 
        content: `
            <p>Ich liebe dich dafür, dass du den Sinn meiner Träume verändert hast. Früher habe ich allein geträumt. Ich habe mir immer gesagt: Ich werde alles erreichen, völlig egal, ob jemand an meiner Seite ist oder nicht. Wenn jemand da ist — soll er mich einfach nur nicht aufhalten. So dachte ich damals.</p>
            <p style="margin-top:12px;">Doch dann kamst du. Und ich habe zum ersten Mal begonnen, gemeinsam zu träumen. Wir sprechen über die Zukunft, schmieden Pläne, überlegen, wie wir alles zusammen anpacken. Und an einem bestimmten Punkt habe ich etwas bemerkt — du stellst meine Träume über deine eigenen. Und das rührt mich zutiefst.</p>
            <p style="margin-top:12px;">Weil in meinem Inneren genau das Gegenteil passiert: Ich fange an, deine Träume über meine zu stellen. Und so hören meine Ziele auf, bloße Meilensteine zu sein. Sie werden zu dem Weg, der darauf abzielt, dir das Leben zu ermöglichen, das du so sehr verdienst.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und das Schönste daran — ich kann mir heute keinen einzigen Traum mehr ohne dich vorstellen. Weil sie ohne dich sofort wieder vollkommen leer wären.</p>
        ` 
    },

    // --- СТРАНИЦА 130: ПРИЧИНА 59 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 59", 
        content: `
            <p>Я люблю тебя за то, что с тобой любовь перестала быть чем-то из фильмов.</p>
            <p style="margin-top:12px;">В детстве я смотрел на эти истории и думал: неужели так бывает в жизни? Когда сложно. Когда больно. Когда не сразу. Но когда всё равно — друг к другу. И я хотел именно так. Не легко. А по-настоящему.</p>
            <p style="margin-top:12px;">И потом появилась ты. И мы потеряли друг друга. На годы. И снова нашли.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">И я понял одну вещь — это не фильм. Это жизнь.<br>И в ней ты — моя самая настоящая история любви.</p>
        ` 
    },

    // --- СТРАНИЦА 131: GRUND 59 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 59", 
        content: `
            <p>Ich liebe dich dafür, dass die Liebe durch dich aufgehört hat, nur etwas aus Filmen zu sein.</p>
            <p style="margin-top:12px;">Als Kind sah ich diese Geschichten und dachte: Gibt es das wirklich im echten Leben? Wenn es kompliziert ist. Wenn es wehtut. Wenn es nicht auf Anhieb klappt. Aber wenn man trotzdem — unaufhaltsam zueinander findet. Und genau so eine Liebe wollte ich. Nicht leicht. Sondern echt.</p>
            <p style="margin-top:12px;">Und dann bist du aufgetaucht. Und wir haben uns verloren. Für Jahre. Und haben uns wiedergefunden.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323; text-align: center;">Da habe ich eines verstanden — das ist kein Film. Das ist das wahre Leben.<br>Und darin bist du — meine allerschönste, echte Liebesgeschichte.</p>
        ` 
    },

    // --- СТРАНИЦА 132: ПРИЧИНА 60 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 60", 
        content: `
            <p style="font-weight: bold; color: #8c2323; margin-bottom: 10px;">Я люблю тебя за то, что с тобой я снова стал живым.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify;">Потому что я уже знаю, что значит жить без тебя. И это не громкие слова. Это не страх «а вдруг». Это то, через что я уже прошёл. Я уже терял тебя. На годы. И вместе с тобой я потерял себя. Не сразу. Не в один момент. Это происходило медленно. Сначала просто стало тише внутри. Потом — пустее. Потом я перестал чувствовать то, что раньше было естественным.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px;">Я общался с людьми, встречался, улыбался — но внутри не было ничего настоящего. Как будто всё происходило не со мной. Я мог быть рядом с кем-то, но не мог быть по-настоящему с человеком. Я не умел отдавать. Не умел чувствовать глубину. И самое страшное — со временем это перестало казаться проблемой. Я привык к этому состоянию. Привык быть холодным. Привык не чувствовать. Привык жить без смысла, просто двигаясь вперёд по инерции. И где-то внутри я уже почти принял, что таким и останусь.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px;">Пока снова не появилась ты. И в тот момент, когда я тебя поцеловал — во мне будто что-то вернулось на место. Я не смог это объяснить. Я даже не сразу понял, что именно происходит. Но я почувствовал — я снова живой. В ту ночь я не спал. А на следующий день во мне было столько эмоций, что я просто не смог их удержать.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px; font-weight: bold;">И тогда я понял простую вещь — это не просто любовь. Это возвращение к себе. С тобой я снова чувствую. Снова думаю иначе. Снова вижу смысл. Снова становлюсь тем, кем я должен быть.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px; color: #8c2323;">И именно поэтому я боюсь потерять тебя. Не потому что мне будет плохо. А потому что я уже знаю, во что превращается моя жизнь без тебя. И если это повторится — я не уверен, что смогу снова вернуться. Потому что в тот раз я почти потерял себя полностью. А второй раз может уже не оставить ничего, к чему можно вернуться. И, возможно, самое честное, что я могу сказать — с тобой я не просто счастлив. С тобой я настоящий.</p>
        ` 
    },

    // --- СТРАНИЦА 133: GRUND 60 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 60", 
        content: `
            <p style="font-weight: bold; color: #8c2323; margin-bottom: 10px;">Ich liebe dich dafür, dass ich an deiner Seite wieder lebendig wurde.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify;">Weil ich bereits weiß, was es heißt, ohne dich zu existieren. Und das sind keine dramatischen Worte. Das ist nicht die bloße Angst vor dem „Was wäre wenn“. Es ist etwas, das ich schon am eigenen Leib erfahren habe. Ich habe dich schon einmal verloren. Für Jahre. Und zusammen mit dir habe ich mich selbst verloren. Nicht sofort. Nicht von jetzt auf gleich. Es geschah schleichend. Zuerst wurde es einfach stiller in mir. Dann — leerer. Schließlich hörte ich auf, das zu fühlen, was früher ganz natürlich war.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px;">Ich umgab mich mit Menschen, traf mich mit ihnen, lächelte — doch in meinem Inneren war absolut nichts mehr echt. Als würde all das gar nicht mir passieren. Ich konnte physisch neben jemandem sein, aber ich konnte mich emotional nicht auf einen Menschen einlassen. Ich verlernte es zu geben. Verlernte es, Tiefe zu spüren. Und das Erschreckendste war — mit der Zeit fühlte sich das nicht einmal mehr wie ein Problem an. Ich gewöhnte mich an diesen Zustand. Gewöhnte mich daran, kalt zu sein. Gewöhnte mich ans Nichtfühlen. Gewöhnte mich daran, ohne Sinn zu existieren, indem ich mich einfach aus reiner Trägheit vorwärtsbewegte. Und irgendwo tief in mir hatte ich mich fast schon damit abgefunden, für immer so zu bleiben.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px;">Bis du wieder in mein Leben tratst. Und in genau dem Moment, als ich dich küsste — war es, als würde in mir schlagartig etwas an seinen rechten Platz rücken. Ich konnte es mir nicht erklären. Ich habe nicht einmal sofort begriffen, was da eigentlich mit mir geschah. Aber ich fühlte — ich lebe wieder. In jener Nacht habe ich kein Auge zugetan. Und am nächsten Tag brachen so viele Emotionen über mir zusammen, dass ich sie einfach nicht mehr zurückhalten konnte.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px; font-weight: bold;">Und da verstand eine ganz einfache Sache — das ist nicht nur Liebe. Das ist meine Rückkehr zu mir selbst. Mit dir kann ich wieder fühlen. Denke wieder völlig anders. Sehe wieder einen Sinn. Werde wieder zu dem Mann, der ich eigentlich sein sollte.</p>
            <p style="font-size: 14px; line-height: 1.5; text-align: justify; margin-top: 8px; color: #8c2323;">Und genau deshalb habe ich so unendliche Angst, dich zu verlieren. Nicht, weil es mir danach schlecht ginge. Sondern weil ich bereits weiß, worin sich mein Leben ohne dich verwandelt. Und sollte sich das wiederholen — bin ich mir nicht sicher, ob ich jemals wieder zurückkehren könnte. Denn beim letzten Mal hätte ich mich schon fast vollkommen selbst verloren. Ein zweites Mal lässt mir vielleicht überhaupt nichts mehr übrig, zu dem man überhaupt noch zurückkehren kann. Und das Ehrlichste, was ich dir wohl sagen kann, ist: Mit dir bin ich nicht einfach nur glücklich. Mit dir bin ich endlich ich selbst.</p>
        ` 
    },

    // --- СТРАНИЦА 134: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 6 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 6", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Иногда я спрашиваю тебя любишь ли меня, не из за нехватки внимания, а за то что я все еще не могу поверить что именно ты, тот самый Тимур которого я потеряла любит меня, это как заветный сон и иногда кажется что я вот вот проснусь."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 25px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Wenn ich dich manchmal frage, ob du mich liebst, dann nicht, weil es mir an Aufmerksamkeit fehlt. Sondern weil ich es immer noch nicht fassen kann, dass genau du — der Timur, den ich einst verloren geglaubt hatte — mich liebst. Es ist wie ein wunderschöner Traum, und manchmal habe ich Angst, gleich aufzuwachen.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v6/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 135: ТИТУЛ ЭТАПА 4 (RU) ---
    { 
        type: "title", 
        lang: "ru",
        title: "ЭТАП 4", 
        subtitle: "ЗА ТО, ЧТО МЫ ПЕРЕЖИЛИ",
        content: `
            <p style="font-style: italic; text-align: justify; line-height: 1.6;">Любовь проверяется не красивыми словами и не счастливыми днями, настоящая любовь раскрывается через время.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">Через случайные моменты, которые почему-то навсегда остаются в памяти, через встречи, после которых мир уже никогда не становится прежним, через ошибки, ссоры, расставания, ожидание и страх потерять друг друга.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">Через тысячи маленьких деталей, которые по отдельности кажутся обычными, но вместе складываются в целую жизнь. Когда я вспоминаю нашу историю, я понимаю: самое ценное в ней — не какой-то один великий момент, самое ценное — это путь, который мы прошли.</p>
            <p style="margin-top: 12px; font-weight: bold; color: #8c2323; text-align: justify; line-height: 1.6;">Путь длиной в годы, путь через радость и боль, через расстояние, которое не смогло нас разлучить, и через испытания, которые не смогли нас сломать.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">И поэтому этот этап — о воспоминаниях, о моментах, которые навсегда стали частью нас, и о событиях, благодаря которым наша любовь стала именно такой, какой она является сегодня. За то, что мы пережили.</p>
        ` 
    },

    // --- СТРАНИЦА 136: TITEL ETAPPE 4 (DE) ---
    { 
        type: "title", 
        lang: "de",
        title: "ETAPPE 4", 
        subtitle: "FÜR ALLES, WAS WIR DURCHGESTANDEN HABEN",
        content: `
            <p style="font-style: italic; text-align: justify; line-height: 1.6;">Liebe wird nicht an schönen Worten oder glücklichen Tagen gemessen, die wahre Liebe offenbart sich erst durch die Zeit.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">Durch zufällige Momente, die aus irgendeinem Grund für immer im Gedächtnis bleiben, durch Begegnungen, nach denen die Welt nie wieder dieselbe sein wird, durch Fehler, Streits, Trennungen, das Warten und die Angst, einander zu verlieren.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">Durch Tausende von kleinen Details, die einzeln betrachtet ganz gewöhnlich erscheinen, sich aber zusammen zu einem ganzen Leben fügen. Wenn ich an unsere Geschichte zurückdenke, verstehe ich: Das Wertvollste an ihr ist nicht ein einzelner, glanzvoller Moment, das Wertvollste ist der Weg, den wir gemeinsam gegangen sind.</p>
            <p style="margin-top: 12px; font-weight: bold; color: #8c2323; text-align: justify; line-height: 1.6;">Ein Weg über Jahre hinweg, ein Weg durch Freude und Schmerz, durch Entfernungen, die uns nicht trennen konnten, und durch Prüfungen, die uns nicht zu brechen vermochten.</p>
            <p style="margin-top: 12px; text-align: justify; line-height: 1.6;">Und genau deshalb handelt diese Etappe von Erinnerungen, von Momenten, die für immer ein Teil von uns geworden sind, und von Ereignissen, dank derer unsere Liebe genau zu dem wurde, was sie heute ist. Für alles, was wir durchgestanden haben.</p>
        ` 
    },

    // --- СТРАНИЦА 137: ПРИЧИНА 61 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 61", 
        content: `
            <p>Я люблю тебя за твои моменты ревности, о которых я вспоминаю и невольно улыбаюсь. Помнишь школу? Ты обиделась на меня и включила полный игнор. Я обратился раза два-три — в ответ тишина. Тогда я пересел на другую парту, повернулся к одной девушке и начал шутить. Так, чтобы краем глаза видеть тебя. Ты делала вид, что не замечаешь. Но потом я поймал твой взгляд. Злостный. Пристальный. Который буквально прорубил меня насквозь.</p>
            <p style="margin-top:12px;">Я вернулся, сел рядом, попытался заговорить — опять ноль реакции. И тут пришла училка, нужно было писать текст. Я нежным тоном попросил девушку спереди помочь мне с тетрадью. И очень добро ей улыбнулся. Она только протянула руки… как ты резко сорвала мою тетрадку. И с самым злым лицом на свете начала писать сама.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">А потом ещё и пнула меня под столом: «Обязательно кого-то просить? Что, у самого руки сломаны?» Я так смеялся тогда. И именно в этой твоей забавной злости я видел твою самую настоящую любовь. Я понимал, что уже тогда, в школьные годы, я был для тебя особенным.</p>
        ` 
    },

    // --- СТРАНИЦА 138: GRUND 61 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 61", 
        content: `
            <p>Ich liebe dich für deine Momente der Eifersucht, an die ich mich erinnere und unwillkürlich lächeln muss. Weißt du noch, in der Schule? Du warst beleidigt und hast mich komplett ignoriert. Ich habe versucht, zwei- oder dreimal mit dir zu reden – nur Stille. Da setzte ich mich an einen anderen Tisch, drehte mich zu einem Mädchen und fing an zu scherzen. So, dass ich dich aus dem Augenwinkel sehen konnte. Du tatest so, als würdest du es nicht bemerken. Aber dann fing ich deinen Blick auf. Wütend. Starrend. Er hat mich förmlich durchbohrt.</p>
            <p style="margin-top:12px;">Ich kam zurück, setzte mich neben dich, wollte reden – wieder keine Reaktion. Dann kam die Lehrerin und wir mussten einen Text schreiben. Mit sanfter voice bat ich das Mädchen vor mir, mir mit dem Heft zu helfen. Und lächelte sie ganz lieb an. Sie streckte gerade ihre Hände aus… als du mir mein Heft grob wegrissest. Und mit dem wütendsten Gesicht der Welt selbst anfingst zu schreiben.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und dann hast du mich unter dem Tisch getreten: „Musst du unbedingt jemanden fragen? Was, sind deine eigenen Hände etwa gebrochen?“ Ich habe damals so gelacht. Und genau in dieser süßen Wut von dir sah ich deine wahrste Liebe. Ich verstand, dass ich schon damals, in der Schulzeit, etwas Besonderes für dich war.</p>
        ` 
    },

    // --- СТРАНИЦА 139: ПРИЧИНА 62 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 62", 
        content: `
            <p>Я люблю тебя за тот день, который сначала казался самым обычным, но стал для меня особенным на всю жизнь. Я уехал на велике к дедушке, очень далеко. Там он сломался, и мы чинили его целых три дня. На третий день я, как обычно, переписывался с тобой. Ты была на курсах немецкого, а школа как раз находилась рядом с домом дедушки. Я написал, что хочу увидеть тебя перед тем, как уехать домой. Ты ответила: «Нет, не хочу и не могу».</p>
            <p style="margin-top:12px;">Я сказал: «Ладно, мой путь всё равно лежит через эту школу». И написал, что выезжаю через две минуты. И вдруг от тебя приходит сообщение: «Ладно, приходи, у меня урок через 20 минут, я пришла пораньше». Это была наша первая встреча вне школы. Мы стояли, смеялись. У меня с собой было две шоколадки. Я достал одну и протянул тебе, но ты наотрез отказалась.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я не стал уговаривать, сказал «ок» и сам её съел, глядя на тебя. Ты сначала делала вид, что ничего не произошло. Но я улыбнулся, достал вторую шоколадку и протянул тебе. И ты сказала: «Я думала, какой же ты гадёныш всё-таки! Ладно, девочка отказывается, просто стесняется, наверное, думала, попозже дашь… нет, он сам схавал мою шоколадку! Дай хоть вторую». Ты забрала её, открыла и начала есть. А я так сильно смеялся тогда. И этот простой, казалось бы, день я не забуду уже никогда.</p>
        ` 
    },

    // --- СТРАНИЦА 140: GRUND 62 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 62", 
        content: `
            <p>Ich liebe dich für diesen Tag, der zuerst wie ein ganz gewöhnlicher Tag schien, aber für den Rest meines Lebens so besonders wurde. Ich war mit dem Fahrrad zu meinem Opa gefallen, sehr weit weg. Dort ging es kaputt, und wir reparierten es ganze drei Tage lang. Am dritten Tag schrieb ich wie gewohnt mit dir. Du warst bei deinem Deutschkurs, und die Schule lag zufällig ganz in der Nähe von Opas Haus. Ich schrieb dir, dass ich dich sehen will, bevor ich nach Hause fahre. Du antwortetest: „Nein, ich will nicht und ich kann nicht.“</p>
            <p style="margin-top:12px;">Ich sagte: „Na gut, mein Weg führt sowieso an dieser Schule vorbei.“ Und ich schrieb, dass ich in zwei Minuten losfahre. Und plötzlich kam eine Nachricht von dir: „Na gut, komm vorbei, mein Unterricht fängt in 20 Minuten an, ich bin früher da.“ Das war unser erstes Treffen außerhalb der Schule. Wir standen da und lachten. Ich hatte zwei Schokoriegel dabei. Ich holte einen heraus und reichte ihn dir, aber du hast rigoros abgelehnt.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich habe nicht weiter nachgefragt, sagte „Ok“ und aß ihn selbst, während ich dich ansah. Du tatest zuerst so, als wäre nichts passiert. Aber ich lächelte, holte den zweiten Schokoriegel heraus und reichte ihn dir. Und du sagtest: „Ich dachte schon, was für ein Mistkerl du doch bist! Na gut, ein Mädchen lehnt ab, weil sie schüchtern ist, dachte ich, du gibst ihn mir später… nein, er hat meine Schokolade einfach selbst gefressen! Gib wenigstens die zweite.“ Du hast sie mir weggenommen, aufgemacht und angefangen zu essen. Und ich habe damals so laut gelacht. Und diesen eigentlich so einfachen Tag werde ich wohl nie wieder vergessen.</p>
        ` 
    },

    // --- СТРАНИЦА 141: ПРИЧИНА 63 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 63", 
        content: `
            <p>Я люблю тебя за тот день, когда я впервые почувствовал нас по-настоящему. Без масок и ролей. Это было 27 декабря, в наш последний год школы. Один день до того, как мы попрощались на годы. Вечером класс собирался у бабушки одноклассницы, но перед этим я позвал тебя в кафе. Это было наше первое настоящее свидание в кафе. Ты не ждала этого, а я просто хотел побыть с тобой подольше.</p>
            <p style="margin-top:12px;">И в тот день ты дала волю своим чувствам. Ты больше не играла роль сильной и недоступной, ты была моей. Вокруг было много людей, было шумно, но мы были вместе всегда и везде. Мы оба знали, что завтра ты уезжаешь, и что следующего шанса может больше не быть. Поэтому ты хотела прожить этот день на максимум. Ты говорила всё, что думаешь. Делала всё, что хочешь. Держала меня за руку и сидела рядом.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">А когда мы ехали домой, ты сама сжала мою ладонь, прижалась и тихо прошептала мне на ушко, что такой теплоты никогда в жизни ни с кем не чувствовала. У меня не хватит всех слов в мире, чтобы описать, что произошло со мной в ту секунду. Но именно тогда я понял, что такое быть по-настоящему счастливым.</p>
        ` 
    },

    // --- СТРАНИЦА 142: GRUND 63 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 63", 
        content: `
            <p>Ich liebe dich für diesen einen Tag, an dem ich uns zum ersten Mal ganz echt gefühlt habe. Ohne Masken und Rollen. Es war der 27. Dezember, in unserem letzten Schuljahr. Ein Tag, bevor wir uns für Jahre verabschieden mussten. Am Abend traf sich die Klasse bei der Oma einer Mitschülerin, aber davor habe ich dich in ein Café eingeladen. Das war unser erstes richtiges Date in einem Café. Du hast es nicht erwartet, und ich wollte einfach nur länger mit dir zusammen sein.</p>
            <p style="margin-top:12px;">Und an diesem Tag hast du deinen Gefühlen freien Lauf gelassen. Du hast nicht mehr die Rolle der Starken und Unnahbaren gespielt, du warst mein. Um uns herum waren viele Leute, es war laut, aber wir waren immer und überall zusammen. Wir beide wussten, dass du morgen wegfährst, und dass es eine nächste Chance vielleicht nie wieder geben würde. Deshalb wolltest du diesen Tag in vollen Zügen leben. Du hast gesagt, was du denkst. Getan, was du willst. Hast meine Hand gehalten und saßt ganz nah bei mir.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und als wir nach Hause fuhren, hast du selbst meine Hand gedrückt, hast dich an mich gedrückt und mir leise ins Ohr geflüstert, dass du so eine Wärme noch nie im Leben bei jemandem gespürt hast. Mir fehlen alle Worte dieser Welt, um zu beschreiben, was in dieser Sekunde mit mir geschah. Aber genau da habe ich verstanden, was es heißt, unendlich glücklich zu sein.</p>
        ` 
    },

    // --- СТРАНИЦА 143: ПРИЧИНА 64 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 64", 
        content: `
            <p>Я люблю тебя за то особенное чувство, когда нам хорошо вместе вообще без всякой причины. Оно появилось ещё в школе, когда я просто провожал тебя домой после немецкого. Мы шли рядом, и в какой-то момент я поймал себя на мысли: нам не обязательно бесконечно признаваться в любви, не обязательно говорить громкие слова или делать что-то особое. Нам просто хорошо в этой тишине.</p>
            <p style="margin-top:12px;">У нас одинаковое чувство юмора. Похожие интересы. И способность понимать друг друга с полуслова. Когда мы снова встретились через годы, мы оба осознали, насколько дорогого это стоит. И что именно это мы безуспешно искали всё то время, что были не вместе.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я понял, что родная душа — это важнее всего на свете. Потому что сколько бы людей ни было вокруг, какими бы шумными ни были компании, без своего человека ты всё равно остаёшься абсолютно один. А с тобой одиночество просто исчезает. И мир вокруг становится спокойным и правильным.</p>
        ` 
    },

    // --- СТРАНИЦА 144: GRUND 64 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 64", 
        content: `
            <p>Ich liebe dich für dieses ganz besondere Gefühl, wenn es uns einfach so und ohne jeden Grund zusammen gut geht. Es entstand noch in der Schulzeit, als ich dich nach dem Deutschkurs einfach nach Hause brachte. Wir gingen nebeneinander her, und in einem Moment ertappte ich mich bei dem Gedanken: Wir müssen uns nicht endlos unsere Liebe gestehen, wir müssen keine lauten Worte sagen oder etwas Besonderes tun. Es ist uns einfach gut in dieser Stille.</p>
            <p style="margin-top:12px;">Wir haben denselben Sinn für Humor. Ähnliche Interessen. Und die Fähigkeit, uns ohne große Worte zu verstehen. Als wir uns nach Jahren wiedergetroffen haben, wurde uns beiden klar, wie unglaublich kostbar das ist. Und dass es genau das war, wonach wir all die Zeit, in der wir getrennt waren, vergeblich gesucht hatten.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich habe verstanden, dass ein Seelenverwandter das Wichtigste auf der Welt ist. Denn egal wie viele Menschen um einen herum sind, egal wie laut die Gesellschaft ist, ohne seinen Menschen bleibt man am Ende doch absolut allein. Aber mit dir verschwindet die Einsamkeit einfach. Und die Welt um uns herum wird still und genau so, wie sie sein soll.</p>
        ` 
    },

    // --- СТРАНИЦА 145: ПРИЧИНА 65 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 65", 
        content: `
            <p>Я люблю тебя за тот самый момент, когда я посмотрел на тебя и понял: «вот она, моя жизнь». Это было 13 января. Наша самая первая встреча после долгой разлуки. Ты, как обычно, сначала отказалась, но на следующий день написала, что будешь проходить мимо и мы можем увидеться. Меня потом сильно поругали за то, что я ушёл, но это было уже не важно. Потому что когда я увидел тебя, я был полностью ошарашен. Внутри поднялась такая буря смешанных эмоций, что я перестал соображать.</p>
            <p style="margin-top:12px;">Я будто одновременно вернулся в школу, где я — тот самый Тимур, а ты — та самая девочка, и в то же время я понимал, что сейчас ты не моя, что ты в других отношениях. Всё смешалось. Но именно в ту секунду произошло моё перерождение. Как феникс. Мои чувства буквально перезагрузились, и я снова начал жить. После этой встречи я сидел три часа в абсолютной тишине и ни с кем не мог говорить. Меня бросало то в пот, то в холод, а в голове был полный бардак. А потом я посмотрел по сторонам и увидел, что мир вокруг раскрасился другими красками. Моё восприятие реальности изменилось навсегда.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И тогда у меня в голове осталась только одна, самая страшная мысль: «Неужели я всю жизнь буду любить одну тебя, а жить с другой? Неужели в старости я буду сидеть на скамейке, смотреть на закат и вспоминать эти глаза… глаза моей первой и единственной любви?» И именно этот страх заставил меня понять, что я никогда и ни за что тебя не отпущу.</p>
        ` 
    },

    // --- СТРАНИЦА 146: GRUND 65 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 65", 
        content: `
            <p>Ich liebe dich für diesen einen Moment, als ich dich ansah und begriff: „Das hier ist mein Leben.“ Es war der 13. Januar. Unser allererstes Treffen nach der langen Trennung. Du hast wie gewohnt zuerst abgesagt, aber am nächsten Tag geschrieben, dass du in der Nähe vorbeikommst und wir uns sehen können. Ich bekam danach richtig Ärger, weil ich einfach weggegangen war, aber das war mir egal. Denn als ich dich sah, war ich völlig fassungslos. In mir zog ein solcher Sturm aus gemischten Gefühlen auf, dass ich nicht mehr klar denken konnte.</p>
            <p style="margin-top:12px;">Es war, als wäre ich gleichzeitig zurück in der Schule, wo ich der Timur von damals bin und du das Mädchen von damals, und doch wusste ich, dass du jetzt nicht mein bist, dass du in einer anderen Beziehung steckst. Alles vermischte sich. Aber genau in dieser Sekunde wurde ich wiedergeboren. Wie ein Phönix. Meine Gefühle haben sich buchstäblich neu gestartet, und ich begann wieder zu leben. Nach diesem Treffen saß ich drei Stunden lang in absoluter Stille und konnte mit niemandem reden. Mir wurde abwechselnd heiß und kalt, und in meinem Kopf herrschte pures Chaos. Und dann sah ich mich um und bemerkte, dass die Welt um mich herum plötzlich in ganz anderen Farben leuchtete. Meine Wahrnehmung der Realität hatte sich für immer verändert.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und in diesem Moment blieb mir nur ein einziger, schmerzhafter Gedanke im Kopf hängen: „Werde ich wirklich mein ganzes Leben lang nur dich lieben, aber mit einer anderen leben? Werde ich als alter Mann auf einer Bank sitzen, in den Abendhimmel schauen und mich an diese Augen erinnern… die Augen meiner ersten und einzigen Liebe?“ Und genau diese Angst hat mir klar gemacht, dass ich dich niemals und um keinen Preis der Welt wieder gehen lassen werde.</p>
        ` 
    },
        // --- СТРАНИЦА 147: ПРИЧИНА 66 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 66", 
        content: `
            <p>Я люблю тебя за то, что мы смогли пройти через разлуку длиной в 6 лет и 14 дней. Тогда, в школе, мы были детьми. Наша гордость, детские убеждения и сложные характеры привели к разрыву. И самое больное — между нами осталось глупое недопонимание. Только сейчас, в наших разговорах, я узнал, что ты всё это время думала, будто я просто отказался от тебя. Хотя я только и делал, что пытался тебя удержать.</p>
            <p style="margin-top:10px;">Все эти годы мы искали друг друга в других людях. Пытались жить дальше, носили маски. Ты два года провела в отношениях с абсолютно чужим человеком. А я встречался с другими, и в какой-то момент готов был жениться только ради одной причины — ради мамы. Она видела мою холодность и со слезами спрашивала, почему я не умею любить. А я врал, что у меня просто такой характер. Я не мог сказать ей, что моё сердце осталось там, в школе, рядом с тобой.</p>
            <p style="margin-top:10px; font-weight: bold; color: #8c2323;">Но сейчас, когда мы снова вместе, я вижу во всём этом высший замысел. Всё произошло по воле Аллаха.</p>
            <p style="margin-top:10px;">Тогда мы просто были слишком незрелыми для такого большого чувства. Нам нужно было пройти через этот ад, чтобы повзрослеть. И теперь, выдержав всё это, мы наконец-то готовы. Теперь мы по-настоящему ценим друг друга и знаем цену нашей любви.</p>
        ` 
    },

    // --- СТРАНИЦА 148: GRUND 66 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 66", 
        content: `
            <p>Ich liebe dich dafür, dass wir es geschafft haben, durch eine Trennung von 6 Jahren und 14 Tagen zu gehen. Damals, in der Schule, waren wir noch Kinder. Unser Stolz, unsere kindlichen Überzeugungen und schwierigen Charaktere führten zum Bruch. Und das Schmerzhafteste war, dass ein dummes Missverständnis zwischen uns blieb. Erst jetzt, in unseren Gesprächen, habe ich erfahren, dass du all die Zeit dachtest, ich hätte dich einfach aufgegeben. Dabei habe ich nichts anderes getan, als zu versuchen, dich zu halten.</p>
            <p style="margin-top:10px;">All die Jahre haben wir in anderen Menschen nacheinander gesucht. Wir versuchten weiterzuleben, trugen Masken. Du hast zwei Jahre in einer Beziehung mit einem absolut fremden und falschen Menschen verbracht. Und ich traf mich mit anderen Mädchen und war an einem Punkt bereit, nur aus einem einzigen Grund zu heiraten – für meine Mutter. Sie sah meine Kälte und fragte mich unter Tränen, warum ich nicht lieben kann. Und ich log, dass ich einfach so einen Charakter hätte. Ich konnte ihr nicht sagen, dass mein Herz dort geblieben war, in der Schule, an deiner Seite.</p>
            <p style="margin-top:10px; font-weight: bold; color: #8c2323;">Aber jetzt, wo wir wieder zusammen sind, sehe ich in all dem einen höheren Plan. Alles geschah nach dem Willen Allahs.</p>
            <p style="margin-top:10px;">Damals waren wir einfach zu unreif für ein so großes Gefühl. Wir mussten durch diese Hölle gehen, um erwachsen zu werden. Und jetzt, nachdem wir das alles überstanden haben, sind wir endlich bereit. Jetzt wissen wir einander wirklich zu schätzen. Und wir kennen den wahren Preis unserer Liebe.</p>
        ` 
    },

    // --- СТРАНИЦА 149: ПРИЧИНА 67 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 67", 
        content: `
            <p>Я люблю тебя за тот момент, когда я почувствовал твою поддержку без единого слова. Это было недавно, когда я вышел в увольнение. Мы сидели вместе, и я впервые открылся тебе. Рассказал о том, какая у меня была сложная жизнь. Через что пришлось пройти моей маме, какая она у меня сильная. Это всё слишком тяжело, через такое могут пройти далеко не все.</p>
            <p style="margin-top:12px;">И пока я всё это рассказывал… у меня подступили слёзы. Ты увидела это. И не стала говорить банальных фраз. Ты просто заплакала вместе со мной. И крепко взяла меня за руку. В абсолютной тишине.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И именно в эту секунду, чувствуя тепло твоей ладони, я впервые в жизни осознал: я больше не один. Мне больше не нужно вывозить всё в одиночку. Потому что теперь у меня есть ты.</p>
        ` 
    },

    // --- СТРАНИЦА 150: GRUND 67 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 67", 
        content: `
            <p>Ich liebe dich für diesen Moment, als ich deine Unterstützung gespürt habe, ohne dass du ein einziges Wort gesagt hast. Es war vor Kurzem, als ich Ausgang hatte. Wir saßen zusammen, und ich habe mich dir zum ersten Mal so richtig geöffnet. Ich erzählte dir, wie schwer mein Leben war. Was meine Mutter alles durchstehen musste und wie stark sie ist. Das alles ist so unendlich schwer, nicht jeder würde das durchstehen.</p>
            <p style="margin-top:12px;">Und während ich das alles erzählte… kamen mir die Tränen. Du hast es gesehen. Und du hast keine banalen Worte gesagt. Du hast einfach mit mir geweint. Und hast ganz fest meine Hand genommen. In absoluter Stille.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und genau in dieser Sekunde, als ich die Wärme deiner Hand spürte, wurde mir zum ersten Mal im Leben klar: Ich bin nicht mehr allein. Ich muss das alles nicht mehr ganz alleine durchstehen. Weil ich jetzt dich habe.</p>
        ` 
    },

    // --- СТРАНИЦА 151: ПРИЧИНА 68 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 68", 
        content: `
            <p>Я люблю тебя за нашу невероятную искренность, из-за которой я бы хотел переживать один тяжёлый разговор снова. Наш последний разговор шесть лет назад, перед самой разлукой. Это был самый грустный момент, но именно поэтому мы были максимально честными друг с другом. По-настоящему. Без масок.</p>
            <p style="margin-top:12px;">Если думать с точки зрения тоски — я не хочу возвращаться туда, это было слишком тяжело и больно. Но теперь, когда ты наконец-то моя, когда я могу смотреть на то прошлое с холодной головой, я ловлю себя на мысли, что повторил бы тот день. Я бы снова прожил тот наш разговор от начала и до конца.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Только теперь, зная всё, что нас ждёт впереди, я бы обязательно добавил от себя кое-что важное. Я бы крепко обнял тебя и прошептал, что мы обязательно со всем справимся. И что через шесть лет я всё равно тебя найду.</p>
        ` 
    },

    // --- СТРАНИЦА 152: GRUND 68 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 68", 
        content: `
            <p>Ich liebe dich für unsere unglaubliche Aufrichtigkeit, wegen der ich ein schweres Gespräch gerne noch einmal erleben würde. Unser letztes Gespräch vor sechs Jahren, kurz vor der Trennung. Es war der traurigste Moment, aber genau deshalb waren wir maximal ehrlich zueinander. Ganz echt. Ohne Masken.</p>
            <p style="margin-top:12px;">Wenn ich an den Schmerz von damals denke – ich will nicht dorthin zurück, es war einfach zu schwer und tat zu weh. Aber jetzt, wo du endlich mein bist, wo ich mit klarem Kopf auf diese Vergangenheit blicken kann, ertappe ich mich bei dem Gedanken, dass ich diesen Tag wiederholen würde. Ich würde dieses Gespräch noch einmal von Anfang bis Ende durchleben.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Nur jetzt, da ich alles weiß, was uns noch bevorsteht, würde ich von mir aus unbedingt etwas Wichtiges hinzufügen. Ich würde dich ganz fest in den Arm nehmen und dir zuflüstern, dass wir das alles überstehen werden. Und dass ich dich in sechs Jahren sowieso wiederfinden werde.</p>
        ` 
    },

    // --- СТРАНИЦА 153: ПРИЧИНА 69 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 69", 
        content: `
            <p>Я люблю тебя за то, что наши отношения — это не «просто легко», но каждая трудность в них имеет смысл. Я понял это сразу, как только мы снова начали встречаться. У нас всегда были сложности, и сейчас их немало: наши планы на будущее, которые не всегда сразу сходятся, отношение твоих родителей ко мне, которое пока остаётся неясным…</p>
            <p style="margin-top:12px;">Вокруг нас так много непростых вещей. Но всё это абсолютно ничего не значит по сравнению с тем, что я чувствую к тебе. Нам нужно было пройти через долгую разлуку и эти преграды, чтобы по-настоящему научиться ценить друг друга. Чтобы понять, насколько сильна наша любовь.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Вся эта сложность стоит тебя одной. И в самые тяжёлые моменты я всегда вспоминаю одну простую истину: мы выбрали не лёгкость. Мы выбрали друг друга.</p>
        ` 
    },

    // --- СТРАНИЦА 154: GRUND 69 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 69", 
        content: `
            <p>Ich liebe dich dafür, dass unsere Beziehung nicht „einfach nur leicht“ ist, aber jede Schwierigkeit darin einen tiefen Sinn hat. Ich habe das sofort verstanden, als wir wieder anfingen, uns zu treffen. Wir hatten schon immer Schwierigkeiten, und auch jetzt gibt es viele: unsere Zukunftspläne, die nicht immer sofort übereinstimmen, die Einstellung deiner Eltern zu mir, die noch unklar ist…</p>
            <p style="margin-top:12px;">Es gibt so viele komplizierte Dinge um uns herum. Aber das alles bedeutet absolut nichts im Vergleich zu dem, was ich für dich empfinde. Wir mussten durch die lange Trennung und all diese Hindernisse gehen, um wirklich zu lernen, einander zu schätzen. Um zu verstehen, wie stark unsere Liebe ist.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">All diese Mühe ist es wert, nur für dich allein. Und in den schwersten Momenten erinnere ich mich immer an eine einfache Wahrheit: Wir haben uns nicht für die Leichtigkeit entschieden. Wir haben uns für einander entschieden.</p>
        ` 
    },

    // --- СТРАНИЦА 155: ПРИЧИНА 70 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 70", 
        content: `
            <p>Я люблю тебя за тот момент, который я пообещал себе запомнить на всю жизнь. Когда я провожал тебя домой, мы зашли в главный парк. Я предложил прокатиться на пиратском корабле, но ты призналась, что очень боишься. Ты никогда на него не садилась и пыталась отказаться, говорила, что там огромная очередь и нужно покупать билеты. Но я сказал: «Всё нормально, я рядом, я всё решу».</p>
            <p style="margin-top:10px;">Мы отстояли эту очередь, и когда нас запустили, все бросились занимать места. Я предложил сесть в самый конец, где качает сильнее всего, но ты побоялась, и мы сели ровно посередине. Корабль начал раскачиваться. Я специально выбрал сторону, с которой был виден закат — я всегда садился туда один в школьные годы, чтобы просто смотреть на солнце. Я показал этот закат тебе.</p>
            <p style="margin-top:10px;">Мы смеялись, нам было весело, и вдруг от страха и эмоций ты крепко-крепко прижалась ко мне. Ты обняла мою руку так сильно, словно боялась отпустить или потерять.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">И в ту самую секунду… когда корабль взлетал вверх, я смотрел на этот невероятный закат, чувствовал твой запах и то, как ты держишь меня. Я тихо сказал самому себе: «Я хочу запомнить это навсегда». И я запомнил. Каждую деталь.</p>
        ` 
    },

    // --- СТРАНИЦА 156: GRUND 70 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 70", 
        content: `
            <p>Ich liebe dich für diesen einen Moment, den ich mir versprochen habe, für den Rest meines Lebens einzufrieren. Als ich dich nach Hause brachte, gingen wir in den Hauptpark. Ich schlug vor, auf dem Piratenschiff zu fahren, aber du hast gestanden, dass du große Angst hast. Du warst noch nie darauf gefahren und hast versucht abzusagen, meintest, dass die Schlange zu lang sei und man erst Tickets kaufen müsste. Aber ich sagte: „Alles gut, ich bin da, ich regele das.“</p>
            <p style="margin-top:10px;">Wir standen in der Schlange, und als wir reingelassen wurden, stürmten alle los, um Plätze zu ergattern. Ich wollte mich ganz nach hinten setzen, wo es am meisten schaukelt, aber du hattest Angst, und so setzten wir uns genau in die Mitte. Das Schiff fing an zu schaukeln. Ich habe extra die Seite gewählt, von der aus man den Sonnenuntergang sehen konnte – dort saß ich in der Schulzeit immer allein, um einfach nur in die Sonne zu schauen. Ich zeigte dir diesen Sonnenuntergang.</p>
            <p style="margin-top:10px;">Wir lachten, wir hatten Spaß, und plötzlich, vor lauter Angst und Emotionen, hast du dich ganz, ganz fest an mich gedrückt. Du hast meinen Arm so fest umklammert, als hättest du Angst, mich loszulassen oder zu verlieren.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Und genau in dieser Sekunde… als das Schiff nach oben flog, blickte ich in diesen unglaublichen Sonnenuntergang, spürte deinen Duft und wie du mich hieltest. Ich sagte ganz leise zu mir selbst: „Ich will das für immer behalten.“ Und ich habe es behalten. Jedes einzelne Detail.</p>
        ` 
    },

    // --- СТРАНИЦА 157: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 7 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 7", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Ты пойми я очень вспыльчивая и когда я психую могу сказать что угодно но ни одно слово не от сердца, как только я успокаиваюсь я задыхаюсь понимая то что сделала тебе неприятно, ты пойми что я не смогу нормально жить без тебя ты как мой воздух, это мой характер я готова меняться ради тебя, главное что бы ты понимал это."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 20px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Bitte versteh mich: Ich bin sehr impulsiv, und wenn ich die Beherrschung verliere, rutscht mir alles Mögliche heraus — aber kein einziges Wort davon kommt von Herzen. Sobald ich mich beruhigt habe, schnürt es mir die Kehle zu, weil mir klar wird, dass ich dir wehgetan habe. Du musst wissen, dass ich ohne dich nicht leben kann, du bist wie die Luft zum Atmen für mich. Ja, das ist mein Charakter, aber ich bin bereit, mich für dich zu ändern. Das Einzige, was zählt, ist, dass du das weißt.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v7/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 158: ПРИЧИНА 71 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 71", 
        content: `
            <p>Я люблю тебя за те школьные мелочи, которые казались пустяком, но остались в памяти навсегда. Помнишь ту нашу строгую учительницу? Она всегда дотошно проверяла тетради: считала темы, смотрела даты. А у меня к её уроку не хватало целых двух страниц текста. Следующий урок — её, я жутко нервничал и пытался успеть всё дописать.</p>
            <p style="margin-top:12px;">Ты сидела слева, увидела мою панику и предложила безумную вещь: «Давай я буду писать одну страницу, а ты — другую». Я быстро разделил текст, и мы начали писать одновременно в одной тетради. Ты заполняла левую страницу, я — правую. Это было жутко неудобно, наши руки сталкивались, мы тихо смеялись, но ты настолько грамотно всё рассчитала, что мы уложились за 10 минут.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">А я… я писал свою часть и тайком смотрел на тебя. Думал о том, какая же ты невероятно хорошая, добрая и приятная. Ты этого тогда не заметила. Но я ещё тогда, в тот обычный школьный день, запомнил этот момент на всю свою жизнь.</p>
        ` 
    },

    // --- СТРАНИЦА 159: GRUND 71 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 71", 
        content: `
            <p>Ich liebe dich für diese kleinen Dinge in der Schule, die wie eine Kleinigkeit schienen, aber für immer im Gedächtnis blieben. Weißt du noch, diese eine strenge Lehrerin von uns? Sie hat die Hefte immer akribisch kontrolliert: hat die Themen gezählt, auf die Daten geschaut. Und mir fehlten für ihren Unterricht ganze zwei Seiten Text. Die nächste Stunde war ihre, ich war schrecklich nervös und versuchte, alles schnell fertigzuschreiben.</p>
            <p style="margin-top:12px;">Du saßt links von mir, sahst meine Panik und schlugst etwas Verrücktes vor: „Lass mich eine Seite schreiben und du die andere.“ Ich habe den Text schnell aufgeteilt, und wir fingen an, gleichzeitig in ein und dasselbe Heft zu schreiben. Du hast die linke Seite ausgefüllt, ich die rechte. Es war schrecklich unbequem, unsere Hände stießen zusammen, wir haben leise gelacht, aber du hast alles so geschickt aufgeteilt, dass wir es in 10 Minuten geschafft haben.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und ich… ich schrieb meinen Teil und schaute dich heimlich von der Seite an. Dachte darüber nach, wie unglaublich gut, lieb und angenehm du bist. Du hast es damals nicht bemerkt. Aber ich habe mir diesen Moment schon damals, an diesem ganz gewöhnlichen Schultag, für den Rest meines Lebens gemerkt.</p>
        ` 
    },

    // --- СТРАНИЦА 160: ПРИЧИНА 72 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 72", 
        content: `
            <p>Я люблю тебя за то ни с чем не сравнимое спокойствие, когда я наконец-то понял: всё в моей жизни встало на свои места. Это было недавно, в мой день рождения, когда я вышел в увольнение. После встречи с отцом и братом я прибежал к тебе. Мы праздновали, ты дарила подарки, а потом мы сидели на аллее. Я хотел поцеловать тебя, но ты испугалась, что нас оштрафует полиция. Ты переживала, чтобы у меня на службе не было проблем.</p>
            <p style="margin-top:10px;">А потом мы сели в такси. Все последние минуты ты сидела справа, крепко обняв мою руку. Я повернулся, приблизился к твоему лицу, вдохнул твой запах… и отстранился. И вдруг ты самым тихим, самым нежным и хрупким тоном в мире… попросила меня поцеловать тебя. Будто умоляя об этом. Я никогда не видел тебя такой беззащитной. И это случился наш первый поцелуй. Поцелуй, который длился всего секунду, но стоил шести лет ожидания.</p>
            <p style="margin-top:10px;">Утром, уже на работе, я так и не смог успокоиться — внутри всё горело. Меня так сильно душили эмоции, что хотелось плакать от любого слова друга или мамы. Я зашёл в кабинку, сел и просто разрыдался. Я выплакал всё. Всю многолетнюю злость, всю обиду, всю тяжесть разлуки.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Меня просто разорвало от одного единственного чувства: «НАКОНЕЦ-ТО». Всё вышло наружу. И в ту же секунду наступило абсолютное, звенящее спокойствие. Именно в этот ключевой момент я осознал: ты наконец-то моя. И теперь всё будет в порядке.</p>
        ` 
    },

    // --- СТРАНИЦА 161: GRUND 72 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 72", 
        content: `
            <p>Ich liebe dich für diese unvergleichliche Ruhe, als ich endlich begriff: Alles in meinem Leben ist an seinem Platz. Es war vor Kurzem, an meinem Geburtstag, als ich Ausgang hatte. Nach dem Treffen mit meinem Vater und Bruder eilte ich zu dir. Wir feierten, du zeigtest mir die Geschenke, und danach saßen wir in einer Allee. Ich wollte dich küssen, aber du hattest Angst, dass uns die Polizei erwischt. Du warst besorgt, dass ich im Dienst Probleme bekommen könnte.</p>
            <p style="margin-top:10px;">Und dann stiegen wir in ein Taxi. Die letzten Minuten saßt du auf der rechten Seite und hieltest meinen Arm ganz fest. Ich drehte mich um, kam deinem Gesicht nahe, atmete deinen Duft ein… und drehte mich wieder weg. Und plötzlich, mit der leisesten, zärtlichsten und verletzlichsten Stimme der Welt… batest du mich, dich zu küssen. Als würdest du mich darum anflehen. Ich hatte dich noch nie so schutzlos gesehen. Und das wurde unser erster Kuss. Ein Kuss, der nur eine Sekunde dauerte, aber sechs Jahre des Wartens wert war.</p>
            <p style="margin-top:10px;">Am Morgen, schon bei der Arbeit, konnte ich mich immer noch nicht beruhigen – in mir brannte alles. Die Emotionen erstickten mich so sehr, dass ich bei jedem Wort eines Freundes oder meiner Mutter weinen wollte. Ich ging in eine Kabine, setzte mich hin und brach einfach in Tränen aus. Ich habe alles ausgeweint. Den jahrelangen Groll, den Schmerz, die ganze Last der Trennung.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Es hat mich einfach zerrissen vor einem einzigen Gefühl: „ENDLICH“. Alles kam heraus. Und in derselben Sekunde überkam mich eine absolute, tiefe Ruhe. Genau in diesem Schlüsselmoment wurde mir klar: Du bist endlich mein. Und von jetzt an wird alles gut sein.</p>
        ` 
    },

    // --- СТРАНИЦА 162: ПРИЧИНА 73 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 73", 
        content: `
            <p>Я люблю тебя за тот звонок, который полностью стёр расстояние между нами и сделал нас ближе, чем когда-либо. Помнишь, в школе мы никогда не разговаривали по телефону? Утром были вместе на уроках, а с минуты прощания и до самой ночи — переписывались. За всё то время мы созвонились лишь раз, секунд на тридцать, просто чтобы ты предупредила, что у тебя заняты руки. Нам хватало текста.</p>
            <p style="margin-top:12px;">Но когда ты уехала далеко, в один из дней ты сама набрала мой номер. И мы проговорили целый час. Это был наш первый настоящий разговор по телефону. Мы были за тысячи километров, но я чувствовал тебя настолько близко, будто стоял рядом в комнате. Ты занималась какими-то домашними делами, а я словно смотрел на это, и мы параллельно болтали обо всём на свете. Это было так тепло. Расстояние просто растворилось.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Осталось чёткое ощущение, что мы снова встретились и обняли друг друга на прощание. Но когда реальность вернулась, и я понял, что всё это было лишь в моей голове… мне стало невыносимо грустно. Но этот внезапный страх доказал, что никакие километры не способны заглушить мою любовь к тебе.</p>
        ` 
    },

    // --- СТРАНИЦА 163: GRUND 73 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 73", 
        content: `
            <p>Ich liebe dich für diesen einen Anruf, der die Entfernung zwischen uns komplett ausradierte und uns näher brachte als je zuvor. Weißt du noch, in der Schule haben wir nie miteinander telefoniert? Morgens waren wir im Unterricht zusammen, und ab der Minute des Abschieds bis tief in die Nacht haben wir nur geschrieben. In all der Zeit haben wir nur ein einziges Mal telefoniert, für vielleicht dreißig Sekunden. Der Text hat uns gereicht.</p>
            <p style="margin-top:12px;">Aber als du weit weggezogen warst, hast du mich an einem Tag plötzlich selbst angerufen. Und wir haben eine ganze Stunde lang geredet. Das war unser erstes richtiges Telefongespräch. Wir waren tausende Kilometer voneinander entfernt, aber ich spürte dich so nah, als stünde ich direkt neben dir im Zimmer. Du gingst irgendwelchen Hausarbeiten nach, und ich schaute dir gefühlt dabei zu, während wir parallel über Gott und die Welt quatschten. Es war so unendlich warm.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Es blieb das klare Gefühl, als hätten wir uns gerade wirklich getroffen und zum Abschied umarmt. Aber als die Realität zurückkehrte… wurde mir unerträglich schwer ums Herz. Aber genau diese Angst hat bewiesen, dass keine Kilometer der Welt meine Liebe zu dir jemals dämpfen können.</p>
        ` 
    },

    // --- СТРАНИЦА 164: ПРИЧИНА 74 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 74", 
        content: `
            <p>Я люблю тебя за нашу тайную шестилетнюю борьбу с самими собой, о которой не знал абсолютно никто в этом мире. Наше расставание в школе было максимально странным и нелепым. Из-за него ты все эти годы думала, что любила только ты, а я просто бросил тебя. А я, в свою очередь, был уверен, что так сильно любил только я, а с твоей стороны это было несерьёзно, и ты давно всё забыла. Мы оба считали свою любовь безответной.</p>
            <p style="margin-top:10px;">Но при этом мы ни на день не переставали думать друг о друге. Мы везде и во всём искали наши черты. Сколько бы мы ни внушали себе: «я больше не люблю», «мы никогда не будем вместе» — подсознательно мы продолжали искать. Это была мучительная смесь из обиды, злости, любви и жуткой нехватки чего-то важного. Мы не понимали, чего нам не хватает, а оказалось — нам не хватало нас. Ведь ты уже тогда стала частью меня, моим домом.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Все эти шесть лет мы были словно затерянные в пустыне люди. Мы скитались в поисках воды, умирая от жажды, и шли по чужому компасу, который нам вручили близкие и окружение, направляясь туда, куда велели они, а не наше собственное сердце. Это была страшная и долгая дорога. Но мы выжили в этой пустыне. И наконец-то вернулись домой.</p>
        ` 
    },

    // --- СТРАНИЦА 165: GRUND 74 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 74", 
        content: `
            <p>Ich liebe dich für unseren geheimen, sechsjährigen Kampf mit uns selbst, von dem absolut niemand auf dieser Welt etwas ahnte. Unsere Trennung in der Schule war maximal seltsam und absurd. Deswegen dachtest du all die Jahre, dass nur du geliebt hättest und ich dich einfach verlassen habe. Ich wiederum war mir sicher, dass nur ich so stark geliebt habe, während es von deiner Seite aus nicht ernst war und du alles längst vergessen hattest. Wir beide hielten unsere Liebe für unerwidert.</p>
            <p style="margin-top:10px;">Und doch haben wir keinen einzigen Tag aufgehört, aneinander zu denken. Egal wie oft wir uns einredeten: „Ich liebe nicht mehr“, „Wir werden nie wieder zusammen sein“ – unterbewusst suchten wir weiter nach einander. Es war eine quälende Mischung aus Groll, Wut, Liebe und dem schmerzhaften Mangel an etwas Wichtigem. Wir verstanden nicht, was uns fehlte, aber am Ende stellte sich heraus – uns fehlte das „Wir“. Denn du warst schon damals ein Teil von mir geworden, mein Zuhause.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">All diese sechs Jahre waren wir wie Menschen, die in der Wüste verloren gegangen sind. Wir irrten auf der Suche nach Wasser umher и liefen nach einem fremden Kompass, den uns unsere Familie und unser Umfeld in die Hand gedrückt hatten, und gingen dorthin, wohin sie es uns befahlen, und nicht, wohin unser eigenes Herz uns zog. Es war ein schrecklicher und langer Weg. Aber wir haben in dieser Wüste überlebt. Und sind endlich nach Hause zurückgekehrt.</p>
        ` 
    },

    // --- СТРАНИЦА 166: ПРИЧИНА 75 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 75", 
        content: `
            <p>Я люблю тебя за то, что наша связь — это нечто гораздо большее, чем просто любовь или обычные отношения. Я окончательно понял это недавно, когда мы очень сильно поссорились. Всe было настолько серьёзно, что мы едва не расстались насовсем. В моих прошлых отношениях всё было иначе: при малейших разногласиях я легко отпускал людей, считая, что мы просто не подходим друг другу. Если бы на твоём месте была другая, я бы даже не стал нервничать.</p>
            <p style="margin-top:12px;">Я бы просто включил игнор и жил бы абсолютно спокойно, радуясь своей свободе. Я никогда никого не прощал, и те девушки тоже никогда не возвращались. Но с тобой всё абсолютно по-другому. Эта ссора стала для нас пиком, но она же доказала, как сильно мы завязаны друг на друге. Ради нашей связи мы сами заставляем себя меняться.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Мы ломаем свои старые привычки и наступаем на собственную гордость там, где раньше я никогда и ни ради кого бы не уступил. Каждая ссора приносит нам урок, который делает нас только ближе. Мы продолжаем выбирать друг друга вопреки всему. Потому что ты — мой единственный осознанный выбор.</p>
        ` 
    },

    // --- СТРАНИЦА 167: GRUND 75 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 75", 
        content: `
            <p>Ich liebe dich dafür, dass unsere Verbindung so viel mehr ist als nur Liebe oder eine gewöhnliche Beziehung. Das habe ich vor Kurzem endgültig begriffen, als wir uns sehr heftig gestritten haben. Es war so ernst, dass wir uns fast für immer getrennt hätten. In meinen früheren Beziehungen war alles anders: Bei den kleinsten Meinungsverschiedenheiten habe ich Menschen leichtfertig gehen lassen, im Glauben, wir passten einfach nicht zusammen. Wäre eine andere an deiner Stelle gewesen, hätte ich mir nicht einmal Sorgen gemacht.</p>
            <p style="margin-top:12px;">Ich hätte sie einfach ignoriert und völlig ruhig weitergelebt, froh über meine Freiheit. Ich habe nie jemandem verziehen, und diese Mädchen sind auch nie wieder zurückgekehrt. Aber mit dir ist alles absolut anders. Dieser Streit war ein Höhepunkt für uns, aber er hat auch bewiesen, wie untrennbar wir miteinander verbunden sind. Für unsere Beziehung zwingen wir uns selbst dazu, uns zu ändern.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Wir brechen unsere alten Gewohnheiten auf und treten auf unseren eigenen Stolz dort, wo ich früher niemals und für niemanden nachgegeben hätte. Jeder Streit erteilt uns eine Lektion, die uns nur noch näher zusammenbringt. Wir entscheiden uns weiterhin füreinander, allen Widrigkeiten zum Trotz. Weil du meine einzige, bewusste Entscheidung bist.</p>
        ` 
    },
        // --- СТРАНИЦА 168: ПРИЧИНА 76 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 76", 
        content: `
            <p>Я люблю тебя за тот неожиданный и тёплый момент, который когда-то в школе просто ввёл меня в ступор. Помнишь, как мы возвращались после курсов пешком через четыре района? Мы шли, болтали, спорили и очень много смеялись — настроение было шикарным. Наш путь лежал через безлюдную аллею, окружённую густыми деревьями.</p>
            <p style="margin-top:12px;">И вдруг ты в шутку сказала, что я слишком хилый и вряд ли смогу поднять что-то тяжёлое. Я, конечно, начал защищаться, а ты подлила масла в огонь: «Да ты даже меня поднять не сможешь!» Ты думала, что я отшучусь. Но мы прошли пару шагов, и я резко, неожиданно подхватил тебя на руки. Я держал тебя и с улыбкой смотрел на твоё лицо.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">В первую секунду ты замерла от шока, но потом заглянула в мои глаза и будто растаяла. И самым тихим, нежным голосом прошептала: «Всё, верю… отпусти». Я бережно поставил тебя на землю, и в то же мгновение ты быстро поцеловала меня в щёку. Это была наша самая первая, робкая близость.</p>
        ` 
    },

    // --- СТРАНИЦА 169: GRUND 76 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 76", 
        content: `
            <p>Ich liebe dich für diesen unerwarteten und warmen Moment, der mich damals in der Schule einfach völlig sprachlos gemacht hat. Weißt du noch, wie wir nach den Kursen zu Fuß durch pfier Stadtteile nach Hause gelaufen sind? Wir gingen, quatschten, stritten und haben unendlich viel gelacht – die Stimmung war großartig. Unser Weg führte durch eine menschenleere Allee, die von dichten Bäumen umgeben war.</p>
            <p style="margin-top:12px;">Und plötzlich meintest du im Spaß, ich sei viel zu schwach und könnte sicher nichts Schweres heben. Ich fing natürlich an, mich zu verteidigen, aber du hast noch einen draufgesetzt: „Du könntest nicht einmal mich hochheben!“ Du dachtest wohl, ich würde es weglachen. Aber wir gingen ein paar Schritte, und ich habe dich ganz plötzlich und unerwartet auf die Arme genommen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">In der ersten Sekunde warst du starr vor Schreck, aber dann hast du mir in die Augen geschaut und bist förmlich geschmolzen. Und mit der leisesten, zärtlichsten Stimme flüstertest du: „Schon gut, ich glaub's dir… lass mich runter.“ Ich stellte dich vorsichtig auf den Boden, und im selben Moment hast du mich schnell auf die Wange geküsst. Es war unsere allererste, schüchterne Nähe.</p>
        ` 
    },

    // --- СТРАНИЦА 170: ПРИЧИНА 77 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 77", 
        content: `
            <p>Я люблю тебя за то, что моё сердце уже очень давно сделало свой выбор. И теперь, несмотря ни на что, оно выбирает только тебя — снова и снова. Я окончательно понял это в моих прошлых отношениях. Там всё было по-другому: девушки всегда доказывали мне свою любовь, боялись меня потерять. В последних отношениях девушка делала для меня буквально всё.</p>
            <p style="margin-top:10px;">Я уважал её, заботился, отдавал столько внимания, сколько мог из себя выжать. Конечно, то, что я даю тебе сейчас, и то, что было тогда — это колоссальная разница. Но я старался делать ей приятное. И при этом… не чувствовал ровным счётом ничего. Была привязанность, мы жили вместе, но я никогда не испытывал с ней радости, счастья и тепла. Она была для меня как нелюбимая жена.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">И вот однажды ночью, глядя в темноту окна, я осознал: моё сердце ещё в школе выбрало тебя одну. Оно сделало этот выбор один раз — и больше просто не видит других вариантов. Для него не существует никого, кроме тебя. Моё сердце принадлежало тебе все эти шесть лет. И оно будет выбирать тебя опять и опять. Всю нашу жизнь.</p>
        ` 
    },

    // --- СТРАНИЦА 171: GRUND 77 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 77", 
        content: `
            <p>Ich liebe dich dafür, dass mein Herz seine Wahl schon vor sehr langer Zeit getroffen hat. Und jetzt, allen Widrigkeiten zum Trotz, wählt es nur dich – immer und immer wieder. Das habe ich in meiner früheren Beziehung endgültig begriffen. Dort war alles anders: Die Mädchen haben mir immer ihre Liebe bewiesen, hatten Angst, mich zu verlieren. In meiner letzten Beziehung hat das Mädchen buchstäblich alles für mich getan.</p>
            <p style="margin-top:10px;">Ich habe sie respektiert, mich um sie gekümmert und ihr so viel Aufmerksamkeit geschenkt, wie ich nur aus mir herauspressen konnte. Natürlich ist das, was ich dir jetzt gebe, und das, was damals war, ein kolossaler Unterschied. Aber ich habe versucht, ihr eine Freude zu machen. Und dabei… fühlte ich absolut gar nichts. Sie war für mich wie eine ungeliebte Ehefrau.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Und genau damals, als ich in die Dunkelheit vor dem Fenster blickte, wurde mir klar: Mein Herz hat schon in der Schule dich allein gewählt. Es hat diese Wahl ein einziges Mal getroffen – und sieht seither einfach keine anderen Optionen mehr. Für mein Herz existiert niemand außer dir. Mein Herz gehörte dir all diese sechs Jahre lang. Und es wird dich wieder und wieder wählen.</p>
        ` 
    },

    // --- СТРАНИЦА 172: ПРИЧИНА 78 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 78", 
        content: `
            <p>Я люблю тебя за то, что мы смогли пережить нашу самую страшную ссору и стать после неё совершенно другими людьми. Мы серьёзно поссорились лишь раз, но это едва не разружило всё. В запале ты наговорила очень обидных слов. Мне было невыносимо больно именно оттого, что это сказала мне ты. Твой вспыльчивый характер ранил меня так сильно, что я два дня не мог есть.</p>
            <p style="margin-top:10px;">Я взял увольнение, чтобы просто проветриться, уверенный, что всё кончено. Я сидел один в кафе, пил кофе и пытался прийти в себя. Ты позвонила. Спросила, где я, и приехала к той самой аллее, где 8 февраля всё у нас и начиналось. Я вышел к тебе абсолютно пустым. Я сел на скамейку и холодно сказал: «Говори всё, что осталось. Я пришёл не мириться, мне ничего не нужно».</p>
            <p style="margin-top:10px;">И тогда ты заговорила. И обрушилась стена. Ты начала так сильно плакать, объясняя, что просто неправильно меня поняла. Ты признала, что из-за злости перешла все границы, и просила простить тебя. Ты окружила меня такой теплотой и заботой, что лёд внутри меня тронулся.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Я впервые в жизни вернулся к девушке после того, как принял решение расстаться. Но теперь я знаю: это не была измена себе. Это была победа над гордостью ради нас. Ты научилась быть сдержанной, а я понял, что ради тебя готов пройти даже через этот ад. Потому что оно того стоит.</p>
        ` 
    },

    // --- СТРАНИЦА 173: GRUND 78 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 78", 
        content: `
            <p>Ich liebe dich dafür, dass wir unseren schlimmsten Streit überstehen konnten und danach zu völlig anderen Menschen geworden sind. Wir haben uns nur ein einziges Mal richtig gestritten, aber das hätte fast alles zerstört. Im Affekt hast du mir sehr verletzende Worte an den Kopf geworfen. Es tat mir unerträglich weh, gerade weil diese Worte von dir kamen. Dein hitziges Temperament hat mich so tief getroffen.</p>
            <p style="margin-top:10px;">Ich nahm mir Ausgang, um einfach den Kopf freizubekommen, fest davon überzeugt, dass es vorbei ist. Ich saß allein im Café, trank Kaffee und versuchte, zu mir zu kommen. Du hast angerufen. Hast gefragt, wo ich bin, und bist zu der Allee gekommen, wo am 8. Februar alles zwischen uns begann. Ich setzte mich auf die Bank und sagte kalt: „Sag alles, was noch übrig ist. Ich bin nicht hier, um mich zu versöhnen.“</p>
            <p style="margin-top:10px;">Und dann hast du angefangen zu sprechen. Und die Mauer brach ein. Du hast so bitterlich geweint und erklärt, dass du mich einfach falsch verstanden hattest. Du hast zugegeben, dass du vor Wut alle Grenzen überschritten hast, und hast mich gebeten, dir zu vergeben. Du hast mich danach mit einer solchen Wärme und Fürsorge umgeben, dass das Eis in mir schmolz.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Ich bin zum ersten Mal in meinem Leben zu einem Mädchen zurückgekehrt, nachdem ich mich eigentlich schon getrennt hatte. Aber jetzt weiß ich: Es war kein Verrat an mir selbst. Es war ein Sieg über den Stolz für uns beide. Du hast gelernt, dich zu beherrschen, und ich habe begriffen, dass ich für dich bereit bin, selbst durch diese Hölle zu gehen.</p>
        ` 
    },

    // --- СТРАНИЦА 174: ПРИЧИНА 79 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 79", 
        content: `
            <p>Я люблю тебя за то, что мы не побоялись пройти через самую сложную правду, чтобы открыть совершенно новый этап нашего доверия. Раньше мы часто ссорились из-за ревности и глупых пустяков. Особенно когда в разговорах ты вспоминала примеры из своего прошлого. Ты всего лишь делилась своим удивлением, пытаясь показать, насколько наши нынешние отношения лучше. Но мне, как мужчине, было невыносимо это слышать.</p>
            <p style="margin-top:10px;">И в один день мы решили покончить с этим раз и навсегда. Мы сели и подробно, до мельчайших деталей, рассказали друг другу обо всём нашем прошлом. Это было жутко тяжело. Было ощущение, будто мы швыряем друг в друга острые ножи. Злость, старые обиды, бешеная ревность — всё смешалось в одну ядовитую смесь. В какой-то момент в голове звенел один вопрос: сможем ли мы вообще быть вместе после этого?</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Но мы выстояли. Прошло два-три дня, эмоции утихли, и я с удивлением обнаружил, что между нами произошло чудо. Мы стали ближе, чем когда-либо. Наша любовь стала в тысячу раз сильнее и глубже. Мы приняли прошлое друг друга, оставили его позади и вместе шагнули на новый уровень.</p>
        ` 
    },

    // --- СТРАНИЦА 175: GRUND 79 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 79", 
        content: `
            <p>Ich liebe dich dafür, dass wir keine Angst vor der schmerzhaftesten Wahrheit hatten, um eine völlig neue Stufe unseres Vertrauens zu erreichen. Früher haben wir uns oft wegen Eifersucht und banalen Kleinigkeiten gestritten. Besonders, wenn du in unseren Gesprächen Beispiele aus deiner Vergangenheit herangezogen hast. Du wolltest mir damit nur zeigen, wie viel besser unsere jetzige Beziehung ist. Aber für mich als Mann war es unerträglich.</p>
            <p style="margin-top:10px;">Und an einem Tag beschlossen wir, dem ein für alle Mal ein Ende zu setzen. Wir setzten uns hin und erzählten uns gegenseitig alles über unsere Vergangenheit, bis ins kleinste Detail. Es war verdammt schwer. Es fühlte sich an, als würden wir mit scharfen Messern nacheinander werfen. Wut, alter Groll, rasende Eifersucht – alles vermischte sich. Irgendwann hämmerte nur noch die Frage: Können wir danach überhaupt noch zusammen sein?</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Aber wir haben durchgehalten. Zwei, drei Tage vergingen, die Emotionen legten sich, und ich merkte überrascht, dass ein Wunder geschehen war. Wir waren uns näher als je zuvor. Unsere Liebe war tatsächlich nicht mehr dieselbe – sie war tausendmal stärker und tiefer geworden. Wir haben die Vergangenheit des anderen akzeptiert и eine neue Ebene betreten.</p>
        ` 
    },

    // --- СТРАНИЦА 176: ПРИЧИНА 80 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 80", 
        content: `
            <p>Я люблю тебя за всю нашу историю целиком — и если бы меня спросили, какой момент я бы оставил навсегда, я бы ответил: «ВСЕ». Я бы оставил абсолютно всё, через что нам пришлось пройти. Я всю жизнь мечтал, чтобы моя судьба была особенной, насыщенной и интересной. И в любви я всегда искал именно это — я хотел встретить сильнейшее, колоссальное чувство. Я всегда говорил себе: пусть будет трудно, но это будет настоящая, живая любовь.</p>
            <p style="margin-top:10px;">Наша любовь доказала свою необычность именно потому, что мы выжили в этом шторме. Благодаря шести годам разлуки, благодаря ссорам, сомнениям и расстояниям, мы научились ценить друг друга так, как никто другой в этом мире. Каждая деталь, каждая слеза, каждый взгляд, каждая секунда одиночества — всё это было не просто так. Это крупицы огромного фундамента, который мы построили.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Я люблю тебя. И я люблю каждую ситуацию, которая происходила между нами. Я ценю каждое мгновение, и мне не важно, плохим оно было или хорошим. Главное — оно было связано с тобой. Это наше мгновение. Наша общая победа. Наша история, которую мы пишем дальше…</p>
        ` 
    },

    // --- СТРАНИЦА 177: GRUND 80 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 80", 
        content: `
            <p>Ich liebe dich für unsere gesamte gemeinsame Geschichte – und wenn man mich fragen würde, welchen Moment ich für immer behalten wollen würde, würde ich antworten: „ALLE“. Ich würde absolut alles behalten, was wir durchmachen mussten. Ich habe mein ganzes Leben lang davon geträumt, dass mein Schicksal besonders, erfüllt und interessant sein soll. Und in der Liebe habe ich immer genau das gesucht – ich wollte dieses eine, gigantische Gefühl.</p>
            <p style="margin-top:10px;">Unsere Liebe hat ihre Einzigartigkeit bewiesen, weil wir diesen Sturm überstanden haben. Dank der sechs Jahre Trennung, dank der Streits, der Zweifel und der Entfernungen haben wir gelernt, einander so zu schätzen wie niemand sonst auf dieser Welt. Jedes Detail, jede Träne, jeder Blick, jede Sekunde der Einsamkeit – das alles war nicht umsonst. Es sind die Bausteine des riesigen Fundaments, das wir errichtet haben.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Ich liebe dich. Und ich liebe jede Situation, die zwischen uns passiert ist. Ich schätze jeden Augenblick, und es ist mir egal, ob er schlecht oder gut war. Das Wichtigste ist – er war mit dir verbunden. Das ist unser Augenblick. Unser gemeinsamer Sieg. Unsere Geschichte, die wir von nun an weiterlesen…</p>
        ` 
    },

    // --- СТРАНИЦА 178: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 8 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 8", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Когда я увидела тебя в первый день после разлуки длиною в 6 лет, я вернулась в то самое состояние. И когда ты пристально смотрел мне в глаза, я превратилась в ту маленькую девочку, которую любят и которая счастлива как никогда. Тогда мне захотелось заплакать и обнять тебя крепко-крепко... Вот тогда я поняла, что я жива и я дома."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 20px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Als ich dich am ersten Tag nach unserer sechsjährigen Trennung wiedersah, war ich sofort wieder in genau demselben Gefühl gefangen. Und als du mir so tief und fest in die Augen geschaut hast, wurde ich plötzlich wieder zu dem kleinen Mädchen, das bedingungslos geliebt wird und so glücklich ist wie noch nie im Leben. In diesem Moment wollte ich einfach nur weinen und dich unendlich fest an mich drücken – und genau da habe ich gespürt, dass ich endlich wieder lebe und angekommen bin.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <!-- Кнопка теперь открывает видеоролик из папки v8 -->
            <button class="video-btn" onclick="window.open('v8/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 179: ЭТАП 5 - ЗА НАШЕ БУДУЩЕЕ (RU) ---
    {
        type: "chapter",
        lang: "ru",
        title: "ЭТАП 5",
        subtitle: "«За наше будущее»",
        content: `
            <p>Когда люди влюбляются, они часто говорят о настоящем, о том, что чувствуют сегодня, и о том, как счастливы сейчас. Но настоящая любовь всегда смотрит дальше: она строит планы, мечтает, верит и создаёт будущее ещё задолго до того, как оно наступит.</p>
            <p style="margin-top:12px;">За эти годы я тысячи раз представлял нашу жизнь впереди — представлял наш дом, наши путешествия, наших детей, наши маленькие семейные традиции и даже нашу старость. И чем чаще я думаю обо всём этом, тем сильнее понимаю одну простую вещь: больше всего меня радуют не сами мечты, меня радует то, что во всех них рядом со мной всегда стоишь ты.</p>
            <p style="margin-top:12px;">Мне не важно, сколько лет пройдёт, какие испытания нас ждут и через какие жизненные повороты нам придётся пройти; когда я думаю о будущем, я не вижу неизвестность — я вижу нас.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Этот этап — о нашем будущем, о той жизни, которую я мечтаю прожить рядом с тобой. О тех моментах, которые ещё не произошли, но уже живут в моём сердце так ярко, словно стали воспоминаниями.</p>
        `
    },

    // --- СТРАНИЦА 180: ETAPPE 5 - AUF UNSERE ZUKUNFT (DE) ---
    {
        type: "chapter",
        lang: "de",
        title: "ETAPPE 5",
        subtitle: "„Auf unsere Zukunft“",
        content: `
            <p>Wenn Menschen sich verlieben, sprechen sie oft von der Gegenwart, von dem, was sie heute fühlen, und davon, wie glücklich sie jetzt gerade sind. Doch die wahre Liebe blickt immer weiter voraus: Sie schmiedet Pläne, träumt, glaubt und erschafft die Zukunft schon lange, bevor sie überhaupt eintrifft.</p>
            <p style="margin-top:12px;">In all diesen Jahren habe ich mir unser zukünftiges Leben tausende Male ausgemalt — ich habe mir unser Zuhause vorgestellt, unsere Reisen, unsere Kinder, unsere kleinen Familientraditionen und sogar unser Alter. Und je öfter ich über all das nachdenke, desto stärker verstehe ich eine ganz einfache Wahrheit: Es sind nicht die Träume an sich, die mich so unendlich glücklich machen, sondern die Gewissheit, dass in jedem einzelnen von ihnen du an meiner Seite stehst.</p>
            <p style="margin-top:12px;">Es ist mir gleichgültig, wie viele Jahre vergehen, welche Prüfungen uns erwarten; wenn ich an die Zukunft denke, sehe ich keine Ungewissheit — ich sehe uns.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Diese Etappe handelt von unserer Zukunft, von dem Leben, das ich an deiner Seite zu führen träume. Von jenen Momenten, die noch nicht geschehen sind, aber in meinem Herzen bereits so lebendig pulsieren.</p>
        `
    },

    // --- СТРАНИЦА 181: ПРИЧИНА 81 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 81", 
        content: `
            <p>Я люблю тебя за то особенное тепло на душе, когда я представляю наш будущий дом. Я вижу, как возвращаюсь уставший после тяжёлого рабочего дня, а в доме царят уют, чистота и порядок. И у порога меня встречаешь ты вместе с нашей маленькой дочкой. Ты стоишь — немного уставшая, с растрёпанными волосами, но твои глаза при виде меня загораются самым ярким светом. Я крепко обнимаю и целую вас обоих.</p>
            <p style="margin-top:10px;">А после ужина, когда ты убираешь мои вещи, ты начинаешь в своей привычной манере любя ворчать на меня: «У тебя что, руки сломаны, чтобы самому всё на место убрать?» Я лишь улыбаюсь, обнимаю тебя, такую недовольную, и нежно целую. Говорю, что безумно сильно люблю тебя и просто очень устал на работе, понимая, что и ты за весь день устала не меньше.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">И ты, смягчившись, отвечаешь: «Ладно… Но за это ты почитаешь мне перед сном продолжение книги!» Я провожу время с нашей малышкой, читаю ей сказку, пока она сладко не уснёт, а после прихожу к своей любимой старшей дочке — к тебе. Я открываю книгу и читаю тебе продолжение, чувствуя, как ты засыпаешь под мой голос в полном счастье и гармонии.</p>
        ` 
    },

    // --- СТРАНИЦА 182: GRUND 81 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 81", 
        content: `
            <p>Ich liebe dich für diese ganz besondere Wärme in meiner Seele, wenn ich mir unser zukünftiges Zuhause vorstelle. Ich sehe mich nach einem harten Arbeitstag müde nach Hause kommen, während im Haus Gemütlichkeit, Reinheit und Ordnung herrschen. Und an der Tür empfängst du mich gemeinsam mit unserer kleinen Tochter. Du stehst da – ein wenig erschöpft, mit zerzausten Haaren, aber deine Augen leuchten auf vor Liebe. Ich nehme euch beide fest in den Arm.</p>
            <p style="margin-top:10px;">Und nach dem Abendessen, wenn du meine Sachen wegräumst, fängst du in deiner gewohnten, liebevollen Art an zu meckern: „Sind deine eigenen Hände etwa gebrochen, um das mal selbst wegzuräumen?“ Ich muss nur lächeln, nehme dich, meine süße Muckerschnecke, in den Arm und küsse dich sanft. Ich sage dir, wie unendlich doll ich dich liebe, während ich genau weiß, dass auch du müde bist.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Und du wirst weich und sagst: „Na gut… Aber dafür liest du mir vor dem Schlafen die Fortsetzung des Buches vor!“ Ich verbringe Zeit mit unserer kleinen Tochter, lese ihr eine Geschichte vor, bis sie süß einschläft, und danach komme ich, wie versprochen, zu meiner geliebten großen Tochter – zu dir. Ich schlage das Buch auf und lese dir vor, während ich spüre, wie du bei meiner Stimme zur Ruhe kommst.</p>
        ` 
    },

    // --- СТРАНИЦА 183: ПРИЧИНА 82 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 82", 
        content: `
            <p>Я люблю тебя за то, что наше будущее наполнено вечным теплом, которое мы ни за что и никогда не потеряем. Я твёрдо верю, что никакие годы, быт или заботы не властны над нами. Всё это лишь отговорки для тех, кто позволил себе остыть, но наша любовь — это наш осознанный и сильный выбор.</p>
            <p style="margin-top:12px;">Я хочу, чтобы мы через всю жизнь, до самой глубокой старости, пронесли ту самую теплоту, абсолютное взаимопонимание и бесконечное уважение друг к другу. Я хочу, чтобы мы никогда не теряли способность видеть чудо друг в друге и радоваться самым простым мелочам.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Пусть этот конфетно-букетный период не заканчивается для нас никогда: ни после свадьбы, ни с появлением детей, ни спустя десятки лет. Я мечтаю, чтобы в старости мы любили друг друга ещё сильнее, чем сейчас. Чтобы те наши детские причуды, с которых всё когда-то начиналось, всегда оставались с нами, согревая нас.</p>
        ` 
    },

    // --- СТРАНИЦА 184: GRUND 82 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 82", 
        content: `
            <p>Ich liebe dich dafür, dass unsere Zukunft von einer ewigen Wärme erfüllt ist, die wir um keinen Preis und niemals verlieren werden. Ich glaube fest daran, dass keine Jahre, kein Alltag und keine Sorgen Macht über uns haben. All das sind nur Ausreden für diejenigen, die es zugelassen haben, abzukühlen, aber unsere Liebe ist unsere bewusste und starke Entscheidung.</p>
            <p style="margin-top:12px;">Ich möchte, dass wir durch das ganze Leben, bis ins tiefste Alter, genau diese Wärme, das absolute gegenseitige Verständnis und den unendlichen Respekt füreinander tragen. Ich möchte, dass wir niemals die Fähigkeit verlieren, das Wunder im anderen zu sehen und uns an den einfachsten Kleinigkeiten zu erfreuen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Möge diese magische Anfangszeit für uns niemals enden: weder nach der Hochzeit, noch wenn Kinder kommen, noch nach Jahrzehnten. Ich träume davon, dass wir uns im Alter noch viel stärker lieben als jetzt. Dass unsere kindlichen Macken und Neckereien, mit denen damals alles begann, für immer bei uns bleiben und uns wärmen.</p>
        ` 
    },

    // --- СТРАНИЦА 185: ПРИЧИНА 83 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 83", 
        content: `
            <p>Я люблю тебя за то, что уже сейчас я отчётливо и ярко вижу самый счастливый момент нашей будущей жизни. Я вижу нас через много лет за большим столом, в окружении наших детей, моего брата и родителей. И ты, как всегда, с улыбкой и азартом в глазах, начинаешь рассказывать им всем историю.</p>
            <p style="margin-top:10px;">О том, как в тот судьбоносный день, 8 февраля, ты пришла со мной попрощаться, а я якобы стоял перед тобой, молил глазами о пощаде и умолял согласиться снова быть вместе. Ты со смехом уверяешь всех, что тебе просто стало меня жаль. Ты вовсю подшучиваешь надо мной, а я спокойно отвечаю: «Все в этом кругу меня знают… Но за актёрское мастерство тебе твёрдая пятёрка, придумала шикарно!»</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Вся семья взрывается искренним смехом. Но в самый последний момент, когда все отсмеются, я посмотрю тебе в глаза и скажу при всех: «А знаете… Всё именно так и было. И я ни капли этого не стесняюсь. Ради нашей любви я готов на всё». Этот весёлый, шумный и полный любви момент я вижу ярче всего — ведь ради такого финала стоило пройти через любой шторм.</p>
        ` 
    },

    // --- СТРАНИЦА 186: GRUND 83 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 83", 
        content: `
            <p>Ich liebe dich dafür, dass ich schon jetzt ganz deutlich und lebhaft den glücklichsten Moment unseres zukünftigen Lebens vor mir sehe. Ich sehe uns in vielen Jahren an einem großen Tisch, umgeben von unseren Kindern, meinem Bruder und meinen Eltern. Und du fängst, wie immer mit diesem liebevollen Funkeln in den Augen, an, ihnen allen eine Geschichte zu erzählen.</p>
            <p style="margin-top:10px;">Wie du an jenem schicksalhaften Tag, dem 8. Februar, kamst, um dich von mir zu verabschieden, und wie ich angeblich vor dir stand, mit flehenden Augen um Gnade bettelte и dich anflehte, wieder mit mir zusammen zu sein. Du versicherst allen lachend, dass ich dir leidtat. Du machst deine Witze, und ich antworte mit einem Schmunzeln: „Für deine schauspielerische Leistung bekommst du eine glatte Eins!“</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Die ganze Familie bricht in herzliches Lachen aus. Aber im allerletzten Moment, wenn sich alle beruhigt haben, werde ich dir tief in die Augen schauen und vor allen sagen: „Und wisst ihr was… Genau so war es. Und ich schäme mich kein bisschen dafür. Für unsere Liebe würde ich absolut alles tun.“ Diesen Moment sehe ich am klarsten vor mir – dafür war es jeden Sturm wert.</p>
        ` 
    },

    // --- СТРАНИЦА 187: ПРИЧИНА 84 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 84", 
        content: `
            <p>Я люблю тебя за то, что наши общие мечты заставляют моё сердце биться быстрее. У меня есть желания, которые я по-настоящему хочу пережить вместе с тобой хотя бы раз в жизни. Я безумно хочу путешествовать с тобой и объездить весь мир, но есть одна особенная, сумасшедшая мечта, о которой ты знаешь и которой немного боишься.</p>
            <p style="margin-top:12px;">Я хочу совершить с тобой прыжок — сорваться в бездну, держась за руки, и там, в свободном падении, поцеловать тебя, забыв обо всём хотя бы на десять секунд. Я хочу, чтобы мы наполнили нашу жизнь калейдоскопом из сотен разных мест, чтобы спустя годы мы могли показывать нашим внукам фотографии и видео, где мы счастливые совершаем этот безумный прыжок.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И я мечтаю об одном особенном дне: провести его с тобой наедине, на самой вершине мира, разбить палатку на склоне горы, укутаться в пледы и пить горячий чай, глядя на потрясающий вид. И в этой звенящей тишине, обняв тебя, всю ночь напролёт обсуждать наши новые планы на будущее.</p>
        ` 
    },

    // --- СТРАНИЦА 188: GRUND 84 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 84", 
        content: `
            <p>Ich liebe dich dafür, dass unsere gemeinsamen Träume mein Herz unendlich viel schneller schlagen lassen. Es gibt Wünsche, die ich zusammen mit dir mindestens einmal im Leben hautnah spüren möchte. Ich will so unglaublich gerne mit dir reisen und die ganze Welt entdecken, aber es gibt diesen einen ganz besonderen, verrückten Traum, von dem du weißt und vor dem du dich ein bisschen fürchtest.</p>
            <p style="margin-top:12px;">Ich möchte mit dir zusammen in die Tiefe springen – Hand in Hand dem Abgrund entgegen, und dich dort, im freien Fall, einfach küssen und für mindestens zehn Sekunden alles um uns herum vergessen. Ich möchte, dass wir unser Leben mit einem Kaleidoskop aus Hunderten von Orten füllen, damit wir später unseren Enkelkindern diese Videos zeigen können.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und ich träume von einem ganz bestimmten Tag: ihn mit dir allein auf dem Dach der Welt zu verbringen, ein Zelt am Berghang aufzuschlagen, uns in Decken zu kuscheln und heißen Tee zu trinken, während wir auf die atemberaubende Aussicht schauen. Und in dieser absoluten Stille, während ich dich fest im Arm halte, Pläne zu schmieden.</p>
        ` 
    },

    // --- СТРАНИЦА 189: ПРИЧИНА 85 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 85", 
        content: `
            <p>Я люблю тебя за то, какими потрясающими родителями мы станем для наших детей. Я часто думаю об этом и уже сейчас понимаю, как мы будем дополнять друг друга. С твоей чуткостью и тревогой за них у наших детей, конечно, будет полная гиперопека, а я со своей стороны буду отвечать за то, чтобы они росли сильными и подготовленными к жизни.</p>
            <p style="margin-top:12px;">По натуре я очень добрый человек, я даже врагам не желаю зла, ведь только Аллах вправе судить нас. Но ради будущего наших детей, ради того, чтобы они выросли морально здоровыми, самостоятельными и стойкими людьми, я буду проявлять необходимую отцовскую строгость.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я знаю, что так говорят многие, но я точно знаю: мы с тобой сделаем для них невозможное. Мы отдадим им всю свою душу, защитим от любых штормов, но научим твёрдо стоять на ногах, потому что они унаследуют твою безграничную нежность и мой интеллект.</p>
        ` 
    },

    // --- СТРАНИЦА 190: GRUND 85 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 85", 
        content: `
            <p>Ich liebe dich dafür, was für fantastische Eltern wir für unsere Kinder sein werden. Ich denke oft darüber nach und verstehe schon jetzt, wie perfekt wir uns ergänzen werden. Mit deiner unendlichen Fürsorge und deiner ständigen Sorge um sie werden unsere Kinder natürlich eine totale Überfürsorge genießen, während ich von meiner Seite aus dafür sorgen werde, dass sie stark aufwachsen.</p>
            <p style="margin-top:12px;">Von Natur aus bin ich ein sehr gutherziger Mensch, ich wünsche selbst meinen Feinden nichts Böses, denn allein Allah hat das Recht, über uns zu richten. Aber für die Zukunft unserer Kinder, damit sie psychisch gesund, selbstständig und willensstark heranwachsen, werde ich die notwendige väterliche Strenge walten lassen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich weiß es ganz genau: Du und ich, wir werden das Unmögliche für sie möglich machen. Wir werden ihnen unsere ganze Seele schenken, sie vor jedem Sturm beschützen, aber ihnen beibringen, fest auf den eigenen Beinen zu stehen, weil sie deine grenzenlose Zärtlichkeit und meine Intelligenz erben werden.</p>
        ` 
    },
        // --- СТРАНИЦА 191: ПРИЧИНА 86 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 86", 
        content: `
            <p>Я люблю тебя за то, какой великий пример истинной любви мы однажды подарим нашим детям. Я хочу, чтобы на нашем собственном примере они поняли: любовь — это не просто красивое слово. Это не банальные цветы с шоколадками, не бабочки в животе и тем более не привычка. Любовь — это осознанный выбор.</p>
            <p style="margin-top:10px;">Выбор одного-единственного человека — целиком и полностью, со всеми его минусами, шрамами и причудами. Это огромная ответственность за того, кого ты к себе приручил, и бесконечная борьба: борьба со всем внешним миром, со своим собственным эгоизмом, гордостью и амбициями.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Я хочу, чтобы наши дети знали, что любить — это значит уметь терпеть, понимать и уважать, уметь жертвовать своими принципами ради счастья любимого человека. Главное, чему я хочу их научить — это любить без условий, обязательств и пустых ожиданий. Потому что только безусловная любовь имеет право называться любовью.</p>
        ` 
    },

    // --- СТРАНИЦА 192: GRUND 86 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 86", 
        content: `
            <p>Ich liebe dich dafür, welch großes Vorbild wahrer Liebe wir eines Tages unseren Kindern schenken werden. Ich möchte, dass sie an unserem eigenen Beispiel verstehen: Liebe ist nicht nur ein schönes Wort. Sie ist nicht bloß Blumen und Schokolade, kein Kribbeln im Bauch und erst recht keine bloße Gewohnheit. Liebe ist eine bewusste Entscheidung.</p>
            <p style="margin-top:10px;">Die Entscheidung für einen einzigen Menschen – ganz und gar, mit all seinen Fehlern, Narben und Eigenheiten. Sie ist eine ungeheure Verantwortung für denjenigen, den man an sich gebunden hat, und ein ewiger Kampf: ein Kampf gegen die ganze Welt da draußen, gegen den eigenen Egoismus, den Stolz und die Ambitionen.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Ich möchte, dass unsere Kinder sehen und wissen, dass Lieben bedeutet, Geduld zu haben, zu verstehen und zu respektieren, seine eigenen Prinzipien für das Glück des geliebten Menschen opfern zu können. Das Wichtigste, was ich sie lehren möchte, ist, ohne Bedingungen, Verpflichtungen und leere Erwartungen zu lieben. Denn nur bedingungslose Liebe ist echte Liebe.</p>
        ` 
    },

    // --- СТРАНИЦА 193: ПРИЧИНА 87 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 87", 
        content: `
            <p>Я люблю тебя за то, что ты — моя главная опора на каждом этапе нашей будущей жизни. Я хочу подарить тебе весь мир и воплотить в реальность каждую твою мечту. Но больше всего на свете я хочу, чтобы ты была рядом со мной именно на пути к этим вершинам. Жизнь никогда не была и не будет стабильной: сегодня я могу быть на самом дне, завтра — на пике успеха.</p>
            <p style="margin-top:12px;">И я хочу делить с тобой каждую минуту этого пути. Мне особенно важно видеть тебя рядом в самые трудные дни. Когда захочется всё бросить, когда победа будет уже близко, но внутри не останется сил, чтобы сделать последний шаг. Именно твоё присутствие и твоя вера в меня способны вернуть мне мотивацию.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я хочу проходить с тобой каждый наш крах и каждый грандиозный успех. Но именно в моменты шторма ты нужна мне больше всего — ведь когда всё будет хорошо, я сам переверну горы, чтобы ты была самой счастливой на этом свете.</p>
        ` 
    },

    // --- СТРАНИЦА 194: GRUND 87 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 87", 
        content: `
            <p>Ich liebe dich dafür, dass du meine größte Stütze in jeder einzelnen Phase unseres zukünftigen Lebens bist. Ich möchte dir die ganze Welt schenken und jeden deiner Träume Wirklichkeit werden lassen. Aber mehr als alles andere auf der Welt möchte ich dich genau auf dem Weg zu diesen Gipfeln an meiner Seite wissen. Das Leben war nie beständig: Heute unten, morgen auf dem Höhepunkt.</p>
            <p style="margin-top:12px;">Und ich möchte jede Minute dieses Weges mit dir teilen. Es ist mir besonders wichtig, dich in den schwersten Tagen an meiner Seite zu sehen. Dann, wenn man alles hinschmeißen möchte, wenn der Sieg schon greifbar nah ist, aber in mir keine Kraft mehr für den letzten Schritt steckt. Genau deine Gegenwart und dein Glaube an mich geben mir Motivation.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich möchte jeden Absturz und jeden grandiosen Erfolg mit dir durchleben. Aber gerade in den Momenten des Sturms brauche ich dich am meisten – denn wenn alles gut ist, werde ich selbst Berge versetzen, damit du die Glücklichste bist.</p>
        ` 
    },

    // --- СТРАНИЦА 195: ПРИЧИНА 88 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 88", 
        content: `
            <p>Я люблю тебя за то, что твои мечты стали моим единственным смыслом добиваться большего. Для меня нет понятия «сделаю это, если появится возможность». Я иду к успеху только для того, чтобы у тебя, у нас было всё, о чём мы даже боялись мечтать. У тебя есть заветная мечта — объездить весь мир, увидеть каждый его уголок, вдохнуть воздух разных стран.</p>
            <p style="margin-top:12px;">И поэтому моя главная жизненная цель — сделать так, чтобы каждый наш год был наполнен новыми горизонтами. Я поставлю себе за правило: каждый год, во что бы то ни стало, мы будем улетать туда, где еще не были. Я не жду возможностей, я создаю их.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Если чего-то не хватает — я буду стремиться, работать и добиваться этого, пока твой мир не станет таким же безграничным, как и твои мечты. Ведь всё, чего я достигу в этой жизни, принадлежит тебе. Мой успех — это твои билеты в новые страны, твои радостные глаза и твой мир.</p>
        ` 
    },

    // --- СТРАНИЦА 196: GRUND 88 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 88", 
        content: `
            <p>Ich liebe dich dafür, dass deine Träume zu meinem einzigen Grund geworden sind, mehr zu erreichen. Für mich gibt es kein „ich mache das, wenn ich die Gelegenheit dazu habe“. Ich strebe nach Erfolg nur deshalb, damit du und wir alles haben, wovon wir nicht einmal zu träumen wagten. Du hast diesen einen sehnlichen Traum: die ganze Welt zu bereisen и jeden Winkel zu sehen.</p>
            <p style="margin-top:12px;">Und genau deshalb ist es mein wichtigstes Lebensziel, dafür zu sorgen, dass jedes unserer Jahre mit neuen Horizonten gefüllt ist. Ich habe mir vorgenommen: Jedes Jahr, komme was wolle, werden wir irgendwohin fliegen, wo wir noch nie waren. Ich warte nicht auf Gelegenheiten, ich schaffe sie.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Wenn mir etwas fehlt, werde ich kämpfen, arbeiten und alles dafür tun, bis deine Welt so grenzenlos ist wie deine Träume. Denn alles, was ich in diesem Leben erreiche, gehört dir. Mein Erfolg – das sind deine Tickets in ferne Länder und dein leuchtendes Glück in den Augen.</p>
        ` 
    },

    // --- СТРАНИЦА 197: ПРИЧИНА 89 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 89", 
        content: `
            <p>Я люблю тебя за то, что рядом с тобой навсегда исчез мой самый главный страх. Я всегда до боли боялся прожить скучную, серую жизнь. Боялся оказаться рядом с тем, чьи взгляды и ценности далеки от моих, боялся стать одним из тех, чьи дни превращаются в монотонную рутину. Я думал, что мне суждено остаться одиноким, и это пугало меня больше всего.</p>
            <p style="margin-top:12px;">Но с тобой всё иначе. С тобой жизнь обрела вкус, цвет и невероятный масштаб. Твои амбиции, твои мечты, твой непростой характер — это не сложность, это твоя уникальность. Ты — неисчерпаемая энергия, и я выбираю твою «сложность» вместо любой, самой спокойной и скучной жизни.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Рядом с тобой я больше не боюсь будущего, ведь я точно знаю: мы проживём ту самую жизнь, о которой многие лишь мечтают, но так и не решаются построить из-за страха перед трудностями. А мы — решимся на всё, потому что вместе мы сильнее любого страха.</p>
        ` 
    },

    // --- СТРАНИЦА 198: GRUND 89 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 89", 
        content: `
            <p>Ich liebe dich dafür, dass meine größte Angst neben dir für immer verschwunden ist. Ich hatte immer schmerzliche Angst davor, ein langweiliges, graues Leben zu führen. Ich hatte Angst davor, an jemanden geraten zu sein, dessen Ansichten fern von meinen eigenen liegen, und davor, dass mein Leben einfach in einer monotonen Routine versinkt. Ich dachte, mein Schicksal sei das Alleinsein.</p>
            <p style="margin-top:12px;">Aber mit dir ist alles anders. Mit dir hat das Leben Geschmack, Farbe und ein unglaubliches Ausmaß bekommen. Deine Ambitionen, deine Träume, dein schwieriger Charakter – das ist keine Kompliziertheit, das ist deine Einzigartigkeit. Du bist Energie pur, und ich wähle lieber deine „Kompliziertheit“ als jedes ruhige Leben.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Neben dir habe ich keine Angst mehr vor der Zukunft, denn ich weiß eines ganz sicher: Wir werden genau das Leben führen, von dem viele nur träumen, sich aber wegen der Angst vor den Schwierigkeiten nie trauen. Aber wir – wir werden uns alles trauen, denn zusammen sind wir stärker als jede Angst.</p>
        ` 
    },

    // --- СТРАНИЦА 199: ПРИЧИНА 90 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 90", 
        content: `
            <p>Я люблю тебя за то, что наша способность беречь друг друга оказалась сильнее времени и любого упрямства. Мы оба прекрасно знаем, какие у нас сложные, гордые и упрямые характеры. И мы знаем главную правду о себе: если кто-то из нас уйдёт — это будет конец. Даже если это разобьёт нам сердца, мы никогда больше не вернёмся.</p>
            <p style="margin-top:12px;">И именно это знание делает нашу любовь уникальной. В моменты самых жарких ссор мы находим в себе колоссальную силу, чтобы контролировать свой эгоизм. Мы не позволяем друг другу переступить черту и уйти, потому что слишком сильно дорожим тем, что построили.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Я заметил удивительную вещь: каждый кризис, через который мы проходим, не отдаляет нас, а наоборот — привязывает друг к другу еще сильнее. Наше умение ценить друг друга вопреки всему — это тот самый щит, который сохранит наши отношения в будущем и поможет пережить любые жизненные шторма.</p>
        ` 
    },

    // --- СТРАНИЦА 200: GRUND 90 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 90", 
        content: `
            <p>Ich liebe dich dafür, dass unsere Fähigkeit, einander zu beschützen, stärker als die Zeit und jeder Eigensinn ist. Wir beide wissen ganz genau, wie stolz, dickköpfig und unnachgiebig unsere Charaktere sind. Und wir kennen die fundamentale Wahrheit über uns: Wenn einer von uns geht, ist es ein für alle Mal vorbei. Selbst wenn es uns das Herz bricht, wir würden nie zurückkehren.</p>
            <p style="margin-top:12px;">Und genau dieses Wissen macht unsere Liebe so einzigartig. In den Momenten der heftigsten Streits finden wir eine gigantische Kraft in uns, um unseren Egoismus zu kontrollieren. Wir erlauben uns gegenseitig nicht, diese rote Linie zu überschreiten, weil wir das, was wir aufgebaut haben, viel zu sehr schätzen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Mir ist etwas Erstaunliches aufgefallen: Jede Krise, die wir durchstehen, entfernt uns nicht voneinander, sondern schweißt uns im Gegenteil nur noch fester zusammen. Unsere Fähigkeit, einander trotz allem so tief zu schätzen – das ist der Schild, der unsere Beziehung in der Zukunft bewahren wird.</p>
        ` 
    },

    // --- СТРАНИЦА 201: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 9 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 9", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Я поняла одну вещь: я люблю тебя и буду любить, даже если изменится твоя внешность, даже если изменится твой характер, потому что я влюбилась в твое доброе сердце."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 20px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Ich habe eines verstanden: Ich liebe dich und ich werde dich immer lieben, selbst wenn sich dein Aussehen verändert, selbst wenn sich dein Charakter wandelt, weil ich mich unsterblich in dein unendlich gütiges Herz verliebt habe.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <!-- Кнопка ведет в папку v9 -->
            <button class="video-btn" onclick="window.open('v9/index.html', '_blank')">Смотреть видеопослание</button>
        `
    },
        // --- СТРАНИЦА 202: ПРИЧИНА 91 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 91", 
        content: `
            <p>Люблю тебя за то, что рядом с тобой я чётко вижу наше будущее и точно знаю, каким мужчиной хочу оставаться для тебя через 10, 20 и все последующие годы. Я хочу быть человеком, которым ты будешь искренне и бесконечно гордиться; человеком, который всегда держит своё слово, примерным отцом наших детей и твоей самой надёжной опорой.</p>
            <p style="margin-top:10px;">Несмотря на то, через какие бы трудности и испытания я ни проходил, я обещаю всегда оставаться чутким, внимательным и любящим партнёром. Жизненная рутина никогда не заставит меня забыть о самом главном — о том, что ты когда-то оставила всё и выбрала меня. Я буду ценить и беречь этот выбор каждую секунду.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Я хочу быть мужчиной, на которого ты сможешь положиться на все 100%, чтобы в любой сложной ситуации ты могла с гордостью сказать: «Мой муж во всём разберётся, он у меня самый сильный». Твоя вера в меня дает мне силу переворачивать горы ради нас.</p>
        ` 
    },

    // --- СТРАНИЦА 203: GRUND 91 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 91", 
        content: `
            <p>Weil ich an deiner Seite ganz genau weiß, was für ein Mann ich in 10, 20 und all den kommenden Jahren für dich sein will. Ich will ein Mann sein, auf den du aus tiefstem Herzen stolz bist; ein Mann, der immer zu seinem Wort steht, ein vorbildlicher Vater für unsere Kinder und deine feste Säule im Leben. Egal, welche schwierigen Zeiten ich durchstehen muss.</p>
            <p style="margin-top:10px;">Ich verspreche dir, immer dieser feinfühlige, aufmerksame und liebende Partner an deiner Seite zu bleiben. Der Alltagstrott wird mich niemals vergessen lassen, was am wichtigsten ist: dass du damals alles stehen und liegen gelassen hast, um dich für mich zu entscheiden. Ich werde diese Entscheidung jede Sekunde unseres Lebens schätzen.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Ich möchte der Mann sein, auf den du dich zu 100% verlassen kannst, damit du in jedem schweren Moment voller Stolz sagen kannst: „Mein Mann kümmert sich darum, er ist der Stärkste.“ Dein Glaube an mich ist das, was mir die unbändige Kraft gibt, Berge für uns zu versetzen.</p>
        ` 
    },

    // --- СТРАНИЦА 204: ПРИЧИНА 92 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 92", 
        content: `
            <p>Я люблю тебя, потому что в моих мечтах идеальное, счастливое утро спустя годы выглядит очень просто и уютно — и в нём обязательно есть ты. Для истинного счастья ведь нужно не так уж и много. Моё утро счастливо лишь тогда, когда, открывая глаза, я вижу твоё лицо и лица наших детей. Я представляю нашу утреннюю суматоху.</p>
            <p style="margin-top:12px;">Дети капризничают и не слушаются, ты немного ворчишь и нервничаешь, а я просто с улыбкой смотрю на весь этот милый хаос и говорю: «Милая, я приготовлю завтрак, а ты помоги детям умыться. Тебе кофе как обычно?» Это и есть моя главная подлинная радость. У нас есть свой дом, наши дети, уверенность в завтрашнем дне.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И самое главное — всё это я разделяю с тобой, женщиной, которую безумно люблю. Ты — мама моих детей, и рядом с тобой я по-настоящему счастлив. Нам совсем не страшно заглядывать вперед, ведь мы есть друг у друга.</p>
        ` 
    },

    // --- СТРАНИЦА 205: GRUND 92 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 92", 
        content: `
            <p>Ich liebe dich, weil in meinen Träumen der perfekte, glückliche Morgen in einigen Jahren so einfach und unendlich gemütlich aussieht – und du bist der Mittelpunkt davon. Für das wahre Glück braucht es gar nicht viel. Mein Morgen ist erst dann perfekt, wenn ich die Augen öffne und dein Gesicht sowie die Gesichter unserer Kinder sehe.</p>
            <p style="margin-top:12px;">Ich stelle mir unseren morgendlichen Trubel vor: Die Kinder wollen nicht hören, du bist ein bisschen gestresst und nervös, und ich schaue einfach mit einem Lächeln auf dieses süße Chaos und sage: „Schatz, ich mache das Frühstück, und du helfst den Kindern beim Waschen. Für dich einen Kaffee wie immer, mein Liebling?“</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und das Wichtigste von allem – all das teile ich mit dir, der Frau, die ich unendlich liebe. Du bist die Mutter meiner Kinder, und an deiner Seite bin ich einfach wunschlos glücklich. Wir haben unser eigenes Zuhause und keine Angst vor der Zukunft.</p>
        ` 
    },

    // --- СТРАНИЦА 206: ПРИЧИНА 93 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 93", 
        content: `
            <p>Я люблю тебя потому, что я мечтаю, чтобы когда-нибудь в нашей собственной мастерской мы вместе научили наших детей рисовать. Наша история удивительно связана с творчеством: ещё в школе я писал твои портреты и портрет твоей мамы, а ты просила меня научить тебя. Жизнь повернулась так, что после нашей разлуки ты сама взяла в руки кисти.</p>
            <p style="margin-top:12px;">Ты настолько отточила свой талант, что сейчас рисуешь даже лучше меня. Я знаю о твоей заветной мечте — создать в нашем будущем доме уютную комнату-студию, где мы сможем никуда не спешить и просто творить в удовольствие. И моя большая мечта — чтобы в этой творческой атмосфере мы вместе привили любовь к искусству детям.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Хочу видеть, как они делают свои первые наброски, пока мы с гордостью и любовью передаём им то, что когда-то соединило нас в самом начале пути. Наше творчество обретёт новую жизнь в их рисунках.</p>
        ` 
    },

    // --- СТРАНИЦА 207: GRUND 93 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 93", 
        content: `
            <p>Ich liebe dich, weil ich davon träume, dass wir eines Tages in unserem eigenen Atelier unseren Kindern gemeinsam das Malen beibringen. Unsere Geschichte ist auf wunderbare Weise mit der Kunst verbunden: Schon zu Schulzeiten habe ich Porträts von dir und deiner Mutter gezeichnet, und du hast mich immer gebeten, es dir beizubringen. Das Leben hat einen Kreis geschlossen.</p>
            <p style="margin-top:12px;">Nach unserer Trennung hast du selbst angefangen zu malen und deinen Pinselstrich so sehr perfektioniert, dass du mich längst überflügelt hast. Ich kenne deinen großen Traum von einem eigenen Atelier in unserem zukünftigen Zuhause – ein Raum, in dem wir später ohne Eile ganz für uns selbst malen können. Это прекрасное будущее.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Und mein sehnlichster Wunsch ist es, dass wir in genau dieser kreativen Atmosphäre unseren Kindern die Liebe zur Kunst schenken. Ich will sehen, wie sie ihre ersten Skizzen machen, während wir ihnen voller Stolz das weitergeben, was uns beide einst verbunden hat.</p>
        ` 
    },

    // --- СТРАНИЦА 208: ПРИЧИНА 94 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 94", 
        content: `
            <p>Я люблю тебя потому, что мне никогда не бывает страшно представлять с тобой далёкое будущее. Когда люди говорят о будущем, они часто боятся его. Боятся неизвестности, перемен, ответственности, старости. Но когда я представляю будущее рядом с тобой, я не чувствую страха. Наоборот. Я чувствую абсолютное спокойствие.</p>
            <p style="margin-top:12px;">Мне совершенно не важно, где именно мы будем жить через двадцать или тридцать лет. Не важно, каким будет наш дом, какая будет машина во дворе и сколько денег будет лежать на счету. Главное — чтобы рядом была ты. Потому что за эти годы я понял одну простую вещь: счастье никогда не создают стены, вещи или цифры.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Его создают люди. Я могу представить нас молодыми. Могу представить нас взрослыми. Могу представить нас седыми. И в каждом из этих будущих воспоминаний ты рядом со мной. Именно поэтому я больше не боюсь времени. Я хочу пройти этот путь вместе.</p>
        ` 
    },

    // --- СТРАНИЦА 209: GRUND 94 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 94", 
        content: `
            <p>Ich liebe dich, weil ich keine Angst habe, mit dir in die ferne Zukunft zu blicken. Viele Menschen fürchten die Zukunft. Sie haben Angst vor dem Unbekannten, vor Veränderungen, vor Verantwortung und vor dem Älterwerden. Aber wenn ich mir meine Zukunft mit dir vorstelle, empfinde ich keine Angst. Im Gegenteil. Ich empfinde tiefe Ruhe.</p>
            <p style="margin-top:12px;">Es ist mir nicht wichtig, wo wir in zwanzig oder dreißig Jahren leben werden. Es spielt keine Rolle, wie unser Haus aussehen wird, welches Auto vor der Tür steht oder wie viel Geld wir besitzen. Das Wichtigste ist, dass du an meiner Seite bist. Denn ich habe verstanden, dass Glück niemals durch Dinge oder Zahlen entsteht. Glück entsteht durch Menschen.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Ich kann uns jung sehen. Ich kann uns erwachsen sehen. Ich kann uns alt sehen. Und in jeder dieser Vorstellungen bist du bei mir. Deshalb habe ich keine Angst mehr vor der Zeit. Denn egal wohin sie uns führt – ich möchte diesen Weg Hand in Hand mit dir gehen.</p>
        ` 
    },

    // --- СТРАНИЦА 210: ПРИЧИНА 95 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 95", 
        content: `
            <p>Я люблю тебя потому, что я улыбаюсь каждый раз, когда представляю нас в глубокой старости. Я вижу наше утро через много-много лет: мы оба уже совсем седые, с морщинками вокруг глаз. Я просыпаюсь, умываюсь и прихожу на кухню, где ты что-то готовишь и по привычке ворчишь на какую-то мелочь, делая из неё целую катастрофу.</p>
            <p style="margin-top:12px;">Ты засыпаешь меня поручениями — что нужно срочно купить в магазине и что скоро приедут внуки, поэтому нужно всё успеть подготовить. А я стою, слушаю твой голос и вспоминаю весь наш огромный путь. Вспоминаю, как мы были детьми в школе, как любили друг друга молодой парой в наши 24–25 лет...</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">И вот теперь мы стоим здесь и обсуждаем внуков. Я тихо подойду к тебе сзади, нежно обниму и скажу, как сильно тебя люблю. От этой мысли у меня на душе становится так тепло, что я невольно закрываю глаза и улыбаюсь нашему счастью.</p>
        ` 
    },

    // --- СТРАНИЦА 211: GRUND 95 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 95", 
        content: `
            <p>Ich liebe dich, weil ich jedes Mal unwillkürlich lächeln muss, wenn ich uns als alte Menschen in der Zukunft vor Augen habe. Ich sehe unseren Morgen in vielen, vielen Jahren: Wir sind beide schon ganz grau und haben Falten um die Augen. Ich wache auf, mache mich fertig und komme in die Küche, wo du etwas kochst und dich über irgendeine Kleinigkeit beschwerst.</p>
            <p style="margin-top:12px;">Du überhäufst mich mit Aufgaben – was ich dringend im Laden kaufen muss und dass bald die Enkelkinder kommen, weshalb wir alles vorbereiten müssen. Und ich stehe einfach da, höre deine Stimme und lasse unseren gesamten, riesigen Lebensweg vor meinem inneren Auge Revue passieren. Ich erinnere mich an unsere Schulzeit.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Wir waren Kinder in der Schule, wir waren als junges Paar mit 24 oder 25 Jahren verliebt... und jetzt stehen wir hier und reden über unsere Enkelkinder. Ich werde leise von hinten an dich herantreten, dich sanft umarmen und dir sagen, wie sehr ich dich liebe. Dieser Gedanke erfüllt mein Herz.</p>
        ` 
    },
        // --- СТРАНИЦА 212: ПРИЧИНА 96 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 96", 
        content: `
            <p>Я люблю тебя потому, что я точно знаю, что однажды скажу тебе, когда мы будем сидеть рядом в полной тишине. Я просто тихо обниму тебя и скажу коротко: «Мы смогли, родная. Мы прожили эту жизнь именно так, как хотели». Уже сейчас на нашем пути немало препятствий, и впереди нас ждет свадьба, рождение детей и огромная ответственность.</p>
            <p style="margin-top:10px;">Она с каждым годом будет только расти. Никто и не обещал, что будет просто. Но я знаю, что с нашей любовью, взаимным уважением и пониманием законов жизни нам всё будет нипочем. Быть вместе — это уже великая сила, а пройти рука об руку до самой старости — значит прожить самую достойную жизнь из всех возможных.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">И в тот самый день, в нашей уютной тишине, держа тебя за руку и глядя в твои невероятные глаза, мы будем молча знать, что мы победили все жизненные обстоятельства и сохранили наше главное сокровище.</p>
        ` 
    },

    // --- СТРАНИЦА 213: GRUND 96 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 96", 
        content: `
            <p>Ich liebe dich, weil ich genau weiß, was ich eines Tages zu dir sagen werde, wenn wir in absoluter Stille nebeneinander sitzen. Ich werde dich einfach ganz fest in den Arm nehmen und leise sagen: „Wir haben es geschafft, mein Schatz. Wir haben dieses Leben genau so gelebt, wie wir es uns immer gewünscht haben.“ Schon jetzt liegen viele Steine auf unserem Weg.</p>
            <p style="margin-top:10px;">Vor uns stehen die Hochzeit, die Geburt unserer Kinder und eine riesige Verantwortung, die von Jahr zu Jahr nur größer wird. Niemand hat behauptet, dass es einfach wird. Aber ich weiß, dass uns dank unserer Liebe, dem tiefen Respekt und unserem Verständnis für das Leben nichts aufhalten kann. Zusammen zu sein ist eine unbändige Kraft.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Hand in Hand bis ins hohe Alter zu gehen bedeutet, das würdigste Leben zu leben, das überhaupt möglich ist. Und an jenem Tag, in unserer Stille, werden wir wissen, dass wir gesiegt haben.</p>
        ` 
    },

    // --- СТРАНИЦА 214: ПРИЧИНА 97 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 97", 
        content: `
            <p>Я люблю тебя за то, что только рядом с тобой моя главная мечта из самого детства — оставить великий след в этом мире — обрела свой истинный, глубокий смысл. Эта страсть всегда жила во мне, и теперь я знаю, как её воплотить: я хочу написать о нас настоящую, большую книгу, в которой шаг за шагом запечатлею весь наш путь.</p>
            <p style="margin-top:10px;">Наш самый главный, живой след на этой земле — это наши будущие дети, двое сыновей и две дочери. Если мы вырастим их самыми честными, правильными и лучшими людьми, то подарим миру продолжение нашей чистой любви. И если Всевышний даст мне возможность реализовать мои мужские амбиции — построить мечеть и создать приют для животных.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Это станет грандиозным наследием, но абсолютно всё это — и книги, и здания, и великие дела — не имеет никакого значения, если рядом нет тебя, ведь любой след имеет ценность, только если мы оставим его вместе.</p>
        ` 
    },

    // --- СТРАНИЦА 215: GRUND 97 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 97", 
        content: `
            <p>Ich liebe dich dafür, dass erst an deiner Seite mein größter Kindheitstraum – eine unvergessliche Spur in dieser Welt zu hinterlassen – seinen wahren, tiefen Sinn gefunden hat. Diese Leidenschaft lebte schon immer in mir, und jetzt weiß ich genau, wie ich sie verwirklichen will: Ich möchte ein echtes, großes Buch über uns schreiben.</p>
            <p style="margin-top:10px;">Unsere bedeutendste, lebendige Spur auf dieser Erde werden unsere zukünftigen Kinder sein, zwei Söhne und zwei Töchter, denn wenn wir sie zu den besten Menschen erziehen, schenken wir der Welt die Fortführung unserer reinen Liebe. Und wenn Allah mir die Möglichkeit schenkt, eine Moschee zu bauen und ein Tierheim zu errichten.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Dann wird dies ein grandioses Vermächtnis sein, aber all das bedeutet absolut gar nichts, wenn du nicht an meiner Seite bist, denn jede Spur hat nur dann einen Wert, wenn wir sie gemeinsam hinterlassen.</p>
        ` 
    },

    // --- СТРАНИЦА 216: ПРИЧИНА 98 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 98", 
        content: `
            <p>Я люблю тебя потому, что однажды мы посмотрим назад и поймём, что всё было не зря. Иногда мне кажется, что наша история слишком невероятна, чтобы быть реальной. Слишком много совпадений. Слишком много испытаний. Слишком много лет ожидания. Но я верю, что однажды наступит вечер, когда мы будем сидеть рядом и вспоминать всё, через что прошли.</p>
            <p style="margin-top:10px;">Мы вспомним школу, годы разлуки, моменты, когда жизнь разводила нас в разные стороны, страхи, ошибки и обиды. И тогда мы увидим всю картину целиком. Мы поймём, что каждая задержка, каждая боль и каждая преграда привели нас именно туда, где мы должны были оказаться. Друг к другу.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">И в тот момент я хочу посмотреть на тебя и сказать: «Если бы мне предложили прожить всю жизнь заново ради того, чтобы снова прийти именно к этому моменту рядом с тобой — я бы согласился без сомнения». Потому что ты стоила каждого дня ожидания.</p>
        ` 
    },

    // --- СТРАНИЦА 217: GRUND 98 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 98", 
        content: `
            <p>Ich liebe dich, weil wir eines Tages zurückblicken und verstehen werden, dass nichts umsonst war. Manchmal erscheint mir unsere Geschichte fast zu unglaublich, um wahr zu sein. Zu viele Zufälle. Zu viele Prüfungen. Zu viele Jahre des Wartens. Aber ich glaube daran, dass eines Tages ein Abend kommen wird, an dem wir nebeneinander sitzen und zurückschauen.</p>
            <p style="margin-top:10px;">Wir werden uns an die Schule erinnern. An die Jahre der Trennung. An die Momente, in denen das Leben uns in verschiedene Richtungen geführt hat. An Ängste, Fehler, Enttäuschungen und Schwierigkeiten. Und dann werden wir das ganze Bild sehen. Wir werden verstehen, dass jedes Hindernis uns genau dorthin geführt hat, wo wir hingehören. Zueinander.</p>
            <p style="margin-top:14px; font-weight: bold; color: #8c2323;">Und in diesem Moment möchte ich dich ansehen und sagen: „Wenn ich mein ganzes Leben noch einmal leben müsste, nur um wieder genau hier neben dir zu sitzen, würde ich es ohne einen Zweifel tun.“ Denn du warst jeden Tag des Wartens wert.</p>
        ` 
    },

    // --- СТРАНИЦА 218: ПРИЧИНА 99 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 99", 
        content: `
            <p>Я люблю тебя потому, что моя любовь к тебе слишком сильна и огромна для того, чтобы просто любить тебя в моменте. Мне нужна вся моя жизнь, до самого последнего вздоха, чтобы показать тебе всю глубину моих чувств. Я хочу пройти с тобой через любые испытания, чтобы с каждым преодоленным шагом влюбляться в тебя еще сильнее.</p>
            <p style="margin-top:12px;">Хочу разделять самые счастливые мгновения, радовать тебя при малейшей возможности и открыть тебе свою душу целиком и полностью. Я мечтаю, чтобы ты узнала меня со всех ракурсов, а я смог до конца разгадать и прочувствовать тебя.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Для этого нам мало одного простого «сейчас» — нам нужно прожить вместе до глубокой старости и любить друг друга до самого последнего удара сердца. Иначе зачем вообще любить?!</p>
        ` 
    },

    // --- СТРАНИЦА 219: GRUND 99 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 99", 
        content: `
            <p>Ich liebe dich, weil meine Liebe zu dir viel zu stark und zu gewaltig ist, um dich bloß im Hier und Jetzt zu lieben. Ich brauche mein ganzes Leben, bis zu meinem allerletzten Atemzug, um dir die wahre Tiefe meiner Gefühle zu zeigen. Ich will mit dir durch jede Prüfung gehen, um mich mit jedem Schritt nur noch unsterblicher in dich zu verlieben.</p>
            <p style="margin-top:12px;">Ich will die glücklichsten Momente mit dir teilen, dich bei jeder kleinsten Gelegenheit zum Lächeln bringen und dir meine Seele voll und ganz offenbaren. Ich wünsche mir, dass du mich aus jeder Perspektive kennenlernst, so wie ich dich bis ins kleinste Detail ergründen möchte.</p>
            <p style="margin-top:16px; font-weight: bold; color: #8c2323;">Dafür reicht uns ein einfacher Moment nicht aus – wir müssen gemeinsam alt werden und uns bis zum Tod lieben. Denn warum sollte man sonst überhaupt lieben?!</p>
        ` 
    },

    // --- СТРАНИЦА 220: ПРИЧИНА 100 (RU) ---
    { 
        type: "reason", 
        lang: "ru",
        title: "ПРИЧИНА • 100", 
        content: `
            <p>Я люблю тебя за то, что ты — моё прошлое, моё настоящее и моё единственное будущее. Сто причин — это лишь капля в океане того, что я чувствую к тебе. Это лишь малая часть того, за что я благодарен тебе каждый день. Но самая главная причина, по которой я написал эту книгу, заключается в одном простом обещании. Прямо здесь и сейчас я даю тебе своё слово.</p>
            <p style="margin-top:10px;">Я даю слово, что каждый божий день, до самого последнего вздоха, я буду делать всё, чтобы ты чувствовала себя самой любимой, желанной и защищённой женщиной на Земле. Я даю слово стать для тебя той незыблемой скалой, о которую разобьются любые жизненные штормы. Я буду тем мужчиной, на которого ты сможешь опереться в любую секунду.</p>
            <p style="margin-top:12px; font-weight: bold; color: #8c2323;">Я даю слово ценить твой выбор, твою веру в меня и беречь твою нежность пуще собственного глаза. Эта книга — не просто слова. Это фундамент нашей семьи. Моё слово, которое я сдержу. И я верю, что спустя много лет мы вместе откроем эту сотую причину и улыбнёмся, зная, что всё сделали правильно. Я люблю тебя. Всегда. Твой herz.</p>
        ` 
    },
    // --- СТРАНИЦА 221: GRUND 100 (DE) ---
    { 
        type: "reason", 
        lang: "de",
        title: "GRUND • 100", 
        content: `
            <p>Ich liebe dich dafür, dass du meine Vergangenheit, meine Gegenwart und meine einzige Zukunft bist. Hundert Gründe sind nur ein Tropfen im Ozean dessen, was ich für dich fühle. Es ist nur ein kleiner Teil dessen, wofür ich dir jeden Tag dankbar bin. Aber der wichtigste Grund, warum ich dieses Buch geschrieben habe, liegt in einem einzigen Versprechen.</p>
            <p style="margin-top:10px;">Genau hier und jetzt, angesichts der ganzen Welt und unserer unendlichen Zukunft, gebe ich dir mein Wort. Ich gebe mein Wort, dass ich jeden einzelnen Tag, bis zu meinem allerletzten Atemzug, alles dafür tun werde, damit du dich als die geliebteste, begehrteste und beschützteste Frau auf Erden fühlst. Ich werde für dich der unerschütterliche Fels sein.</p>
            <p style="margin-top:12px; font-weight: bold; color: #8c2323;">Ich gebe mein Wort, deine Wahl zu schätzen, deinen Glauben an mich zu würdigen und deine Zärtlichkeit mehr zu hüten als mein eigenes Augenlicht. Dieses Buch ist das Fundament unserer Familie. Es ist mein Wort, das ich halten werde. Ich liebe dich. Für immer. Dein Herz.</p>
        ` 
    },

    // --- СТРАНИЦА 222: СЕКРЕТНОЕ ВИДЕОПОСЛАНИЕ 10 ---
    { 
        type: "video-trigger", 
        lang: "ru",
        title: "Видеопослание • 10", 
        content: `
            <div style="font-style: italic; line-height: 1.8; color: #2c2a29; font-size: 14px; text-align: left;">
                "Ты с каждым разом все больше и больше доказываешь, что моя любовь — это удача. Видя, как ты стараешься, как ты себя ведешь, какие у тебя мысли, я понимаю, что ты не просто будешь хорошим мужем для меня, но и великолепным отцом для наших детей."
                <span style="font-size: 15px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <div style="margin: 20px auto; width: 60%; border-top: 1px dashed #e3decb;"></div>
            
            <div style="font-style: italic; line-height: 1.8; color: #666; font-size: 14px; text-align: left;">
                „Mit jedem Mal beweist du mir mehr, dass meine Liebe zu dir das größte Glück meines Lebens ist. Wenn ich sehe, wie sehr du dich bemühst, wie du dich verhältst und was für Gedanken du hast, dann weiß ich: Du wirst nicht nur ein wunderbarer Ehemann für mich sein, sondern auch ein großartiger Vater für unsere Kinder.“
                <span style="font-size: 14px; font-weight: bold; display: block; text-align: right; margin-top: 8px; color: #8c2323;">— A.</span>
            </div>
            
            <button class="video-btn" onclick="window.open('v10/index.html', '_blank')">Смотреть видеoпослание</button>
        `
    },
{
    type: "html",
    title: "T ∞ A", // Возвращаем титул на место — теперь он будет гореть как надо!
    content: `
    <style>
        .book-page:has(.absolute-clean-collage),
        .page-content:has(.absolute-clean-collage),
        div[data-page-num="223"],
        .p223 {
            background: transparent !important;
            background-color: transparent !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
        }

        .book-page:has(.absolute-clean-collage) .page-background,
        .book-page:has(.absolute-clean-collage) .reason-bg {
            display: none !important;
            background: transparent !important;
        }

        .final-message-btn {
            background: linear-gradient(
                135deg,
                #7d1f1f 0%,
                #922828 50%,
                #7d1f1f 100%
            );
            color: white;
            border: none;
            border-radius: 999px;
            padding: 12px 26px;
            font-family: Georgia, serif;
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            box-shadow: 0 4px 15px rgba(125,31,31,.25);
            cursor: pointer;
        }
    </style>

    <div class="absolute-clean-collage"
        style="
            position:absolute;
            inset:0;
            display:flex;
            flex-direction:column;
            align-items:center;
            background:transparent;
            box-sizing:border-box;
            z-index:5;
            padding-top: 130px; /* Опускаем фото ниже, чтобы сердечко и титул не перекрывались */
        ">

        <div style="
            height: 60%; 
            width:100%;
            padding: 0 12px;
            display:flex;
            justify-content:center;
            align-items:center;
        ">
            <img
                src="assets/images/final_collage.jpg"
                alt="Memory Collage"
                style="
                    width:100%;
                    height:100%;
                    object-fit:contain;
                    display:block;
                    -webkit-mask-image: radial-gradient(ellipse at center, black 92%, transparent 100%);
                    mask-image: radial-gradient(ellipse at center, black 92%, transparent 100%);
                "
            />
        </div>

        <div style="
            width:100%;
            margin-top: 25px; 
            display:flex;
            justify-content:center;
        ">
            <button
                class="final-message-btn"
                onclick="window.open('v11/index.html', '_blank')">
                Финальное послание
            </button>
        </div>

    </div>

    <script>
        (function() {
            setTimeout(() => {
                const el = document.querySelector('.absolute-clean-collage');
                if (!el) return;

                let parent = el.parentElement;
                while (
                    parent &&
                    !parent.classList.contains('book-page') &&
                    !parent.classList.contains('page-content')
                ) {
                    parent.style.background = 'transparent';
                    parent.style.backgroundColor = 'transparent';
                    parent.style.boxShadow = 'none';
                    parent = parent.parentElement;
                }

                if (parent) {
                    parent.style.background = 'transparent';
                    parent.style.backgroundColor = 'transparent';
                    parent.style.boxShadow = 'none';
                    parent.style.padding = '0';
                    
                    // Убираем возможный дубль h2
                    const badTitle = parent.querySelector('h2');
                    if (badTitle) badTitle.style.display = 'none';
                }
            }, 30);
        })();
    </script>
    `
}
];


// Изменяем let на var, чтобы браузер гарантированно видел переменную везде,
// и считываем сохраненную страницу, если она есть в памяти.
var currentPage = parseInt(sessionStorage.getItem('lastPage')) || 0;

// Функция отрисовки контента на странице (твой оригинальный код, только с сохранением строки)
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
    
    // Обновляем глобальную переменную, чтобы она не терялась
    currentPage = index;
}

function changePage(direction) {
    currentPage += direction;
    // Запоминаем страницу прямо в момент клика на кнопки "Вперед" / "Назад"
    sessionStorage.setItem('lastPage', currentPage);
    renderPage(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
