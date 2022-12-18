const faker = require('@faker-js/faker')

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
                name: faker.faker.commerce.productName(),
                price: parseInt(faker.faker.commerce.price(), 10),
                image: faker.faker.image.imageUrl()
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
          }, 250)
        })
    }

    async findOne(id){
        return this.products.find(item => item.id === id)
    }

    async update(id, changes){
      const index = this.products.findIndex(item => item.id === id)
      if (index === -1){
        throw new Error("Product not found")
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
        throw new Error("Product not found")
      }
      this.products.splice(index, 1)  //Le decimos que queremos eliminar un elemento a partir de una posicion en el index
      return { id }
    }
}

module.exports = ProductsServcice;
