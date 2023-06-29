import { Component } from '@angular/core';
import { IEstudiante } from '../model/iestudiante';
import { Inscripcion } from '../model/inscripcion';
import { Curso } from '../model/curso';
import { ICurso } from '../model/icurso';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {
  public alumnos: IEstudiante[];

  constructor(){
    this.alumnos = this.generateData();
  }

  private generateData(): IEstudiante[]{
    let analisis: ICurso = new Curso(1, 'Analisis Matemático 1');
    let algebra: ICurso = new Curso(2, 'Algebra', 6, 10);
    let algoritmos: ICurso = new Curso(3, 'Algorimos y Estructuras de Datos', 7, 3);
    let db: ICurso = new Curso(1, 'Gestión de Datos');

    let cursos: ICurso[] =  [analisis, algebra, algoritmos, db];

    let inscipcion1 = new Inscripcion(new Date(2023, 2, 11), analisis);
    let inscipcion2 = new Inscripcion(new Date(2023, 4, 17), algebra);
    let inscipcion3 = new Inscripcion(new Date(2023, 5, 1), algoritmos);
    let inscipcion4 = new Inscripcion(new Date(2023, 2, 11), db);

    let alumnoTomi: IEstudiante = {
      apellido: 'Catalini',
      nombre: 'Tomás',
      fechaInicio: new Date(2023, 1, 7),
      incripciones: [inscipcion1, inscipcion2, inscipcion3]
    }

    let alumnoMichi: IEstudiante = {
      apellido: 'Fechter',
      nombre: 'Michelle',
      fechaInicio: new Date(2023, 2, 27),
      incripciones: [inscipcion3, inscipcion4]
    }
    
    let alumnoDoe: IEstudiante = {
      apellido: 'John',
      nombre: 'Doe',
      fechaInicio: new Date(2023, 2, 2),
      incripciones: [inscipcion3, inscipcion1, inscipcion2]
    }

    let alumnoPerez: IEstudiante = {
      apellido: 'Maria',
      nombre: 'Perez',
      fechaInicio: new Date(2023, 1, 13),
      incripciones: [inscipcion4]
    }

    let alumnos: IEstudiante[] = [alumnoTomi, alumnoMichi, alumnoDoe, alumnoPerez];
    return alumnos;
  }

}
