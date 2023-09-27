import React, {useState, useEffect} from 'react';
import Light from './light';

const App = () => {
    
    return(
        <div className='body'>
            <div className='topStick'></div>
            <Light></Light>
        </div>
    );
};

export default App