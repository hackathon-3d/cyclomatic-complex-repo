var cc = cc || {};

cc.domain = {
    suits: [],
    deck: [],

    dino: function(name, group, speed, weight, lethality, evade){
        this.name = name;
        this.group = group;
        this.speed = speed;
        this.weight = weight;        
        this.lethality = lethality;
        this.evade = evade;    
    },

    game: function () {
        this.init = function () {
            suits = [
                { key: "Triassic", title: "Triassic" },
                { key: "Jurassic", title: "Jurassic" },
                { key: "Cretaceous ", title: "Cretaceous" }
            ];
            deck = [
                new cc.domain.dino('alwalkeria', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('camposaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('chindesaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('eocursor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('eodromaeus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('eoraptorlunensis', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('guaibasaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('herrerasaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('liliensternus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('riojasaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('sanjuansaurus', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('staurikosaurus', suits[0], 85, 35, 90, 75),
                
                new cc.domain.dino('allosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('apatosaurs', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('brachiosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('camarasaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('ceratosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('compsognathus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('diplodocus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('dryosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('epidexipteryx', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('heterodontosauridae', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('kentrosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('stegosaurus', suits[1], 10, 99, 15, 15),

                new cc.domain.dino('alaskacephale', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('alectrosaurus', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('archaeoceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('baryonyx', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('daspletosaurus', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('deltadromeus', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('proceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('saurolophus', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('stygimoloch', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('tyrannosaurus', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('utahraptor', suits[2], 20, 55, 50, 25)
            ]
        };

        var playerone = {
            cards: [],
            getTopCard: function () {
                return this.cards[0];
            },
            score: 0
        };

        var cpuplayer = {
            cards: [],
            getTopCard: function () {
                return this.cards[0];
            },
            score: 0
        };

        this.deal = function () {
            var cloneDeck = deck.slice(0);
            var counter = 1;
            playerone.cards = [];
            playerone.cards = [];

            while (cloneDeck.length > 0) {                
                var index = Math.floor(Math.random() * cloneDeck.length);
                var card = cloneDeck[index];

                if (counter % 2 == 1) {
                    playerone.cards.push(card);
                } else {
                    cpuplayer.cards.push(card);
                }

                cloneDeck.splice(index, 1);
                counter += 1;
            }
        };

        this.battle = function () {
            var didPlayerWin = function (playerCard, cpuCard) {
                // Compute card stats 

                return true;
            };

            var playerCard = playerone.getTopCard();
            var cpuCard = cpuplayer.getTopCard();            
            var playerWon = didPlayerWin(playerCard, cpuCard);
            playerone.cards.splice(0, 1);
            cpuplayer.cards.splice(0, 1);

            // Add the winners card back to their deck as well as the losers card to their deck.
            if (playerWon) {                
                playerone.cards.push(cpuCard);
                playerone.cards.push(playerCard);
            } else {                
                cpuplayer.cards.push(playerCard);
                cpuplayer.cards.push(cpuCard);
            }

            playerone.score = playerone.cards.length;
            cpuplayer.score = cpuplayer.cards.length;

            var results = {
                playerDino: playerCard,
                cpuDino: cpuCard,
                playerWon: playerWon,
                player: playerone,
                cpu: cpuplayer
            };

            return results;           
        }
    }
}