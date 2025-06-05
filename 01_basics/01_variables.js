const accountId = 144553;
let accountEmail = "mradulrajsingh61@gmail.com";
var accountPassword = "12345"
accountCity = "Jaipur";

let  accountState;
console.log(accountId);

/*
Prefer not to use var
because of the issue of functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);