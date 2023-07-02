import { Course } from "./course";

export class Student {
    constructor(
        public name: string,
        public surname: string,
        public date: Date,
        public courses: Course[]
    ){
        this.name = name;
        this.surname = surname;
        this.courses = courses;
        this.date = date;
    }

    coursesCount(): number{
        return this.courses.length;
    }
}
