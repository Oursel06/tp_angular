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
        imageUrl: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_m.jpg",
        price: 234000,
        like: 0,
        isLiked: false,
        dateajout: new Date("03/16/2022"),
        color: ["rouge", "orange", "blanc", "noir", "gris", "bleu"]
    },
    {
        id: 2,
        title: "test",
        description: "Supercar italienne avec un V10 de 630cv",
        imageUrl: "data:image/jpeg;base64,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",
        price: 3400000,
        like: 0,
        isLiked: false,
        dateajout: new Date("03/23/2022"),
        color: ["noir", "blanc", "gris"]
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
    console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});
