import { createFileRoute } from '@tanstack/react-router';

import { Main } from '#/shared/components/main';

export const Route = createFileRoute('/_layout/')({ component: Home });

function Home() {
  return (
    <Main>
      <h1 className="text-4xl font-bold">Home</h1>

      <h2 className="my-4 text-3xl font-bold">Introduction</h2>
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

      <h2 className="my-4 text-3xl font-bold">Links</h2>
      <ul className="list-inside list-disc">
        <li>
          <a
            className="text-purple-800 underline decoration-solid"
            href="https://instagram.com"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="text-purple-800 underline decoration-solid"
            href="https://github.com"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="text-purple-800 underline decoration-solid"
            href="https://facebook.com"
          >
            Facebook
          </a>
        </li>
      </ul>
    </Main>
  );
}
