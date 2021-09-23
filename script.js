function getTransformation (inf, pronoun) {

    let conjugation1 = false
    let conjugation2 = false
    inf = inf.toLowerCase()
    pronoun = pronoun.toLowerCase()

    //Узнаем спряжение глагола
    if (
        //Исключения для первого спряжения
        inf === "брить"
        || inf === "стелить"
    ) {
        conjugation1 = true
    }
    if (
        //Исключения для второго спряжения
        inf === "смотреть"
        || inf === "видеть"
        || inf === "ненавидеть"
        || inf === "держать"
        || inf === "терпеть"
        || inf === "слышать"
        || inf === "зависеть"
        || inf === "вертеть"
        || inf === "дышать"
        || inf === "обидеть"
        || inf === "гнать"
    ) {
        conjugation2 = true
    }
    if (!conjugation1 && !conjugation2) {
        //-ИТЬ
        if (inf.slice(inf.length - 3, inf.length) === "ить") {
            conjugation2 = true
        } else {
            conjugation1 = true
        }
    }

    //Преобразование
    switch (pronoun) {
        //1 лицо
        case "я":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "у"
                    break
                }
                if (inf[inf.length - 3] === "я") {
                    inf = inf.slice(0, inf.length - 3) + "ю"
                    break
                }
                if (
                    inf[inf.length - 3] === "с"
                    || inf[inf.length - 3] === "ч"
                    || inf[inf.length - 3] === "щ"
                    || inf[inf.length - 3] === "ш"
                ) {
                    inf = inf.slice(0, inf.length - 2) + "у"
                } else {
                    inf = inf.slice(0, inf.length - 2) + "ю"
                }
            } else {
                if (
                    inf[inf.length - 4] === "с"
                    || inf[inf.length - 4] === "ч"
                    || inf[inf.length - 4] === "щ"
                    || inf[inf.length - 4] === "ш"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "у"
                } else {
                    inf = inf.slice(0, inf.length - 3) + "ю"
                }
            }

            break
        case "мы":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                    || inf[inf.length - 3] === "я"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ем"
                    break
                }
                inf = inf.slice(0, inf.length - 2) + "ем"
            } else {
                inf = inf.slice(0, inf.length - 3) + "им"
            }
            break
        //2 лицо
        case "ты":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                    || inf[inf.length - 3] === "я"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ешь"
                    break
                }
                inf = inf.slice(0, inf.length - 2) + "ешь"
            } else {
                inf = inf.slice(0, inf.length - 3) + "ишь"
            }
            break
        case "вы":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                    || inf[inf.length - 3] === "я"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ете"
                    break
                }
                inf = inf.slice(0, inf.length - 2) + "ете"
            } else {
                inf = inf.slice(0, inf.length - 3) + "ите"
            }
            break
        //3 лицо
        case "она":
        case "оно":
        case "он":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                    || inf[inf.length - 3] === "я"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ет"
                    break
                }
                inf = inf.slice(0, inf.length - 2) + "ет"
            } else {
                inf = inf.slice(0, inf.length - 3) + "ит"
            }
            break
        case "они":
            if (conjugation1) {
                if (
                     inf[inf.length - 3] === "о"
                    || inf[inf.length - 3] === "э"
                    || inf[inf.length - 3] === "и"
                    || inf[inf.length - 3] === "е"
                    || inf[inf.length - 3] === "ы"
                    || inf[inf.length - 3] === "у"
                    || inf[inf.length - 3] === "ё"
                    || inf[inf.length - 3] === "ю"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ут"
                    break
                }
                if (inf[inf.length - 3] === "я") {
                    inf = inf.slice(0, inf.length - 3) + "ют"
                    break
                }
                if (
                    inf[inf.length - 3] === "с"
                    || inf[inf.length - 3] === "ч"
                    || inf[inf.length - 3] === "щ"
                    || inf[inf.length - 3] === "ш"
                ) {
                    inf = inf.slice(0, inf.length - 2) + "ут"
                } else {inf = inf.slice(0, inf.length - 2) + "ют"}
            } else {
                if (
                    inf[inf.length - 4] === "с"
                    || inf[inf.length - 4] === "ч"
                    || inf[inf.length - 4] === "щ"
                    || inf[inf.length - 4] === "ш"
                ) {
                    inf = inf.slice(0, inf.length - 3) + "ат"
                } else {
                    inf = inf.slice(0, inf.length - 3) + "ят"
                }

            }
            break
    }

    return inf
}

console.log(getTransformation("гадать", "я"))









