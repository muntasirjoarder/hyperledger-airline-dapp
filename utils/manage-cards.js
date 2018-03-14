'use strict';

const FileSystemCardStore = require('composer-common').FileSystemCardStore;

const cardStore = new FileSystemCardStore();

return cardStore.getAll().then(function(cardMap){
   console.log(cardMap.keys());

   let cardName = 'muntasir@airlinev9';

   return cardStore.get(cardName);
}).then(function(idCard){
    console.log("Pulled first card from the system ", idCard.getUserName(),'@',idCard.getBusinessNetworkName())
    console.log("Connection Profile Name: ",idCard.getConnectionProfile().name)
    console.log('Enrollment:  ',idCard.getEnrollmentCredentials())
    console.log('Roles: ',idCard.getRoles())
}).catch((error)=>{
    console.log();
});