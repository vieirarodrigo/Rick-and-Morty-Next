type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

export default async function CharacterPage({ params, }: { params: { id: string };
}) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);

    if (!res.ok) {
        throw new Error(`Erro ao buscar personagem com id ${params.id}`);
    }

    const character: Character = await res.json();

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