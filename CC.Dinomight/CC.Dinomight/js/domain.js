var cc = cc || {};

cc.domain = {
    suits: [
        { key: "Triassic", title: "Triassic" },
        { key: "Jurassic", title: "Jurassic" },
        { key: "Cretaceous ", title: "Cretaceous" }
    ],

    deck: [
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[0], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },

        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[1], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },

        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 },
        { group: suits[2], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, value: 0 }
    ],

    game: function () {
        var playerone = {
            cards: [],
            getTopCard: function () {
                return cards[0];
            }
        };

        var cpuplayer = {
            cards: [],
            getTopCard: function () {
            return cards[0];
        }
        };

        var deal = function () {
            var cloneDeck = deck.slice(0);

            while (cloneDeck.length > 0) {
                var counter = 1;
                var index = Math.floor(Math.random() * cloneDeck.length);
                var card = cloneDeck[index];

                if (counter % 2 == 1) {
                    playerone.cards.push(card);
                } else {
                    cpuplayer.cards.push(card);
                }

                cloneDeck.splice(index, 1);
            }
        };

        var battle = function () {
            if (playerone.cards[0].value > cpuplayer.cards[0].value) {
                var card = cpuplayer.cards.splice(0, 1);
                playerone.cards.push(card);
            } else {
                var card = playerone.cards.splice(0, 1);
                cpuplayer.cards.push(card);
            }
        }
    }
}