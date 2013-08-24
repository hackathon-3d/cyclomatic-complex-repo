// For an introduction to the Grid template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232446
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var homeUrl = "/pages/startPage.html";
    var game = new cc.domain.game();
    var state = cc.GameState;
    state.load();

    // Navigation support
    function navigateHome() {
        var loc = WinJS.Navigation.location;
        if (loc !== "" && loc !== homeUrl) {
            // Navigate
            WinJS.Navigation.navigate(homeUrl);

            // Update the current location for suspend/resume
            GameManager.state.config.currentPage = homeUrl;
        }
    }

    WinJS.Application.onactivated = function (e) {
        if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            GameManager.game.init();
        }
        e.setPromise(WinJS.UI.processAll().done(function () {
            GameManager.game.init();
            GameManager.game.deal();

            document.getElementById("battle-btn").addEventListener("click", function (e) {
                e.preventDefault();
                GameManager.game.battle();
            }, false);

            // touch event is probably different, but you get the point...
            //$('#battle-btn').click(function (e) {
            //    e.preventDefault();
            //    GameManager.game.battle();
            //});

            WinJS.Navigation.navigate(GameManager.state.config.currentPage);
        }));
    };

    WinJS.Application.start();

    WinJS.Namespace.define("GameManager", {
        navigateHome: navigateHome,
        game: game,
        state: state
    });
})();
