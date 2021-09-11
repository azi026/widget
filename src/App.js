import React from 'react';
import Accordian from './component/Accordian.js';

const items=[
    {
        title:"why we use hooks in react",
        content:"Hooks are a new addition in React 16.8. They let you use state and other React features "
    },
    {
        title:"what is side effect in react",
        content:"f the React community embraces the Hooks proposal, it will reduce the number of concepts you need to "
    },
    {
        title:"why react hoock are bad",
        content:"If we think about Hooks conceptually, they are static through the lifetime of a component. ..."
    }
]
export default ()=> {
    return (
        <div>
            <Accordian items={items} />
         </div>
    );
    
};