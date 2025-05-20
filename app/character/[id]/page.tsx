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
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center">
                <h1 className="text-2xl font-bold mt-4 text-gray-600">{character.name}</h1>
                <img 
                    src={character.image} 
                    alt={character.name} 
                    className="w-48 h-48 mx-auto rounded-full border-4 border-green-500"
                />
                <p className="text-gray-600">Status: {character.status}</p>
                <p className="text-gray-600">Espécie: {character.species}</p>
                <p className="text-gray-600">Gênero: {character.gender}</p>
            </div>
        </main>
    )
}