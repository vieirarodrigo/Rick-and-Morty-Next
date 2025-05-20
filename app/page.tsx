type Character = {
  id: number;
  name: string;
  image: string;
};

async function getCharacter(): Promise<Character[]> {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
}

export default async function HomePage() {
  const characters = await getCharacter();
  
  return  (
    <main>
      <h1>Personagens de Rick and Morty</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <img src={char.image} alt={char.name} width={50} />
            {char.name}
          </li>
        ))}
      </ul>
    </main>
  );
}