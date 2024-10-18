export class Foret {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public tags: Array<string>,
        public parcels: Array<string>,
        public imgUrl: string,
        public area: number,
        public createdAt: Date,
        public updatedAt: Date,
    ){}
}