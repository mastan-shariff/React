import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement('h1', { id: "red" }, "Hello world react course");
const parent = React.createElement(
    'div',
    { id: "parent" },
    [React.createElement(
        'div',
        { id: "child1",style:{color:"red"} },
        [
            React.createElement('h1', {}, "i am a nested h1 inside child and child is in parent corse"),
            React.createElement('h2', {}, "i am a nested h1 inside child and child is in parent"),
        ]), 
        React.createElement(
            'div',
            { id: "child2" },
            [
                React.createElement('h1', {}, "i am a nested h1 inside child and child is in parent"),
                React.createElement('h2', {}, "i am a nested h1 inside child and child is in parent"),
            ])

     ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);