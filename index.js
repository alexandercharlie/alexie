const recastai = require('recastai')

const client = new recastai.request('670fb7a17561bea2e97aff69cb08ecdb', 'en')

client.converseText('hello')
  .then(function(res) {
    if (res.action) { console.log('Action: ', res.action.slug) }
    const reply = res.reply()
    console.log('Reply: ', reply)
  })