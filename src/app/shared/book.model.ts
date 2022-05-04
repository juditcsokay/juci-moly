export class Book {
  constructor(
    public id: number,
    public molyId: number,
    public title: string,
    public authors: string[],
    public cover: string,
    public description: string,
    public publishingYear: number
  ) {}
}
