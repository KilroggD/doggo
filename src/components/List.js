import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { FAVOURITES_KEY } from '../constants';
import ListItem from './ListItem';
import Loader from './Loader';

const List = ({addToFavorites, dogs, favorites, isLoading}) => {
    const params = useParams([]);

    const items = useMemo(() => {
        // computed value to pick all or favorites
        if (params[0] === FAVOURITES_KEY) {
            return favorites;        
        }
        return dogs;
    }, [params, dogs, favorites])

    if (isLoading) {
        return <Loader />;
    }
    if (!items.length) {
        return <div>No items found!</div>;
    }
    return (
        <div className="list-container">
            {items.map((item, index) => {
                const isInFav = favorites.includes(item);
                return (
                    <ListItem 
                        key={`item-${index}`}
                        url={item}
                        isInFav={isInFav}
                        addToFavorites={addToFavorites}
                    />
                );
            })}
        </div>
    );
}

export default List;
