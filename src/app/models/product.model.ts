export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public like: number,
        public isLiked: boolean,
        public color?: Array<string>) {
    }
}