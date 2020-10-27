export class Rombo{
    private diagonal1: number
    private diagonal2: number
    private lado1 : number

constructor( _diagonal1 : number, _diagonal2 : number, _lado1 : number){
    
    this.diagonal1 = _diagonal1
    this.diagonal2 = _diagonal2
    this.lado1= _lado1
    }

get _diagonal1 () {
     return this.diagonal1 
}

get _diagonal2 () {
    return this.diagonal2
}

get _lado1 () {
    return this.lado1
}

perimetro() {
    return this.lado1 * 4
}

area() {
    return (this.diagonal1 * this.diagonal2)/2
}
}