import { leerTeclado } from './entradaTeclado'

export const menuPpal = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Rombo')
    console.log('2.- Cuadrado')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
} 

