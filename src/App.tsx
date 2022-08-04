import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Projects} from './components/Projects/Projects';
import {Skills} from "./components/Skills/Skills";
import {HireBlock} from "./components/HireBlock/HireBlock";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
    return (
        <div className={'app'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <HireBlock/>
            <Contacts/>
        </div>
    );
}


export default App;
