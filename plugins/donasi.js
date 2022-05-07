let handler =  m => m.reply(`
╭─「 *Donasi Member Premium* 」
│
│
│ • Member premium memiliki  
│   *akses tanpa batas*  
│   terhadap penggunaan Bot dan 
│   bebas memasukkan bot ke grup
│   manapun (Max 10 grup)
│  
│   *Harga Sewa Bot*
│   10k : 7 hari
│   15k : 14 Hari
│   20k : 1 Bulan
│ 
│ • Telkomsel : 082298468671
│ • Tri : 089606032177
│
│ • Untuk Media pembayaran lain 
│   *hubungi Owner*
│   Ketik */owner*
│
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
