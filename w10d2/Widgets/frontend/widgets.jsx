import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';


document.addEventListener('DOMContentLoaded', () => {
    const reactRoot = document.getElementById('react-root');
    ReactDOM.render(<Clock/>, reactRoot);
    ReactDOM.render(<Tabs/>, reactRoot);
});

