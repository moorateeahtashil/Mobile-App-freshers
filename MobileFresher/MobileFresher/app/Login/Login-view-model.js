const observableModule = require("data/observable");
var Sqlite = require("nativescript-sqlite");
function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        signIn: function (db) {
            const email = this.email;
            const password = this.password;
	    var userfound = 0;	
          /* var dialogs = require("ui/dialogs");
dialogs.alert("Some message")
    .then(function () { dialogs.alert("Alert closed!"); });*/

	db.each('select * from TblUser',function (err, count) {
           
	});
	
     }
 });

    return viewModel;
}

module.exports = LoginViewModel;

