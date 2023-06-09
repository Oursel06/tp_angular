const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(express.json());

app.use(cors())

const products = [
    {
        id: 1,
        title: "Lamborghini huracan",
        description: "Supercar italienne avec un V10 de 630cv",
        imageUrl: "https://puretuning.net/fr/image/models/U13D9XvOiwNlPcsXi4l6AEsBg14iso.png",
        price: 234000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("03/16/2023"),
        color: ["rouge", "orange", "blanc", "noir", "gris", "bleu"]
    },
    {
        id: 2,
        title: "Lykan hypersports",
        description: "Supercar libanaise avec un 6 cylindres à plat de 780cv",
        imageUrl: "https://www.tacot.com/photos/neuf/grandes/9/6/7/96745-a.jpg",
        price: 3400000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("03/27/2023"),
        color: ["noir", "blanc", "gris"]
    },
    {
        id: 3,
        title: "Ferrari LaFerrari",
        description: "Supercar italienne avec un V12 6,3 L + électrique de 963cv",
        imageUrl: "https://picolio.auto123.com/16photo/ferrari/2016-ferrari-laferrari.png",
        price: 1250000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("03/19/2023"),
        color: ["rouge", "gris", "noir", "bleu"]
    },
    {
        id: 4,
        title: "Koenigsegg Agera",
        description: "Supercar suédoise avec un V8 5 L de 960cv",
        imageUrl: "https://www.autoguide.com/blog/wp-content/uploads/2012/10/koenigsegg-agera-r.jpg",
        price: 1119000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/05/2023"),
        color: ["rouge", "orange", "gris", "noir"]
    },
    {
        id: 5,
        title: "Porsche 911 gt3 rs",
        description: "6 cylindres de 525cv",
        imageUrl: "https://www.porschedriving.com/los-angeles/-/media/porschedrivinglosangeles/backgrounds/pdp/911_gt3_rs_lizardgreen.png",
        price: 196000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/11/2023"),
        color: ["bleu", "orange", "vert", "blanc"]
    },
    {
        id: 6,
        title: "Aston Martin DB11",
        description: "V8 biturbo de 510cv",
        imageUrl: "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2022/aston-martin/db11-coupe/v8/coupe/exteriorColors/2022_aston_martin_db11_v8_032_c1-1.png",
        price: 201000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/11/2023"),
        color: ["gris", "blanc", "bleu"]
    },
    {
        id: 7,
        title: "Mercedes-AMG GT R",
        description: "V8 biturbo de 585cv",
        imageUrl: "https://catalogphoto.goo-net.com/carphoto/20311508_201910c.jpg",
        price: 190000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/11/2023"),
        color: ["jaune", "vert", "gris"]
    },
    {
        id: 8,
        title: "Chevrolet Corvette C8",
        description: "V8 de 495cv",
        imageUrl: "https://larte-design.com/upload/iblock/chevrolet/corvette_1.png",
        price: 90000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/11/2023"),
        color: ["rouge", "blanc", "noir"]
    },
    {
        id: 9,
        title: "Nissan GT-R Nismo",
        description: "V6 biturbo de 600cv",
        imageUrl: "https://www.pngplay.com/wp-content/uploads/13/Nissan-GT-R-Nismo-Transparent-Background.png",
        price: 205000,
        like: 0,
        isLiked: false,
        isFavoris: false,
        dateajout: new Date("04/11/2023"),
        color: ["gris", "bleu", "noir"]
    }
]


const orderIds = [
    {
        id: 1,
        contactNme: "LoÃ¯se Fenoll",
        status: "Completed",
        orderId: "azerttyicp"
    },
    {
        id: 2,
        contactNme: "Jane Birkin",
        status: "Shipped",
        orderId: "ugyiuoijkbj"
    },
    {
        id: 3,
        contactNme: "Nicola Sirkis",
        status: "Payed",
        orderId: "yugumlkmlm"
    }
]

app.get('/products', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products)
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products.find((p) => p.id == id))
});

app.put('/products/:id/likes', (req, res) => {
    const id = req.params.id;
    let product = products.find((p) => p.id == id);
    if (product.isLiked) {
        product.likes--;
    } else {
        product.likes++;
    }
    product.isLiked = !product.isLiked;

    res.set('Access-Control-Allow-Origin', '*');
    res.json(product)
})

app.post('/orders', (req, res) => {
    let contactName = req.body.contact.name;
    let random = (Math.random() + 1).toString(36).substring(7);
    let newOrder = {
        id: orderIds[orderIds.length - 1] + 1,
        contactNme: contactName,
        status: "Saved",
        orderId: random
    }
    orderIds.push(newOrder)
    res.set('Access-Control-Allow-Origin', '*');
    res.json(newOrder.id)
})

app.get('/orders', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds)
})

app.get('/orders/:id', (req, res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds.find((o) => o.id == id))
})

app.listen(port, () => {
    console.log(`Application à l'écoute sur le port ${port}!`)
});
