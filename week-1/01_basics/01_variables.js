const accountId = 12932;
let accountEmail = "test@mail.com";
var accountPassword = "12345";
/* Prever not to use var 
because of issue in block scope and functional scope
*/
accountCity = "Jaipur"; // NEVER use this

// accountId = 1;  // NOT allowed
accountEmail = "hc@mail.com";
accountCity = "Bangaluru";

let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
