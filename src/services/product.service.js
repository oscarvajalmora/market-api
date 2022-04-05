class ProductService {

    constructor () {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    getProductById = (id) => {
        const productStoredIndex = this.products.findIndex(p => p.id == id);
        return this.products[productStoredIndex];
    }

    addProduct = (product) => {
        const newProduct = {
            id: this.products.length + 1,
            timestamp: Date.now(),
            nombre: product.name,
            descripcion: product.description,
            codigo: product.code,
            foto: product.photo,
            precio: product.price,
            stock: product.stock
        }
        this.products.push(newProduct);
        return this.products;
    }

    updateProduct = (id, product) => {
        const productStoredIndex = this.products.findIndex(p => p.id == id);
        const productToUpdate = this.products[productStoredIndex];
        productToUpdate.nombre = product.name;
        productToUpdate.descripcion = product.description;
        productToUpdate.codigo = product.code;
        productToUpdate.foto = product.photo;
        productToUpdate.precio = product.price;
        productToUpdate.stock = product.stock;
        this.products[productStoredIndex] = productToUpdate;

        return this.products[productStoredIndex]; // return product updated
    }

    deleteProductById = (id) => {
        const productStoredIndex = this.products.findIndex(p => p.id == id);
        if (productStoredIndex > -1) {
            this.products.splice(productStoredIndex, 1);
        }

        return this.products;
    }
}

module.exports = new ProductService()