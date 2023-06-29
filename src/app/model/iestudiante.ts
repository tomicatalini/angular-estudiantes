import { Inscripcion } from "./inscripcion";

export interface IEstudiante {
    nombre: string,
    apellido: string,
    fechaInicio: Date,
    incripciones: Inscripcion[]
}
