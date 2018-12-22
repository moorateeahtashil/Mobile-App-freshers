const observableModule = require("data/observable");

function TestViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = TestViewModel;
