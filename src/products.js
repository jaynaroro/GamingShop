const productsArray = [
    {
        id: "1",
        name: "HP RYZEN 5",
        type: 'laptop',
        price: 508
    },

    {
        id: "2",
        name:"Acer Nitro 5",
        type: 'laptop',
        price: 810
    },

    {
        id: "3",
        name: "MSI Raider",
        type: 'laptop',
        price: 3249
    },

    {
        id: "4",
        name: "Skytech Prism II",
        type: 'desktop',
        price: 4229
    },

    {
        id: "5",
        name:"Skytech Chronos",
        type: 'desktop',
        price: 869
    },

    {
        id: "6",
        name: "Lenovo Legion Tower",
        type: 'desktop',
        price: 1547},
    {
        id: "7",
        name: "Forza",
        type: 'game',
        price: 24
    },

    {
        id: "8",
        name:"Assasins Creed",
        type: 'game',
        price: 20
    },
    
    {
        id: "9",
        name: "Asphalt 9",
        type: 'game',
        price: 15}
]

function getProductById(id){
    let productData = productsArray.find(product => product.id === id)
    if(productData == undefined){
        console.log("Product does not exist")
        return undefined
    }
    return productData
}

function getProductByType(type){
    let productData = productsArray.filter(product => product.type === type)
    if(productData == undefined){
        console.log("Product does not exist")
        return undefined
    }
    return productData
}

export {productsArray, getProductById, getProductByType}