export class applicationCreateModel {
    name: string;
    surname: string;
    email: string;
    comments?: string;

    constructor() {
        this.name='';
        this.surname='';
        this.email='';
        this.comments='';
    }
}