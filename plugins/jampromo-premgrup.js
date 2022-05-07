let handler =  m => m.reply(`
 *BATAS HABIS JAM PROMO RESTO* 

 Janji Jiwa: Jam 09.00 WIB
 Roti:O: Jam 09.00 WIB
 Traffic Bun: Paling Cepet Jam 15.00 WIB
 Bento Yay: Jam 09.00 WIB
 Street Boba: Random
 Gokana: Random
 Mujigae: Random

`.trim()) // Tambah sendiri kalo mau
handler.help = ['jampromo']
// handler.tags = ['info']
handler.command = /^jam(promo|promote)$/i

export default handler
