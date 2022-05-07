let handler =  m => m.reply(`
 *Sistem Pemesanan* 

 System Jasder kami:
1. Kirim Alamat
2. Kirim Resto dan Menunya
3. Admin cek pesanan dan cek berapa total diskon.
4. Setelah fix harga, pembeli membayar makanan + fee 
5. Cek ulang orderan

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sistem']
// handler.tags = ['info']
handler.command = /^sis(tem|aktif)$/i

export default handler
