let handler =  m => m.reply(`
 *Admin* 
 
 Admin grup:
 1. BAMZ
 2. Den Wahyu
 3. YABZ
 4. Iyanz
 5. Adhonz

`.trim()) // Tambah sendiri kalo mau
handler.help = ['list']
// handler.tags = ['info']
handler.command = /^adm(in|n)$/i

export default handler
