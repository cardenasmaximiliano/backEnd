//gestor de productos perfumeria, espero funcione y se indiquen las mejoras

// creacion de constructor para alojar productos, donde el constructor recibe las propiedades pedidas
class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  //creacion del ProductManager
  class ProductManager {
    constructor() {
      this.products = [];
      this.idExistente = 1;
    }
  
    //metodo addProducts donde se obliga a que sea obligatorio toda la info
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Los campos deben ser obligatorios, por favor ");
        return;
      }
  
//revisa que el campo code no se vuelva a repetir 
      const productoExistente = this.products.find(product => product.code === code);
      if (productoExistente) {
        console.log(`disculpa pero el codigo "${code}" esta registrado`);
        return;
      }
  
      const producto = new Product(this.idExistente, title, description, price, thumbnail, code, stock);
      this.products.push(producto);
      this.idExistente++;
    }
  
    removeProduct(code) {
      this.products = this.products.filter(producto => producto.code !== code);
    }
  
    getProductByCode(code) {
      return this.products.find(product => producto.code === code);
    }
  
    getProductById(id) {
      const producto = this.products.find(producto => producto.id === id);
      if (producto) return producto;
      console.log("Not Found");
    }
  
    getProducts() {
      return this.products;
    }
  }
  //paso de datos de productos
  const manager = new ProductManager();
  
  console.log(manager.getProducts()); // []
  
  manager.addProduct("Jean Paul Gaultier", "Le Beau", 49000, "JeanPaul.jpg", "C01", 5);
  manager.addProduct("Giorgio Armani", "Aqua Di Gio - Profumo", 61000, "GA-Profumo.jpg", "C02", 5);
  manager.addProduct("Dolce&Gabbana", "LightBlue", 51000, "D&GlightBlue.jpg", "C03", 10);
  manager.addProduct("Natura", "Essencial Oud Pimienta", 12000, "EssencialOudPi.jpg", "C04", 4);
  manager.addProduct("Natura", "Homen-Dom", 12000, "HommenDom.jpg", "C05", 2);
  
  console.log(manager.getProducts());
  
  //removedor de productos
  manager.removeProduct("C02");
  
  console.log(manager.getProducts());
  
  const foundProduct = manager.getProductById(2);
  console.log(foundProduct);
  
  const nonExistentProduct = manager.getProductById(10); // Id que no existe