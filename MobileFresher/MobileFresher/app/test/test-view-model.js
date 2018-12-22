const observableModule = require("data/observable");

function TestViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        signIn: function () {
            const email = this.email;
            const password = this.password;

            /* ***********************************************************
            * Call your custom signin logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = TestViewModel;



const Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
function LoginViewModel() {
    const viewModel = new Observable();

viewModel.select = function (db) {
    db.get("SELECT email FROM TblUser").then(rows => {

        viewModel.set("setemail", rows[0]);
        viewModel.set("setsurname",rows[0]);

        viewModel.set("email",this.get("setemail"));
        viewModel.set("surname", this.get("setsurname"));

    }, error => {
        console.log("SELECT ERROR", error);
    });
  }

  return viewModel;
}

module.exports = LoginViewModel;
