import React from 'react'

export const Form = () => {
    return (
        <form  className='container'>
            <div className="form-group row">
                <label  className='col' for="email">ID:</label>
                <input  className='col' type="email" class="form-control" id="email"/>
            </div>

            <div className="form-group row">
                <label  className='col' for="email">ID:</label>
                <input  className='col' type="email" class="form-control" id="email"/>
            </div>

            <div className="form-group row">
                <label  className='col' for="email">ID</label>
                <input  className='col' type="email" class="form-control" id="email"/>
            </div>
            

     
        
            
            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    )
}
