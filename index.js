var AWS = require('aws-sdk');
var async = require('async');
const snsPublish = require('aws-sns-publish');

AWS.config.update({
    accessKeyId: 'AKIAIL4PH4IOCVJJU2UQ',
    secretAccessKey: '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',
    region: 'us-east-1'
});

var snsClient = new AWS.SNS();

var list  = [
    {phone:"5567998283070"}
]

async.eachOfSeries(list, function(value, key, callback) {
    var obj = {
        Message: 'Parabens, Uhuuuuuuu... Voce passou p/ (segunda fase) da selecao do ' +
        'melhor emprego do mundo do Dinneer. Veja como continuar acesse www.dinneer.com/jobs/2-fase',
        PhoneNumber: value.phone,
    }

    console.log('Mensagem Enviada: ', obj.Message)

    snsClient.publish(obj, function (err, data) {
        console.log('-----------------------------------------------------');
        console.log('Numero Enviado', value.phone);
        console.log('SUCCESS', data);
        setTimeout(function () {
            callback(err, data)
        },1500)
    });
}, function (err) {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    console.log("Fim")
});
list.forEach(function(value, key) {
});
