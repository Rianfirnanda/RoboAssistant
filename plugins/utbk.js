let handler =  m => m.reply(`
「 *Info UTBK Unib* 」

*List Grup UTBK :*
https://pastelink.net/utbkunib

*Informasi penting UTBK :*
https://pastelink.net/jumlahsoal

*Jadwal UTBK*
https://pastelink.net/jadwalutbk



`.trim()) // Tambah sendiri kalo mau
handler.help = ['/utbk']
handler.tags = ['info']
handler.command = /^ut(bk|bk)$/i

export default handler
