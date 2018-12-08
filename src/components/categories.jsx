import React from 'react';

const Categories = props =>
{
    const {
        onGenreChange,
        currentGenre,
        allGenres, 
        textProperty, 
        valueProperty
    } = props;

    return ( 
        <div className="list-group">
            <li 
                key="allGenres" 
                href="/" 
                className={CheckClass('All', currentGenre)}
                onClick={() => onGenreChange('All')}
                > All</li>
           
            {allGenres.map(genre => (
                <li 
                    key={genre[valueProperty]} 
                    className={CheckClass(genre.name, currentGenre)}
                    onClick={() => onGenreChange(genre[textProperty])}>
                    {genre[textProperty]}
                </li>
            ))}
        </div>
    );

}

//its will be default if nothing passed to the props
Categories.defaultProps={
    valueProperty: "_id",
    textProperty: "name"
};

function CheckClass(genre, currentGenre)
{
    const classButtons = "list-group-item";
    return genre === currentGenre? classButtons + ' active' :  classButtons;
}
 
export default Categories;