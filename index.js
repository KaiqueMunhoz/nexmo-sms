const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'f838c88a',
  apiSecret: '8TUmmVIJFC0jjzvN',
});

const from = 'Vonage APIs';
const to = '5535988597863';
const text = 'Hello from Vonage SMS API';

nexmo.message.sendSms(from, to, text);