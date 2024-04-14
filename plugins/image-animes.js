import fetch from 'node-fetch'
let handler = async (m, {
    text,
    command,
    usedPrefix,
    conn
}) => {
    var list_input = [
        "anna",
        "asuna-yuki",
        "ayuzawa",
        "boruto",
        "chitoge",
        "emilia",
        "erza",
        "hinata",
        "inori",
        "kaga-kouko",
        "kakashi",
        "kaori-miyazono",
        "killua",
        "kotori-minami",
        "loli",
        "luffy",
        "mikasa",
        "mikosiba",
        "minato",
        "mio-akiyama",
        "mitsuki",
        "mizore-sirayuki",
        "nakiri-alice",
        "naruto",
        "natsu",
        "orochimaru",
        "rimuru",
        "riyas-gremori",
        "sagiri",
        "sakura",
        "sanji",
        "sarada",
        "sento-isuzu",
        "shana",
        "shiina",
        "shinka",
        "tanjirou",
        "ussop",
        "winry",
        "yukino",
        "yuzuki",
        "zoro"
    ]
    var salah_input = "*مثال:*\n" + usedPrefix + command + " zoro \n*[ قائمة الشخصيات ]*\n\n" + await ArrClean(list_input)
    if (!list_input.includes(text)) throw salah_input
    try {
        let res = 'https://api.zeeoneofc.my.id/api/anime/' + text + '?apikey=dhmDlD5x'
        m.reply(wait)
        conn.sendFile(m.chat, res, 'result', "نتيجة الأنمي: *" + text.toUpperCase() + "*", m)
    } catch (e) {
        throw eror
    }
}
handler.help = ["animes"]
handler.tags = ['anime']
handler.command = ["animes"]

export default handler

function ArrClean(str) {
    return str.map((v, index) => ++index + ". " + v).join('\r\n')
}