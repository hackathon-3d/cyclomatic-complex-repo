var cc = cc || {};

cc.domain = {
    suits: [],
    deck: [],

    dino: function(name, group, speed, weight, lethality, evade, description){
        this.name = name;
        this.group = group;
        this.speed = speed;
        this.weight = weight;        
        this.lethality = lethality;
        this.evade = evade;
        this.description = description;
    },

    game: function () {
        this.init = function () {
            var getStat = function () {
                return Math.random() * 100;
            }

            suits = [
                { key: "Triassic", title: "Triassic" },
                { key: "Jurassic", title: "Jurassic" },
                { key: "Cretaceous ", title: "Cretaceous" }
            ];
            deck = [
                new cc.domain.dino('alwalkeria', suits[0], getStat(), getStat(), getStat(), getStat(), "This dinosaur also has a heterodont dentition in the upper jaw, meaning that the teeth are differently shaped depending on their position in the jaw. Similarly to Eoraptor and basal sauropodomorphs, the front teeth are slender and straight, while the teeth in the sides of the jaw are curved backwards like those of predatory theropods, although none of these teeth are serrated. This arrangement of teeth is neither clearly herbivorous nor clearly carnivorous, which suggests that this dinosaur was an omnivore with a varied diet, including insects, small vertebrates, and plant material."),
                new cc.domain.dino('camposaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Camposaurus is a small, carnivorous, theropod dinosaur. Its approximate length and weight cannot be reliably estimated because of the sparse material that is known from this genus."),
                new cc.domain.dino('chindesaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Chindesaurus (/ˌtʃɪndɨˈsɔrəs/ chin-di-sawr-əs) is a genus of herrerasaurid theropod dinosaur that lived approximately 216 million years ago during the latter part of the Triassic Period in what is now the Southwestern United States. Chindesaurus was a small, bipedal, carnivore, that could grow up to 2.4 m (7.9 ft) long."),
                new cc.domain.dino('eocursor', suits[0], getStat(), getStat(), getStat(), getStat(), "Eocursor (meaning 'dawn runner') was a primitive genus of dinosaur which lived during the Late Triassic (Norian age), around 210 million years ago. It was an ornithischian which lived in what is now South Africa. Remains of this animal have been found in the Lower Elliot Formation and are the most complete known from a Triassic ornithischian, shedding new light on the origin of this group"),
                new cc.domain.dino('eodromaeus', suits[0], getStat(), getStat(), getStat(), getStat(), "Eodromaeus (meaning 'dawn runner') is an extinct genus of basal theropod dinosaur known from the Late Triassic period of Argentina.[1] It has been cited by Sereno as resembling a supposed common ancestor to all dinosaurs, the 'Eve' of the dinosaurs.[2]"),
                new cc.domain.dino('eoraptorlunensis', suits[0], getStat(), getStat(), getStat(), getStat(), "Eoraptor (pron.:'eE-oh-RAP-tor') was one of the worlds earliest dinosaurs. It was a two-legged saurischian, close to the ancestry of theropods and sauropodomorphs.[1] It lived ca. 231.4 million years ago,[2] in Western Gondwana, what is now the northwestern region of Argentina. It is known from several well-preserved skeletons. When first described in 1993, it was considered to be one of the earliest, if not the earliest known dinosaur. Eoraptor has heterodont dentition, suggesting that it was omnivorous, and that this feeding strategy had evolved early on in dinosaurs."),
                new cc.domain.dino('guaibasaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Guaibasaurus is an extinct genus of basal dinosaur known from the Triassic of Rio Grande do Sul, southern Brazil."),
                new cc.domain.dino('herrerasaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Herrerasaurus was one of the earliest dinosaurs. Its name means 'Herreras lizard', after the rancher who discovered the first specimen. All known fossils of this carnivorous dinosaur have been discovered in rocks of late Ladinian age (middle Triassic according to the ICS, dated to 231.4 million years ago) in northwestern Argentina.[1] The type species, Herrerasaurus ischigualastensis, was described by Osvaldo Reig in 1963[2] and is the only species assigned to the genus. Ischisaurus and Frenguellisaurus are synonyms."),
                new cc.domain.dino('liliensternus', suits[0], getStat(), getStat(), getStat(), getStat(), "Liliensternus (pron.:'LIL-ee-en-SHTER-nus') is an extinct genus of coelophysoid theropod dinosaur that lived approximately 205 million years ago during the latter part of the Triassic Period in what is now Germany. Liliensternus' was a moderately large, bipedal, ground-dwelling carnivore, that could grow up to 5.15 m (16.9 ft) long. It is the best represented Triassic theropod from Europe and one of the largest known"),
                new cc.domain.dino('riojasaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Riojasaurus (meaning 'ioja lizard') was a herbivorous prosauropod dinosaur named after La Rioja Province in Argentina where it was found by José Bonaparte. It lived during the Late Triassic and grew to about 10 metres (33 ft) long.[1] Riojasaurus is the only known riojasaurid to live in South America."),
                new cc.domain.dino('sanjuansaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Sanjuansaurus ('San Juan Province lizard') is a genus of herrerasaurid dinosaur from the Late Triassic-age Ischigualasto Formation of northwestern Argentina."),
                new cc.domain.dino('staurikosaurus', suits[0], getStat(), getStat(), getStat(), getStat(), "Staurikosaurus (Pronounced 'STORE-ee-koh-SAWR-us', 'Southern Cross lizard') is a genus of herrerasaurid[1] dinosaur from the Late Triassic of Brazil, found in Paleorrota Geopark."),
                
                new cc.domain.dino('allosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Allosaurus /ˌælɵˈsɔrəs/ is a genus of large theropod dinosaur that lived 155 to 150 million years ago during the late Jurassic period (Kimmeridgian to early Tithonian[1]). The name 'Allosaurus' means 'different lizard'. It is derived from the Greek ἄλλος/allos ('different, other') and σαῦρος/sauros ('lizard / generic reptile')."),
                new cc.domain.dino('apatosaurs', suits[1], getStat(), getStat(), getStat(), getStat(), "Apatosaurus /əˌpætɵˈsɔrəs/, including the popular but scientifically redundant synonym Brontosaurus, is a genus of sauropod dinosaur that lived from about 154 to 150 million years ago, during the Jurassic Period (Kimmeridgian and early Tithonian ages)."),
                new cc.domain.dino('brachiosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Brachiosaurus /ˌbrækiəˈsɔrəs/ is a genus of sauropod dinosaur from the Jurassic Morrison Formation of North America. It was first described by Elmer S. Riggs in 1903 from fossils found in the Grand River Canyon (now Colorado River) of western Colorado, in the United States. Riggs named the dinosaur Brachiosaurus altithorax, declaring it 'the largest known dinosaur'. Brachiosaurus had a proportionally long neck, small skull, and large overall size, all of which are typical for sauropods. However, the proportions of Brachiosaurus are unlike most sauropods. The forelimbs were longer than the hindlimbs, which result in a steeply inclined trunk. Also, while the tail is a typical long dinosaur tail, it was relatively short for a sauropod."),
                new cc.domain.dino('camarasaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Camarasaurus (/ˌkæmərəˈsɔrəs/ kam-ə-rə-sawr-əs) meaning 'chambered lizard', referring to the hollow chambers in its vertebrae (Greek καμαρα/kamara meaning 'vaulted chamber', or anything with an arched cover, and σαυρος/sauros meaning 'lizard') was a genus of quadrupedal, herbivorous dinosaurs.[1] It was the most common of the giant sauropods to be found in North America. Its fossil remains have been found in the Morrison Formation of Colorado and Utah, dating to the late Jurassic Period (late Oxfordian to Tithonian stages), between 155 and 145 million years ago."),
                new cc.domain.dino('ceratosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Ceratosaurus /ˌsɛrətɵˈsɔrəs/ meaning 'horned lizard', in reference to the horn on its nose (Greek κερας/κερατος, keras/keratos meaning 'horn' and σαυρος/sauros meaning 'lizard'), was a large predatory theropod dinosaur from the Late Jurassic Period (Kimmeridgian to Tithonian), found in the Morrison Formation of North America, and the Lourinhã Formation of Portugal. It was characterized by large jaws with blade-like teeth, a large, blade-like horn on the snout and a pair of hornlets over the eyes. The forelimbs were powerfully built but very short. The bones of the sacrum were fused (synsacrum) and the pelvic bones were fused together and to this structure (Sereno 1997) (i.e. similar to modern birds). A row of small osteoderms was present down the middle of the back."),
                new cc.domain.dino('compsognathus', suits[1], getStat(), getStat(), getStat(), getStat(), "Compsognathus (/kɒmpˈsɒɡnəθəs/;[1] Greek kompsos/κομψός; 'elegant', 'refined' or 'dainty', and gnathos/γνάθος; 'jaw')[2] is a genus of small, bipedal, carnivorous theropod dinosaurs. Members of its single species Compsognathus longipes could grow to the size of a turkey. They lived around 150 million years ago, the latest Kimmeridgian age of the late Jurassic period, in what is now Europe. Paleontologists have found two well-preserved fossils, one in Germany in the 1850s and the second in France more than a century later. Today, C. longipes is the only recognized species, although the larger specimen discovered in France in the 1970s was once thought to belong to a separate species and named C. corallestris. Many presentations still describe Compsognathus as 'chicken-sized' dinosaurs because of the small size of the German specimen, which is now believed to be a juvenile. Compsognathus longipes is one of the few dinosaur species for which diet is known with certainty: the remains of small, agile lizards are preserved in the bellies of both specimens. Teeth discovered in Portugal may be further fossil remains of the genus."),
                new cc.domain.dino('diplodocus', suits[1], getStat(), getStat(), getStat(), getStat(), "Diplodocus (/dɪˈplɒdəkəs/,[1][2] /daɪˈplɒdəkəs/,[2] or /ˌdɪploʊˈdoʊkəs/[1]) is an extinct genus of diplodocid sauropod dinosaur whose fossils were first discovered in 1877 by S. W. Williston. The generic name, coined by Othniel Charles Marsh in 1878, is a Neo-Latin term derived from Greek διπλός (diplos) 'double' and δοκός (dokos) 'beam',[1][3] in reference to its double-beamed chevron bones located in the underside of the tail. These bones were initially believed to be unique to Diplodocus; however, they have since then been discovered in other members of the diplodocid family and in non-diplodocid sauropods such as Mamenchisaurus."),
                new cc.domain.dino('dryosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Dryosaurus (/ˌdraɪ.ɵˈsɔrəs/ dry-o-sawr-əs; meaning 'oak lizard', Greek δρυς/drys meaning 'oak' and σαυρος/sauros meaning 'lizard'; the name is from the vague oak-leaf shape of its cheek teeth) is a genus of an ornithopod dinosaur that lived in the Late Jurassic period. It was an iguanodont (formerly classified as a hypsilophodont). Fossils have been found in the western United States, and were first discovered in the late 19th century. Valdosaurus canaliculatus and Dysalotosaurus lettowvorbecki were both formerly considered to represent species of Dryosaurus."),
                new cc.domain.dino('epidexipteryx', suits[1], getStat(), getStat(), getStat(), getStat(), "Epidexipteryx ('display feather') is a genus of small paravian dinosaur, known from one fossil specimen in the collection of the Institute of Vertebrate Paleontology and Paleoanthropology in Beijing. Epidexipteryx represents the earliest known example of ornamental feathers in the fossil record.[1] The type specimen is catalog number IVPP V 15471. It has been reported to be a maniraptoran dinosaur from the Middle Jurassic or Upper Jurassic age Daohugou Beds of Inner Mongolia, China (about 160 or 168 mya)"),
                new cc.domain.dino('heterodontosauridae', suits[1], getStat(), getStat(), getStat(), getStat(), "Heterodontosauridae ('different-toothed lizards') is a family of early ornithischian dinosaurs that were likely among the most basal (primitive) members of the group. Although their fossils are rare, they lived around the globe beginning in the late Triassic Period, and a few late-surviving species persisted into the Early Cretaceous."),
                new cc.domain.dino('kentrosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Kentrosaurus is a genus of stegosaurid dinosaur from the Late Jurassic of Tanzania. Its fossils have been found only in the Tendaguru Formation of Tanzania, dated to the Kimmeridgian stage, between about 155.7 ± 4 Ma and 150.8 ± 4 Ma (million years ago). Apparently, all finds belong to one species, K. aethiopicus Hennig 1915."),
                new cc.domain.dino('stegosaurus', suits[1], getStat(), getStat(), getStat(), getStat(), "Stegosaurus (/ˌstɛɡɵˈsɔrəs/, meaning 'roof lizard' or 'covered lizard' in reference to its bony plates[1]) is a genus of armored stegosaurid dinosaur. They lived during the Late Jurassic period (Kimmeridgian to early Tithonian), some 155 to 150 million years ago in what is now western North America. In 2006, a specimen of Stegosaurus was announced from Portugal, showing that they were present in Europe as well.[2] Due to its distinctive tail spikes and plates, Stegosaurus is one of the most recognizable dinosaurs. At least three species have been identified in the upper Morrison Formation and are known from the remains of about 80 individuals"),

                new cc.domain.dino('alaskacephale', suits[2], getStat(), getStat(), getStat(), getStat(), "Alaskacephale was named by Robert Sullivan in 2006. The genus name refers to Alaska, where the fossil was found in the Prince Creek Formation. The species name, gangloffi, honors paleontologist Roland Gangloff. The only known specimen of A. gangloffi is the holotype, a nearly complete left squamosal with a characteristic array of polygonal nodes. The dimensions of this bone suggest that A. gangloffi was about half the size of Pachycephalosaurus wyomingensis or three quarters the size of Prenocephale prenes, and about the same size as Prenocephale edmontonensis and Prenocephale brevis (Gangloff et al. 2005)."),
                new cc.domain.dino('alectrosaurus', suits[2], getStat(), getStat(), getStat(), getStat(), "Alectrosaurus (/əˌlɛktrɵˈsɔrəs/; meaning 'unmarried lizard') is a genus of tyrannosaurid theropod dinosaur from the Late Cretaceous Period of Inner Mongolia. It was a bipedal carnivore with a body shape similar to its much larger relative, Tyrannosaurus rex. Alectrosaurus was much smaller though, most likely less than five meters (17 ft) long."),
                new cc.domain.dino('archaeoceratops', suits[2], getStat(), getStat(), getStat(), getStat(), "Archaeoceratops, meaning 'ancient horned face', is a genus of basal neoceratopsian dinosaur from the Early Cretaceous (Aptian stage) of north central China. It appears to have been bipedal and quite small (about 1 meter long) with a comparatively large head. Unlike many later ceratopsians it had no horns, possessing only a small bony frill projecting from the back of its head."),
                new cc.domain.dino('baryonyx', suits[2], getStat(), getStat(), getStat(), getStat(), "Baryonyx (/ˌbæriˈɒnɨks/; Greek: βαρύς/barys meaning 'heavy' and ὄνυξ/onyx meaning 'claw' or 'nail') is a genus of carnivorous saurischian dinosaur first discovered in clay pits just south of Dorking, England, and later reported from fossils found in northern Spain and Portugal. It is known to contain only one species, Baryonyx walkeri. Its fossils have been recovered from formations dating from the Hauterivian to early Barremian stages of the early Cretaceous Period, around 130–125 million years ago"),
                new cc.domain.dino('daspletosaurus', suits[2], getStat(), getStat(), getStat(), getStat(), "Daspletosaurus (/dæsˌpliːtɵˈsɔrəs/ das-pleet-o-sawr-əs; meaning 'frightful lizard') is a genus of tyrannosaurid theropod dinosaur that lived in western North America between 77 and 74 million years ago, during the Late Cretaceous Period. Fossils of the only named species (D. torosus) were found in Alberta, although other possible species from Alberta and Montana await description. Including these undescribed species makes Daspletosaurus the most species-rich genus of tyrannosaur."),
                new cc.domain.dino('deltadromeus', suits[2], getStat(), getStat(), getStat(), getStat(), "Deltadromeus (meaning 'delta runner') is a genus of large basal ceratosaurian theropod dinosaur from Northern Africa. It had long, unusually slender hind limbs for its size, suggesting that it was a swift runner. The skull is not known. Two fossil specimens of a single species (D. agilis, or 'agile delta runner') have been described, found in the Bahariya Formation and Kem Kem Beds, which date to the late Cretaceous Period (mid Cenomanian age), about 95 million years ago. It may be a junior synonym of the contemporary Bahariasaurus.[1]"),
                new cc.domain.dino('proceratops', suits[2], getStat(), getStat(), getStat(), getStat(), "Ceratops (meaning 'horn face') is a dubious genus of herbivorous ceratopsian dinosaur which lived during the Late Cretaceous. Its fossils have been found in Montana. Although poorly known, Ceratops is important in the history of dinosaurs, since it is the type genus for which both the Ceratopsia and the Ceratopsidae have been named. Unfortunately, the material is too poor to be confidently referred to better specimens, and Ceratops is thus considered a nomen dubium."),
                new cc.domain.dino('saurolophus', suits[2], getStat(), getStat(), getStat(), getStat(), "Saurolophus (/sɔːˈrɒləfəs/; meaning 'lizard crest') is a genus of large hadrosaurine duckbill that lived about 69.5–68.5 million years ago,[1] in the Late Cretaceous of North America and Asia; it is one of the few genera of dinosaurs known from multiple continents. It is distinguished by a spike-like crest which projects up and back from the skull. Saurolophus was an herbivorous dinosaur which could move about either bipedally or quadrupedally."),
                new cc.domain.dino('stygimoloch', suits[2], getStat(), getStat(), getStat(), getStat(), "Stygimoloch (meaning 'demon from the Styx (greek river of death)') is a genus of pachycephalosaurid dinosaur from the end of the Cretaceous period, roughly 65 million years ago. It is currently known from the Hell Creek Formation, Ferris Formation, and Lance Formation of the Western Interior (United States), where it lived alongside Tyrannosaurus and Triceratops. The type species, S. spinifer (meaning 'thorny devil from the Styx (river of death)'), was described by British vertebrate paleontologist Peter Galton and German paleontologist Hans-Dieter Sues of the National Museum of Natural History in 1983.[1] Stygimoloch is characterized by clusters of spikes on the back of the skull, in which a long central horn is surrounded by 2-3 smaller hornlets, and a tall, narrow dome.[2] Dracorex has similar but shorter hornlets and lacks a dome, and has been interpreted as either a distinct species, or a juvenile or female of Pachycephalosaurus or Stygimoloch. It has also been proposed that Stygimoloch represents partially grown individuals of Pachycephalosaurus."),
                new cc.domain.dino('triceratops', suits[2], getStat(), getStat(), getStat(), getStat(), "Triceratops (/traɪˈsɛrətɒps/ try-serr-ə-tops) is a genus of herbivorous ceratopsid dinosaur that lived during the late Maastrichtian stage of the Late Cretaceous Period, around 68 to 65.5 million years ago (Mya) in what is now North America. It was one of the last non-avian dinosaur genera to appear before the Cretaceous–Paleogene extinction event.[1] The term Triceratops, which literally means 'three-horned face', is derived from the Greek τρί- (tri-) meaning 'three', κέρας (kéras) meaning 'horn', and ὤψ (ops) meaning 'face'."),
                new cc.domain.dino('tyrannosaurus', suits[2], getStat(), getStat(), getStat(), getStat(), "Tyrannosaurus (/tɨˌrænəˈsɔrəs/ or /taɪˌrænəˈsɔrəs/; meaning 'tyrant lizard', from Greek tyrannos (τύραννος) meaning 'tyrant,' and sauros (σαῦρος) meaning 'lizard'[1]) is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning 'king' in Latin), commonly abbreviated to T. rex, is a fixture in popular culture. It lived throughout what is now western North America, at the time an island continent termed Laramidia, with a much wider range than other tyrannosaurids. Fossils are found in a variety of rock formations dating to the Maastrichtian age of the upper Cretaceous Period, 67 to 65.5 million years ago.[2] It was among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event."),
                new cc.domain.dino('utahraptor', suits[2], getStat(), getStat(), getStat(), getStat(), "Utahraptor (meaning 'Utahs predator'[1]) is a genus of theropod dinosaurs, including the largest known members of the family Dromaeosauridae. Fossil specimens date to the upper Barremian stage of the early Cretaceous period (in rock strata dated to 126 ± 2.5 million years ago).[2] It contains a single species, Utahraptor ostrommaysorum.")
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
            cpuplayer.cards = [];

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
                return ((playerCard.speed + playerCard.weight + playerCard.lethality + playerCard.evade) >=
                    (cpuCard.speed + cpuCard.weight + cpuCard.lethality + cpuCard.evade));
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