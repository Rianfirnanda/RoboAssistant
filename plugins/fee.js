let handler =  m => m.reply(`
 *FEE* 

 ALL RESTO MINBEL 20K-30K:
 Fee 9k.
 Khusus Haus dan minbel 40k lainnya:
 Fee 10k.
 All Resto Tanpa Free Ongkir.
 
 • DAFTAR RESTO PROMO GEDE.
 Minbel 80-100rb:
 FEE 15K FREE ONGKIR.
 FEE 13K TANPA FREE ONGKIR.
 Minbel diatas 100rb:
 FEE 17K FREE ONGKIR.
 FEE 15K TANPA FREE ONGKIR

`.trim()) // Tambah sendiri kalo mau
handler.help = ['fee']
// handler.tags = ['info']
handler.command = /^f(ee|eee)$/i

export default handler
