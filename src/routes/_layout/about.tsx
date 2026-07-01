import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

import { Heading, Main } from '#/components';

export const Route = createFileRoute('/_layout/about')({
  component: RouteComponent,
});

function RouteComponent() {
  const companies = Array(3).fill(null);

  return (
    <Main>
      <Heading level={1}>About</Heading>

      <Heading level={2}>Backgrounb</Heading>
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

      <Heading level={2}>Skills</Heading>
      <ul className="list-inside list-disc">
        <li>ReactJS</li>
        <li>TypeScript</li>
        <li>Lua</li>
      </ul>

      <Heading level={2}>Experience</Heading>
      {companies.map((_, index) => (
        <React.Fragment key={index}>
          <Heading level={3}>Company {index + 1}</Heading>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
        </React.Fragment>
      ))}
    </Main>
  );
}
