import ShowName from "./components/FirstComponent";


function App() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  let counter = 5
  const addvalue = () =>{
    console.log("clicked", counter);
    counter = counter + 1
  }
  let content;
  if(isLoggedIn){
    content = <AdminPanel />;
  }else{
    content = <LoginForm />;
  }
  return (
    <>
    <div>
      {content}
    </div>
    <h3>{user.name}</h3>
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
    />
    <h1>Icerativez</h1>
    <h2>About</h2>
      <p>Hello there.<br />How do you do?</p>
      <button>Next </button>
      <br />

      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>add value </button>
      <button>remove value</button>
      <p>
        git
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum doloremque laborum labore minus? Qui fugiat aliquid quisquam odio ipsum itaque veritatis alias repellendus similique. Veritatis nesciunt consequatur aspernatur. Debitis!
      </p>
      <ShowName />
    </>
  )
}

export default App
