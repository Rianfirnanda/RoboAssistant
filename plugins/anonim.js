let handler =  m => m.reply(`
💬 *Cara Bermain anonymous chat* 

*/start*
_ketik /start untuk mencari_

*/next*
_cari Partner chat baru_

*/leave*
_keluar dari anonymous chat_



`.trim()) // Tambah sendiri kalo mau
handler.help = ['/anonim']
handler.tags = ['info']
handler.command = /^anon(im|ymous)$/i

export default handler
