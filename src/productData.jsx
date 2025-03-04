import box1 from './assets/BoxOfBoosterPacksPokemon.avif'
import booster1 from './assets/BoosterPackPokemon.webp'
import single1 from './assets/SinglePokemon.jpg'
import box2 from './assets/BoxOfBoosterPacksMagicTheGathering.jpg'
import booster2 from './assets/BoosterPacksMonsterTheGathering.jpg'
import single2 from './assets/SingleMonsterTheGathering.webp'
import box3 from './assets/BoxOfBoosterPacksBaseBall.jpg'
import booster3 from './assets/BoosterPackBaseBall.webp'
import single3 from './assets/SingleBaseball.jpg'

// Pokemon Box $199.99 MTG Box $149.99 Baseball Box $99.99: P Booster $4.99 MTG Booster $4.49 Baseball Booster $2.49: Single Graded P $24.99 MTG $19.99 Baseball $9.99
const productData = {
    pokemon: {
        box: [
            {id: box1, name: "Booster Box", image: box1, price: 199.99, description: "Box of Booster Packs contains 324pcs with 36 Booster Packs that have 9 cards per Booster Pack."}
        ],
        booster: [
            {id: booster1, name: "Booster Pack", image: booster1, price: 4.99, description: "Single Booster Pack that contains 9 cards. Guaranteed 1 holo."}
        ],
        single: [
            {id: single1, name: "Random Single Graded Card", image: single1, price: 24.99, description: "A Random Single Graded Card."}
        ],
    },
    "magic the gathering": {
        box: [
            {id: box2, name: "Booster Box", image: box2, price: 149.99, description: "Box of Booster Packs contains 324pcs with 36 Booster Packs that have 9 cards per Booster Pack."}
        ],
        booster: [
            {id: booster2, name: "Booster Pack", image: booster2, price: 4.49, description: "Single Booster Pack that contains 9 cards. Guaranteed 1 holo."}
        ],
        single: [
            {id: single2, name: "Random Single Graded Card", image: single2, price: 19.99, description: "A Random Single Graded Card."}
        ],
    },
    baseball: {
        box: [
            {id: box3, name: "Booster Box", image: box3, price: 99.99, description: "Box of Booster Packs contains 324pcs with 36 Booster Packs that have 9 cards per Booster Pack."}
        ],
        booster: [
            {id: booster3, name: "Booster Pack", image: booster3, price: 2.99, description: "Single Booster Pack that contains 9 cards. Guaranteed 1 holo."}
        ],
        single: [
            {id: single3, name: "Random Single Graded Card", image: single3, price: 9.99, description: "A Random Single Graded Card."}
        ],
    },
};

export default productData;