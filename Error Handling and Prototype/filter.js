function filterByCategory(product){
    function clothing(typeProduct){
        return product.filter((item)=> item.category === typeProduct);
    }
    return clothing;
}

const products = [
    {name : "Shirt", category : "Clothing"},
    {name : "Pants", category : "Clothing"},
    {name : "Hat", category : "Accessories"},
    {name : "SunGlasses", category : "Accessories"},
]

let clothingProduct = filterByCategory(products)("Clothing")
console.log(clothingProduct);