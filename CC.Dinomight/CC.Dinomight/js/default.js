﻿// For an introduction to the Grid template, see the following documentation:
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
            var dinoMightSound = new Audio("/assets/dynomite.wav");
            dinoMightSound.volume = 1;
            dinoMightSound.play();
        }
        e.setPromise(WinJS.UI.processAll().done(function () {
            GameManager.game.init();
            GameManager.game.deal();        

            var battleLink = document.getElementById("battle-btn");
            var newGameLink = document.getElementById("new-game");

            battleLink.addEventListener("click", function (e) {
                e.preventDefault();
                if (battleLink.className.indexOf('disabled') > -1) {
                    return false;
                }

                var battleResults = GameManager.game.battle();                
                var playerScore = document.getElementById('player-score');
                var cpuScore = document.getElementById('cpu-score');
                var playerCard = document.getElementById('player-card');
                var cpuCard = document.getElementById('cpu-card');

                var cpuCardTitle = document.getElementById('cpu-card-title'),
                    cpuCardDetails = document.getElementById('cpu-card-details'),
                    playerCardTitle = document.getElementById('player-card-title'),
                    playerCardDetails = document.getElementById('player-card-details'),
                    cpuDetailsSection = document.getElementById('player-details'),
                    playerDetailsSection = document.getElementById('cpu-details');

                cpuDetailsSection.style.visibility = 'visible';
                playerDetailsSection.style.visibility = 'visible';

                if (!battleResults.playerWon) {
                    playerDetailsSection.style.borderColor = 'green';
                    cpuDetailsSection.style.borderColor = 'transparent';
                } else {
                    cpuDetailsSection.style.borderColor = 'green';
                    playerDetailsSection.style.borderColor = 'transparent';
                }

                playerCard.src = '/images/dinosaurs/' + battleResults.playerDino.name + '.png';
                cpuCard.src = '/images/dinosaurs/' + battleResults.cpuDino.name + '.png';

                cpuCardTitle.textContent = battleResults.cpuDino.name;
                cpuCardDetails.textContent = battleResults.cpuDino.description;
                playerCardTitle.textContent = battleResults.playerDino.name;
                playerCardDetails.textContent = battleResults.playerDino.description;

                playerScore.innerHTML = battleResults.player.score;
                cpuScore.innerHTML = battleResults.cpu.score;

                if (battleResults.cpu.score == 0 || battleResults.player.score == 0) {                    
                    battleLink.className += 'disabled';
                    battleLink.setAttribute('style', 'display:none');
                    newGameLink.setAttribute('style', 'display:block');
                }

            }, false);
                        
            newGameLink.addEventListener('click', function (e) {
                var playerCard = document.getElementById('player-card');
                var cpuCard = document.getElementById('cpu-card');

                newGameLink.setAttribute('style', 'display:none');                
                battleLink.className -= 'disabled';
                playerCard.src = '/images/smalllogo.png';
                cpuCard.src = '/images/smalllogo.png';

                GameManager.game.deal();
                
                var playerScore = document.getElementById('player-score');
                var cpuScore = document.getElementById('cpu-score');

                playerScore.innerHTML = 18;
                cpuScore.innerHTML = 18;

                battleLink.setAttribute('style', 'display:block');

            }, false);

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
