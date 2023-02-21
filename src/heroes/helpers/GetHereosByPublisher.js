import { heroes } from "../data";

export const GetHereosByPublisher = (publisher) => {
  
    const validPublisher = ['DC Comics','Marvel Comics']
    if ( !validPublisher.includes(publisher)){
        throw new Error (`${publisher} no encontrado`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}
