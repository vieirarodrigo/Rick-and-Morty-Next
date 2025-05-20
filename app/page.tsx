import Link from 'next/link';

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
    <main className='p-8 bg-gray-50 min-h-screen text-gray-600'>
      <h1 className='text-3xl font-bold text-center mb-6'>Personagens de Rick and Morty</h1>
      <ul className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {characters.map((char) => (
          <li key={char.id} className='bg-white p-4 rounded-lg shadow hover:shadow-xl trasition'>
            <Link href={`/character/${char.id}`}>
            <img 
              src={char.image} 
              alt={char.name} 
              className='rounded-full mx-auto w-24 h-24' />
            <p className='text-center mt-2 font-semibold'>{char.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}