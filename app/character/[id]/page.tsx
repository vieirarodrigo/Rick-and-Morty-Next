type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

type Props = {
    params: {
        id: string;
    };
};

async function getCharacter(id: string): Promise<Character> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();

    return data;
}

export default async function CharacterPage({ params }: Props) {
    const character = await getCharacter(params.id);

    return (
        <main>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} width={150}/>
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
        </main>
    )
}