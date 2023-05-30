import React from 'react';

const Search = (props) => {

    return (
        <div className='pt-10 px-10'>
            <input 
            // принимает props со значением value и функцию setValue для обработки изменений ввода
                value={props.value} 
                onChange={e=>props.setValue(e.target.value)} 
                // обработчик изменения
                className='border-1 border-red py-1 px-5 w-ful'
                placeholder='Начните поиск...'
            />
        </div>
    )
}

export default Search;