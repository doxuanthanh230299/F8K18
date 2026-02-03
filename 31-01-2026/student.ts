export interface StudentI {
    update: (message: string) => void;
}

export class Student implements StudentI {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    update(message: string) {
        console.log(`👉 Học Sinh ${this.name} nhận được: ${message}`)
    }
}
