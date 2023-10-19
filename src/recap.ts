const myNmae = 'Nicolas'
const myAge = 12
const suma = (a: number, b: number) => {
    return a + b
}
suma(5, 2)

class Persona {

    constructor(private edad: number, private name: string) {

     }

    getSumary() {
        return `mi edad es ${this.edad}`
    }
}

const nicolas = new Persona(15,'xavier')
