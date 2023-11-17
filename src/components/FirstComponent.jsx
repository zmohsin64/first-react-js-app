import { useState } from "react";

export default function ShowName(){
    return(
        <>
        <h1>Mohsin Raza</h1>
        <h1>Shahbaz Ali</h1>
        </>
    );
}

export function AdminPanel(){
    return(
        <h1>Welcome</h1>
    );
}
export function LoginForm(){
    return(
        <h1>Login</h1>
    );
}
const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
  ];

export function ShoppingList(){
    const listItems = products.map(product =>
        <li
        key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
        {product.title}
        </li>
        );
        return(
            <ul>{listItems}</ul>
        );
}

export function Square(){
    const[value, setValue] = useState(null);

    function handleClick(){
        setValue('X');
    }
    return(
        <button className="square" onClick = {handleClick}>
            {value}
        </button>
    );
}
export function Board(){
    return(
        <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        </>
    );
}