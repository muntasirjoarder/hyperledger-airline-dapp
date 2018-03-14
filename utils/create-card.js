'use strict';

const idCardClass = require('composer-common').IdCard;

let metadata = {version: 1, userName: 'muntasir',enrollmentSecret: "abcarete",businessNetwork: "airlinev9"};
let connectionprofile =  { name: 'hlfv1',
type: 'hlfv1',
orderers: [ { url: 'grpc://localhost:7050' } ],
ca: { url: 'http://localhost:7054', name: 'ca.org1.example.com' },
peers: 
 [ { requestURL: 'grpc://localhost:7051',
     eventURL: 'grpc://localhost:7053' } ],
channel: 'composerchannel',
mspID: 'Org1MSP',
timeout: 300 };

const newIdCard =new idCardClass(metadata,connectionprofile);

newIdCard.toDirectory('/home/muntasir/.composer/cards/muntasir@airlinev9').then(function(){
    console.log('new card created');
});



