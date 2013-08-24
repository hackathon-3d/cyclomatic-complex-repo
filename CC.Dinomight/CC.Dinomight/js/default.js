﻿// For an introduction to the Grid template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232446
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var homeUrl = "/html/homePage.html";
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

    function draw() {
        // call game.draw
    }

    WinJS.Application.onactivated = function (e) {
        if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            game.init();
        }
        e.setPromise(WinJS.UI.processAll().done(function () {
            // touch event is probably different, but you get the point...
            //$('#[buttonid]').click(function (e) { GameManager.draw(); });

            //WinJS.Navigation.navigate(GameManager.state.config.currentPage);
        }));
    };

    WinJS.Application.start();

    WinJS.Namespace.define("GameManager", {
        navigateHome: navigateHome,
        draw: draw,
        game: game,
        state: state
    });
})();
