import React, { useState } from 'react'
import AWS from './aws-config';

export const SearchBar = () => {

    const [id , setId] = useState('')

    const dynamodb = new AWS.DynamoDB();

    const onSearch = ()=>{

        //DICIONARIO PARA OBTENER DATOS
        const getItemParams = {
            TableName: 'NombreDeTuTabla',
            Key: {
              ID: { S: 'id_del_item' }
            }
          };


        // HACE LA PETICION
          dynamodb.getItem(getItemParams, (err, data) => {
            if (err) console.error(err);
            else console.log('Item obtenido:', data.Item);
          });

    }


    return (
        <>
            <div className="input-group mb-3">
                <div classNames="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" onClick={onSearch}>Buscar</button>
                </div>
                <input   type="text" className="form-control" placeholder="Buscar por ID" aria-label="" aria-describedby="basic-addon1"/>
            </div>

        </>
    )
}
