import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="p-10">
      <h1 className="my-4 text-4xl font-bold">About</h1>

      <h2 className="my-4 text-3xl font-bold">Backgrounb</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </p>

      <h2 className="my-4 text-3xl font-bold">Skills</h2>
      <ul className="list-inside list-disc">
        <li>ReactJS</li>
        <li>TypeScript</li>
        <li>Lua</li>
      </ul>

      <h2 className="my-4 text-3xl font-bold">Experience</h2>
      <h3 className="my-4 text-2xl font-bold">Company 1</h3>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </p>
    </main>
  );
}
