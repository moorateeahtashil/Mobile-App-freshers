const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onPageLoaded(args){
    const sideDrawer = app.getRootView();
    sideDrawer.gesturesEnabled=false;


}
var navigator = require("ui/frame");
exports.GoLogin = function(args) {
   navigator.topmost().navigate({
    moduleName: "Login/Login-page"
  });
}

exports.GoSignup = function(args) {
    navigator.topmost().navigate({
    moduleName: "Signup/Signup-page"
  });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onPageLoaded=onPageLoaded;
