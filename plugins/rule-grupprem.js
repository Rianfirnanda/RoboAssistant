let handler =  m => m.reply(`
 *RULES* 

 Rules grup ini:
 • Hanya admin grup yang boleh open order digrup ini. 
   Jika melanggar, auto out grup.
 
 Mengapa demikian? karena jika trx tanpa admin disini 
 dan terjadi hal yang tidak diinginkan, 
 admin tidak bertanggung Jawab.
 Terima Kasih atas Pengertiannya.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
// handler.tags = ['info']
handler.command = /^rule(s|ss)$/i

export default handler
