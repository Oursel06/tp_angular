export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public like: number,
        public isLiked: boolean,
        public isFavoris: boolean,
        public dateajout: Date,
        public color?: Array<string>) {
    }
}