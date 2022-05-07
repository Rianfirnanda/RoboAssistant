let handler =  m => m.reply(`
 *Hai* apa ada yang bisa Robo bantu?
 kalo iya, kamu cukup ketik */menu* aja
 nanti robo bantuin dengan berbagai fitur
 yang Robo punya :)

`.trim()) // Tambah sendiri kalo mau
handler.help = ['bot']
// handler.tags = ['info']
handler.command = /^bo(t|tt)$/i

export default handler
