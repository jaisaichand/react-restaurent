import { createStore } from 'redux';

const defaultState = {
    restaurents: [
        {
            open: true,
            menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh34' }],
            name: "Jai's Topnotch Hotel",
            rating: '4.6',
            address: "Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.",
            key: "kjhdfv7",
            image: '',
            discount:'20',
            description:'North Indian, Chinese, Desserts, Fast Food, Bakery'
        },
        {description:'pappu, sambar, Fry,pani puri', discount:'0',image: '', open: true, menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuhgr' }], name: "Mughal's paradiez", rating: '3.5', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "kj3" },
        {description:'Naa istam vacchindi cook chestha.', discount:'10',image: '', open: true, menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuhe' }], name: "Kritunga Restaurent", rating: '2.0', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "uhke" },
        {description:'Tinte tinu lekapothe po', discount:'60',image: '', open: true, menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuhbet' }], name: "Sweet Magic", rating: '4.1', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "wwwwf" },
        {description:'Nen cheppanu, ye? dishes em unnayo chuskova?', discount:'90',image: '', open: true, menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuhyy' }], name: "Salwa Multicuisine Restaurent", rating: '5.0', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "vveer" },
        {description:'North Indian, Chinese, Desserts, Fast Food, Bakery', discount:'30',image: '', open: true, menu: [{ image: '', isAdded: false, price: '', serves: ['full', 'single'], description: '', name: '', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuhnn' }], name: "Angaara 5", rating: '3.9', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "jfi" }
    ],
    showAds: false,


}

export const storeReducer = (state = defaultState, action) => {
    console.log(action);
    return state;
}

export const Store = createStore(storeReducer);

