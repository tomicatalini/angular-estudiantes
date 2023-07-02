import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Course } from '../model/course';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {
  
  public students: Student[];

  constructor(){
    this.students = this.generateData();
  }

  /**
   * Method that creates Students data randomly.
   * @returns 
   */
  private generateData(): Student[]{

    const names = ['Sofía', 'Alejandro', 'Valentina', 'Sebastián', 'Isabella'];
    const surnames = ['Martínez', 'Herrera', 'Medina', 'Vargas', 'Castro'];

    const studends: Student[] = [];
    const coursesNames = ['Analisis Matemático 1', 'Algebra', 'Algorimos y Estructuras de Datos', 'Gestión de Datos', 'Diseño de Sistemas'];

    for(let i = 1; i <= 4; i++){
      let studentName = names[this.generateRandomNumber(names.length - 1)];
      let studentSurname = surnames[this.generateRandomNumber(surnames.length - 1)];
      let date = new Date(2023, 2, 8);
      let studentCourses: Course[] = [];
      
      let coursesNamesTemp = coursesNames.slice();

      for(let j = 1; j <= this.generateRandomNumber(4, 1); j++){
        let courseName: string = coursesNamesTemp[this.generateRandomNumber(coursesNamesTemp.length - 1)];
        let note: number = this.generateRandomNumber(10);
        let assistance: number = this.generateRandomNumber(7);
        
        const course: Course = new Course(courseName, note, assistance);

        studentCourses.push(course);

        coursesNamesTemp = coursesNamesTemp.filter(c => c !== courseName);
      }

      const student: Student = new Student(studentName, studentSurname, date, studentCourses);

      studends.push(student);
    }
    
    return studends;
  }

   /**
     * Generade numeros aleatorios entre 0 y 10
     * @returns 
     */
   private generateRandomNumber(tope: number, cota?: number): number {
    let min = cota ? cota : 0;
    return Math.floor(Math.random() * tope) + min;
}


}
