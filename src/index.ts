import { menuPpal } from './vista/menuPpal'
import { leerTeclado } from './vista/entradaTeclado'
import {Rombo} from './model/rombo'
import {Cuadrado} from './model/cuadrado'
const main = async () => {
    let l: number
    do {
        l = await menuPpal()
        switch(l){
            case 1:
                console.log("Estoy calculando el area y el perimetro del rombo")

                let _diagonal1: number, _diagonal2: number, _lado1: number
                                
                _diagonal1 = parseInt( await leerTeclado('Introduce el valor de la diagonal 1 del rombo en cm'))
                _diagonal2 = parseInt( await leerTeclado('Introduce el valor de la diagonal 2 del rombo en cm'))
                _lado1 = parseInt( await leerTeclado('Introduce el valor del lado1 del rombo en cm'))

                let rombo = new Rombo(_diagonal1, _diagonal2, _lado1)

                console.log(`Area del rombo= ${rombo.area()}cm2`)
                console.log(`Perimetro del rombo= ${rombo.perimetro()} cm`)

                break

            case 2:
                console.log("Estoy calculando el area y el perimetro del cuadrado")

                let lado: number

                lado = parseInt(await leerTeclado('Introduzca el lado del cuadrado'))

                let cuadrado = new Cuadrado(lado)
                
                console.log(`Area del cuadrado= ${cuadrado.area()} cm2`)
                console.log(`Perimetro del cuadrado= ${cuadrado.perimetro()} cm`)
             
                break

            case 0:
                console.log('\nAdios')

                break

            default:
                console.log("Opción incorrecta")
                
                break
       
        }
    }while (l != 0)
}

main()


