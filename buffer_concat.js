var af = new Buffer("African Swallow?");
var eu = new Buffer("European swallow?");
var question = new Buffer("What is the air speed velocity of an unladen ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());