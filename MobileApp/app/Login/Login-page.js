const LoginViewModel = require("./Login-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new LoginViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
var top = require("ui/frame");
var view = require("ui/core/view");
var drawer;
var frames;
exports.pageLoaded = function(args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");
    frames = view.getViewById(page, "frame");
};

exports.toggleDrawer = function() {
  drawer.toggleDrawerState(); 
};

exports.goHome = function() {
  top.topmost().navigate({
    moduleName: "Test/Test-page"
  });
};
