/* Crie uma interface chamada Pet com name (string), species (string) e owner? (opcional, string). Declare um objeto do tipo Pet sem a propriedade owner. */

interface Pet {
    name: string;
    species: string;
    owner?: string;
}

const dog: Pet = {
    name: 'Rex',
    species: 'Collie'
}

const cat: Pet = {
    name: 'Naruto',
    species: 'Siamês',
    owner: 'Francisco'
}

const getPetData = (p: Pet): string => {
    return `Name: ${p.name}, Espécie: ${p.species}, Owner: ${p.owner ?? 'Not informed'}`;
}

console.log(getPetData(dog));
console.log(getPetData(cat));