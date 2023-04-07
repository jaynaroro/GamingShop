import HP from "./assets/HPRyzen5.png"
import Acer from "./assets/AcerNitro5.jpg"
import MSI from "./assets/MSIRaider.jpg"
import Prism from "./assets/SkyTechPrism3.jpg"
import Chronos  from "./assets/SkyTechChrons.jpg"
import Lenovo from "./assets/LonovoTower.jpg"
import Forza from "./assets/Forza.jpg"
import AssasinsCreed from "./assets/AssasinsCreed.jpg"
import Asphalt from "./assets/Asphalt.jpg"


const productsArray = [
    {
        id: "1",
        name: "HP RYZEN 5",
        type: 'laptop',
        price: 508,
        imageUrl: HP
    },

    {
        id: "2",
        name:"Acer Nitro 5",
        type: 'laptop',
        price: 810,
        imageUrl: Acer
    },

    {
        id: "3",
        name: "MSI Raider",
        type: 'laptop',
        price: 3249,
        imageUrl: MSI
    },

    {
        id: "4",
        name: "Skytech Prism III",
        type: 'desktop',
        price: 4229,
        imageUrl: Prism
    },

    {
        id: "5",
        name:"Skytech Chronos",
        type: 'desktop',
        price: 869,
        imageUrl: Chronos
    },

    {
        id: "6",
        name: "Lenovo Legion Tower",
        type: 'desktop',
        price: 1547,
        imageUrl: Lenovo
    },
    {
        id: "7",
        name: "Forza",
        type: 'game',
        price: 24,
        imageUrl: Forza
    },

    {
        id: "8",
        name:"Assasins Creed",
        type: 'game',
        price: 20,
        imageUrl: AssasinsCreed
    },
    
    {
        id: "9",
        name: "Asphalt 9",
        type: 'game',
        price: 15,
        imageUrl: Asphalt
    }
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