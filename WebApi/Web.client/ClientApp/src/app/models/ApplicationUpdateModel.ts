export class ApplicationUpdateModel {
    id: string;
    name: string;
    surname: string;
    email: string;
    comments?: string;

    constructor() {
        this.id = ''; 
        this.name = '';
        this.surname = '';
        this.email = '';
        this.comments = '';
    }
}