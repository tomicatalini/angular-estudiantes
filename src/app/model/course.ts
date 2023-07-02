export class Course {
    
    private approvalNote: number = 7;
    private approvalAssistance: number = 5;

    constructor(
        public name: string,
        public studentNote: number,
        public studentAssitance: number
    ){
        this.name = name;
        this.studentNote = studentNote;
        this.studentAssitance = studentAssitance;
    }

    aprove(): boolean {
        return this.studentNote >= this.approvalNote;
    }

    failAssistance(): boolean {
        return this.studentAssitance > this.approvalAssistance;
    }
}
