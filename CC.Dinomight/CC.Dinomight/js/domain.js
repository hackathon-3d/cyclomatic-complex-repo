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
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                new cc.domain.dino('Velociraptor', suits[0], 85, 35, 90, 75),
                
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),
                new cc.domain.dino('Brontosaurus', suits[1], 10, 99, 15, 15),

                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25),
                new cc.domain.dino('Triceratops', suits[2], 20, 55, 50, 25)
            ]
        };

        var playerone = {
            cards: [],
            getTopCard: function () {
                return cards[0];
            },
            score: 0
        };

        var cpuplayer = {
            cards: [],
            getTopCard: function () {
                return cards[0];
            },
            score: 0
        };

        this.deal = function () {
            var cloneDeck = deck.slice(0);
            var counter = 1;

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

            var playerCard = playerone.cards[0];
            var cpuCard = cpuplayer.cards[0];            
            var playerWon = didPlayerWin(playerCard, cpuCard);

            if (playerWon) {
                var card = cpuplayer.cards.splice(0, 1);
                playerone.cards.push(card);                
            } else {
                var card = playerone.cards.splice(0, 1);
                cpuplayer.cards.push(card);                
            }

            var results = {                                
                winningDino: playerWon ? playerCard : cpuCard,
                losingDino: playerWon ? cpuCard : playerCard
            };

            return results;           
        }
    }
}