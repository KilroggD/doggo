import React, {useCallback} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'

import { FAVOURITES_KEY } from '../constants';

const Control = ({isFavVisible, refreshDogs, onFavsResetClick}) => {
    const history = useHistory();
    const location = useLocation([]);
    const isOnFavPage = location.pathname.includes(FAVOURITES_KEY);
    const isFavLinkVisible = isFavVisible && !isOnFavPage;

    const onRefreshClick = useCallback(async () => {
        await refreshDogs();
        history.push('/');
    }, [history, refreshDogs]);

    return (
        <div className="control-container">
            {isFavLinkVisible && <Link to={`/${FAVOURITES_KEY}/`}>Go to Favorites</Link>}
            {isOnFavPage && <Link to="/">Go Home</Link>}
            <button onClick={onFavsResetClick}>Clear favorites</button>
            <button onClick={onRefreshClick}>Refresh</button>
        </div>
    );
};

export default Control;
