import { createStore } from 'redux';

const defaultState = {
    restaurents: [
        {
            open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Jai's Topnotch Hotel",
            rating: '4.6',
            address: "Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.",
            key: "kjhdfv7",
            image: '',
            discount: '20',
            description: 'North Indian, Chinese, Desserts, Fast Food, Bakery'
        },
        {
            description: 'pappu, sambar, Fry,pani puri', discount: '0', image: '', open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Mughal's paradiez", rating: '3.5', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "kj3"
        },
        {
            description: 'Naa istam vacchindi cook chestha.', discount: '10', image: '', open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Kritunga Restaurent", rating: '2.0', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "uhke"
        },
        {
            description: 'Tinte tinu lekapothe po', discount: '60', image: '', open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Sweet Magic", rating: '4.1', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "wwwwf"
        },
        {
            description: 'Nen cheppanu, ye? dishes em unnayo chuskova?', discount: '90', image: '', open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Salwa Multicuisine Restaurent", rating: '5.0', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "vveer"
        },
        {
            description: 'North Indian, Chinese, Desserts, Fast Food, Bakery', discount: '30', image: '', open: true,
            menu: [{ image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keh34' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh44' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3dftgh4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3gf4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ggg4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3ss4' }
                , { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3nnn4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3wertgv4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3errrff4' },
            { image: '', isAdded: false, price: '340', serves: ['full', 'single'], description: 'Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron .', name: 'Nizami Chicken Biryani', isVeg: false, rating: '4.0', quantity: 0, category: 'normal', instock: true, unique: 'keuh3uuu4' }],
            name: "Angaara 5", rating: '3.9', address: 'Ma inti daggare, Mee inti daggara kadu , Hyderabad, Telangana.', key: "jfi"
        }
    ],
    showAds: false,
    cartlength: 0,
    cartitems: []

}

export const storeReducer = (state = defaultState, action) => {
    console.log(action);
    if (action.type) {
        if (action.type == 'INCREMENT') {
            console.log(state);
            let totalState = state;
            console.log(totalState);

            totalState.restaurents.forEach((val, ind) => {
                if (val) {
                    if (val.key == action.payload.restaurent.key) {
                        if (val.menu) {
                            val.menu.forEach((val2, ind2) => {
                                if (val2) {
                                    if (val2.unique == action.payload.item.unique) {
                                        val2.quantity = val2.quantity + 1;
                                        totalState.cartlength = totalState.cartlength + 1;


                                        totalState.cartitems.forEach((valuee, indd) => {
                                            console.log(valuee)
                                            if (valuee.unique == action.payload.item.unique) {
                                                valuee.quantity = valuee.quantity + 1;
                                            } else {
                                                totalState.cartitems.push({ item: val2, restaurent: val });
                                            }
                                        })
                                        console.log(totalState);
                                        return totalState;
                                    }
                                }
                            })
                        }
                    }
                }
            })
        }

        if (action.type == 'DECREMENT') {
            console.log(state);
            let totalState = state;
            console.log(totalState);

            totalState.restaurents.forEach((val, ind) => {
                if (val) {
                    if (val.key == action.payload.restaurent.key) {
                        if (val.menu) {
                            val.menu.forEach((val2, ind2) => {
                                if (val2) {
                                    if (val2.unique == action.payload.item.unique) {
                                        val2.quantity = val2.quantity - 1;
                                        console.log(totalState);
                                        totalState.cartlength = totalState.cartlength - 1;
                                        if (totalState.cartitems.length > 0) {
                                            totalState.cartitems.forEach((valuee, indd) => {
                                                console.log(valuee);
                                            })
                                            // totalState.cartitems.push({item:val2,restaurent:val});
                                        }
                                        return totalState;
                                    }
                                }
                            })
                        }
                    }
                }
            })
        }
    }
    return state;
}

export const Store = createStore(storeReducer);

