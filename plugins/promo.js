let handler =  m => m.reply(`
 *Daftar Promo* 

 Berikut adalah daftar Resto gofood
 yang sedang promo ya:

 - Janji Jiwa :
  Minbel 80rb diskon 90rb

 - Street Boba :
  Minbel 80rb diskon 75rb

 - Roti o :
  Minbel 80rb diskon 80/85rb

 - Street Boba :
  Minbel 80rb diskon 75rb

 - Traffic Bun :
  Minbel 80rb diskon 85rb

 - Mujigae : 
 Minbel 150rb diskon 130rb

 - Kopi Soe : 
 Minbel 80rb diskon 80rb

 - Dailybox :
  Minbel 80rb diskon 80rb

 - Bento Yay :
  Minbel 80rb diskon 90rb

 - Gildak : 
 Minbel 80rb diskon 70rb

 - Kokumi : 
 Minbel 80rb diskon 80rb

 - Lapis sangkuriang : 
 Minbel 80rb diskon 80rb

 - Hokben : 
 Minbel 150rb diskon 80rb

 - Xi Fu Tang :
  Minbel 100rb diskon 96rb

 - Burger Bangor :
  Minbel 100rb diskon 85rb
  
 - Mangkokku : 
 Minbel 100rb diskon 95rb

 - Kitchenette :
  Minbel 100rb Diskon 96rb-100rb

 - Pastaria :
  Minbel 100rb Diskon 96rb-100rb

 - The People's Cafe :
  Minbel 100rb Diskon 96rb-100rb

 - Gindaco :
  Minbel 150rb diskon 125rb

 - Mujigae :
  Minbel 150rb diskon 130rb

 - Kopi Soe :
  Minbel 80rb diskon 80rb

 - Sei sapi kana :
  Minbel 80rb diskon 80rb

 - Gokana Ramen :
  Minbel 100rb Diskon 96rb-100rb

`.trim()) // Tambah sendiri kalo mau
handler.help = ['promo']
// handler.tags = ['info']
handler.command = /^pro(mo|mote)$/i

export default handler
