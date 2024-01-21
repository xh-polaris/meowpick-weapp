export class Course {
    id: string
    comment: any[]
    constructor() {
        this.id = ''
        this.comment = []
    }

    setId(id: string): void {
        this.id = id
        this.comment = [1,2,3]
    }
}