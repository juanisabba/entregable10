import ProductsDAOMongoDB from "./productsDAOMongoDB.js";
import CartDAOMongoDB from "./cartDAOMongoDB.js";

const ProductsDAOFirebase = () => {};
const CartDAOFirebase = () => {};

const getStorage = () => {
    const storage = process.env.STORAGE || 'mongodb'
    switch (storage) {
      case 'mongodb':
        return {
          products: new ProductsDAOMongoDB(),
          cart: new CartDAOMongoDB()
        }
        break
      default:
        return {
          products: ProductsDAOFirebase(),
          users: CartDAOFirebase()
        }
        break
    }
  }

  export default getStorage;