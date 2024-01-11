class ProductManager {
    constructor(){
        this.products = [];
        this.id = 0
    }
    getProducts() { 
        return this.products;
    }
    addProduct(name, price, code, stock) {
        if (!name || !price || !code || !stock){
            console.log ("Todos los campos son obligatorios");
        }

        if (!this.products.some((p) => p.code === code )) {
            let newProduct = { name, price, code, stock };
            this.products.push(newProduct);
            console.log (`El producto ${name} fue agregado correctamente!`)
        } else {
            console.log (`Ya existe un producto con el código ${code}`)
        }
    }
}
