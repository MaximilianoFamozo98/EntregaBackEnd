class ProductManager {
    constructor(){
        this.products = [];
        this.id = 0
    }

    // Metodo que devuelve los valores
    getProducts() { 
        return this.products;
    }
    // Metodo que agrega un nuevo producto
    addProduct(name, price, code, stock) {
        if (!name || !price || !code || !stock){
            console.log ("Todos los campos son obligatorios");
        }

        if (!this.products.some((p) => p.code === code )) {
            let newProduct = { name, price, code, stock };
            this.products.push(newProduct);
            console.log ( `El producto ${name} fue agregado correctamente!`)
        } else {
            console.log (`Ya existe un producto con el código ${code}`)
        }
    }
    // Metodo que busca un producto por su codigo
    getProductsByCode(code) {
        let product = this.products.find((p) => p.code === code);
        if (product) {
            return product;
        } else {
            console.log(`No se encontro el producto con el codigo ${code}`);
        }
    }
}

const product = new ProductManager();

// Metodo que agrega un nuevo producto
product.addProduct("Fernet", 7000, "abc123", 10);
product.addProduct("Speed", 1000, "def456", 6);
product.addProduct("Vodka", 3000, "ghi789", 5);

//Verificar valores de productos
console.log ("---------------------")
product.addProduct("Vodka", 3000, "ghi789", 5);

// Metodo que muestra todos los Productos
console.log(product.getProducts());

// Metodo que busca un producto por su codigo
console.log ("---------------------")
console.log(product.getProductsByCode("def456"));
console.log(product.getProductsByCode("1213123113213"));


