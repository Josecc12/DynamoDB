import React from 'react'

export const Item = ({id,date,title,post}) => {
  return (
   <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{title}</td>
      <td>{post}</td>
   </tr>
  )
}
