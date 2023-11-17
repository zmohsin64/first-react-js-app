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

export function Square() {
    return(
        <>
        <div className="board-row">
            <button className="square">1</button>
            <button className="square">2</button>
            <button className="square">3</button>
        </div>
        <div className="board-row">
            <button className="square">4</button>
            <button className="square">5</button>
            <button className="square">6</button>
        </div>
        <div className="board-row">
            <button className="square">7</button>
            <button className="square">8</button>
            <button className="square">9</button>
        </div>
        </>
    );
}