var api_key = 'key-digit';
var domain = 'sandboxdigit.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var path = require('path');

var filepath = path.join(__dirname, 'CSV.zip');
var data = {
  from: 'Komarichev Sergey <komarichev@gmail.com>',
  to: 'komarichev@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
  attachment: filepath
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
