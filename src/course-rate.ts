export class CourseRate {
    code: string;
    rate: number;
    asc?: boolean;
    constructor(code: string, rate: number, asc: boolean) {
        this.code = code;
        this.rate = rate;
        this.asc = asc;
    }
}