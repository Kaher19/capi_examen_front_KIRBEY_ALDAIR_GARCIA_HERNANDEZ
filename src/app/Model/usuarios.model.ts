export interface Usuario{
    name:string,
    user_domicilio:[
        {
            domicilio:string,
            numero_exterior:number,
            colonia:string,
            cp:string,
            ciudad:string,
            fecha_nacimiento:string,
            edad:number
        }
    ]
}