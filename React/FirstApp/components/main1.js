import '../assets/myStyle.css';
const myStyle={
    color : 'white',
    backgroundColor :'grey',
    padding: '10px'
}

function Main1() {
    const loggedIn = true;
    const handleClick = ()=>{
        alert('Button Clicked')
    }

    const myarray = [{id:1,name:'user1'},{id:1,name:'user1'},{id:1,name:'user1'}]
    return ( 
        <div style={myStyle}>
            <h3>Main Component</h3>
            <button className='mybtn' onClick={handleClick}>{loggedIn? 'logout' :'login'}</button>
            <ul>
                {
                    myarray.map(item =>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}

export default Main1;