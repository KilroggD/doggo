import React, { useCallback, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import apiService from './utils/apiService';
import Control from './components/Control';
import List from './components/List';
import { COUNT, FAVOURITES_KEY } from './constants';
import storageService from './utils/storageService';

import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dogs, setDogs] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = useCallback((url) => {        
        setFavorites([url, ...favorites]);
        storageService.delete(FAVOURITES_KEY);
    }, [setFavorites, favorites]);

    const resetFavorites = useCallback(() => {
        // remove favorites from state and local storage
        storageService.set(FAVOURITES_KEY, []);
        setFavorites([]);        
    }, [setFavorites]);

    const fetchDogs = useCallback(async () => {
        // fetch dog images
        const promises = [];
        for (let i = 0; i < COUNT; i++) {
            promises.push(apiService.getDogPicture());
        }
        setIsLoading(true);
        const images = await Promise.all(promises);
        setDogs(images);
        setIsLoading(false);
    }, [setDogs]);

    useEffect(() => {
        setFavorites(storageService.get(FAVOURITES_KEY) || []);
        fetchDogs();
    }, [setFavorites, fetchDogs]);

    return (
        <div className="wrapper">
            <h2>Welcome to the Doggo app</h2>
            <Router>
                <Switch>
                    <Route path={`/(${FAVOURITES_KEY})?/`} exact={true}>
                        <List
                            isLoading={isLoading}
                            dogs={dogs}
                            favorites={favorites}
                            addToFavorites={addToFavorites}
                        />
                    </Route>
                    <Redirect to="/" />
                </Switch> 
                {!isLoading && 
                    <Control
                        isFavVisible={!!favorites.length} 
                        onFavsResetClick={resetFavorites} 
                        refreshDogs={fetchDogs} 
                    />
                }               
            </Router>            
        </div>
    );
}

export default App;
