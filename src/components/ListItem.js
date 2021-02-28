import React, {useCallback} from 'react';

const ListItem = ({url, isInFav ,addToFavorites}) => {
    const handleClick = useCallback(() => {
        addToFavorites(url);        
    }, [url, addToFavorites]);

    const type = url.split('.').pop();

    // Not all items are images, sometimes videos are fetched
    return (
        <div className="list-item-container">            
            {['webm', 'mp4'].includes(type) ? 
                <video width="300" controls={true}>
                    <source src={url} type={`video/${type}`}/>
                </video>
                : <img src={url} alt="Doggo" width="300" />
            }
            <button onClick={handleClick} disabled={isInFav}>Add to favourites</button>
        </div>
    );
};

export default ListItem;
