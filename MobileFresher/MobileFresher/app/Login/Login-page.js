const LoginViewModel = require("./Login-view-model");
var Sqlite = require("nativescript-sqlite");
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;

     page.bindingContext = new LoginViewModel();


   
}



function onSigninButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

if (Sqlite.exists("mobilefreshers.db")) {
  Sqlite.deleteDatabase("mobilefreshers.db");
}
if (!Sqlite.exists("mobilefreshers.db")) {
  Sqlite.copyDatabase("mobilefreshers.db");
}

var db_name = "mobilefreshers.db";

new Sqlite(db_name).then(db => {
    bindingContext.signIn(db);
 });
}

function onForgotPasswordTap() {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
