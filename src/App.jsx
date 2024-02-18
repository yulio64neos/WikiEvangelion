import React from 'react';
import NavBar from './components/NavBar';

const App = () => {

    const title = "Hola Mundo";

    return (
        <React.Fragment>
            <NavBar />
            <h1>{title}</h1>
        </React.Fragment>
    );
}

export default App;