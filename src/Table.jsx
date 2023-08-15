import React from 'react'
import { Item } from './item';

const dataRows = [
    { id: "ID123", date: "2023-08-14", tittle: "Título de la Publicación 1", post: "Contenido del Post 1" },
    { id: "ID456", date: "2023-08-15", tittle: "Título de la Publicación 2", post: "Contenido del Post 2" },
    { id: "ID789", date: "2023-08-16", tittle: "Título de la Publicación 3", post: "Contenido del Post 3" }
  ];

export const Table = () => {
  return (
    <table className="table">
        <thead className="thead-dark">
          <tr>

            <th scope="col">Id de Publicacion</th>
            <th scope="col">Fecha de publicación</th>
            <th scope="col">Titulo</th>
            <th scope="col">Post</th>
          </tr>
        </thead>

        <tbody>
          {dataRows.map(data => (
            <Item key={data.id} id={data.id} title={data.tittle} date={data.date} post={data.post}/>
          ))}
        </tbody>
      </table>
  )
}
