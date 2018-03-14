'use strict';

const FileSystemCardStore = require('composer-common').FileSystemCardStore;

const cardStore = new FileSystemCardStore();

const cardName= 'muntasir@airlinev9';

cardStore.get(cardName).then(function(idCard){
    console.log("CardName: ", cardName)
    console.log("card UserName: ", idCard.getUserName())
    console.log("Business Network Name: ", idCard.getBusinessNetworkName())
    console.log("Connection Profile", idCard.getConnectionProfile())
}).catch((error)=>{
    console.log(error);
})