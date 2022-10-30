import { Button } from 'flowbite-react';

export default function App() {
  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-medium py-2">
        Welcome to React Tailwind Flowbite Parcel Template!
      </h1>
      <Button onClick={() => console.log('Clicked button')}>Click Me</Button>
    </main>
  );
}
