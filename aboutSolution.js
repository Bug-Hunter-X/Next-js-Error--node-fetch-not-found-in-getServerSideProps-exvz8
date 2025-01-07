```javascript
//pages/aboutSolution.js
import Link from 'next/link';
export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
}

export default function About({ characters }) {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
```