let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-0934-4807]
│ •  [0857-0934-4807]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
