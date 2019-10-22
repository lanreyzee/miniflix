export interface IMovie{
    id:number,
    name:string,
    genre:string,
    producer:string,
    imageUrl:string,
    runtime?:string,
    director:string,
    release:string,
    rating:string,
    actors?:string[],
}