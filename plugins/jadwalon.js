let handler =  m => m.reply(`
 *Jadwal on Admin* 
 
 1. BAMZ
 Jam 07.00 - 15.00 WIB
 
 2. Den Wahyu
 Jam 08.00 - 15.00 WIB
 
 3. YABZ
 Jam 07.30 - 12.00 WIB
 @Hallosmile On kembali 15.00 - Malam Tergangung situasi.
 
 4. Iyanz
 08.00 - 15.00
 
 5. Adhonz
 Istirahat ketika Jam sholat.
 
 Admin kadang on sahur juga tergantung mood:v

`.trim()) // Tambah sendiri kalo mau
handler.help = ['jadwalon']
// handler.tags = ['info']
handler.command = /^jadwal(on|aktif)$/i

export default handler
