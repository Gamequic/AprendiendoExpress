const faker = require('@faker-js/faker')
const boom = require("@hapi/boom");

class ProductsServcice{
    constructor(){
        this.products = [];
        this.generate()
    }

    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++){
            this.products.push({
                id: faker.faker.datatype.uuid(),
                //id: String(index),
                name: faker.faker.commerce.productName(),
                price: parseInt(faker.faker.commerce.price(), 10),
                image: faker.faker.image.imageUrl(),
                isBlock: faker.faker.datatype.boolean()
            })
        }
    }

    async create(data){
      const newProduct = {
        id: faker.faker.datatype.uuid(),
        ...data //Coloca en automatico los demas valores
      }
      this.products.push(newProduct)
      return newProduct
    }

    find(){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.products)
          }, 1500)
        })
    }

    async findOne(id){
      const product = this.products.find(item => item.id === id);
      if (!product){
        throw boom.notFound("Product not found")
      }
      if (product.isBlock){
        throw boom.conflict("Product is block")
      }
      return product
    }

    async update(id, changes){
      const index = this.products.findIndex(item => item.id === id)
      if (index === -1){
        throw boom.notFound("Product not found")
      }
      const product = this.products[index]
      this.products[index] = {
        ...product,
        ...changes
      }
      return this.products[index]
    }

    async delete(id){
      const index = this.products.findIndex(item => item.id === id)
      if (index === -1){
        throw boom.notFound("Product not found")
      }
      this.products.splice(index, 1)  //Le decimos que queremos eliminar un elemento a partir de una posicion en el index
      return { id }
    }
}

module.exports = ProductsServcice;
