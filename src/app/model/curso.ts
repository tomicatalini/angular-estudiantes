import { ICurso } from "./icurso";

export class Curso implements ICurso {
    
    constructor(
        public id: number,
        public nombre: string,
        public notaAprobacion: number = 7,
        public faltasAprobacion: number = 5
    ){
        this.id = id;
        this.nombre = nombre
        this.notaAprobacion = notaAprobacion;
        this.faltasAprobacion = faltasAprobacion;
    }
}
