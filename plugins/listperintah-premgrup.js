let handler =  m => m.reply(`
 *Cara menggunakan Bot* 


Ketik kode dibawah untuk melihat note grup ini:
1. /promo
2. /fee
3. /admin
4. /jadwalon
5. /sistem
6. /rules

•Penjelasan:
/promo = untuk melihat daftar diskon reto
/fee = Untuk mengetahui harga jasa order gofood
/admin = List untuk melihat siap admin open Jasa digrup ini
/jadwalon = Untuk mengetahui jadwal online Admin
/system = Untuk mengetahui System Jasder grup ini
/rules = Untuk mengetahui Rules/Aturan grup ini

•NOTE: Gunakan */* agar kode tersebut dapat diakses.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['list']
// handler.tags = ['info']
handler.command = /^li(st|s)$/i

export default handler
