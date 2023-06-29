import { ICurso } from "./icurso";

export class Inscripcion {

    public id: number;

    constructor(
        public fecha: Date,
        public curso: ICurso, 
        public nota: number = 0,
        public faltas: number = 0
    ){
        this.id = this.generateRandomNumber();
        this.fecha = fecha;
        this.faltas = faltas;
        this.nota = nota;
        this.curso = curso;
    }
    
    /**
     * Generade numeros aleatorios entre 1000 y 9999
     * @returns 
     */
    private generateRandomNumber(): number {
        return Math.floor(Math.random() * 9000) + 1000;
      }
}
