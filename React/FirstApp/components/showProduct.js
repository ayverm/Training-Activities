import products from '../assets/products.json'

function ShowProduct() {
    return (  
        <div>
            <table className='table table-success table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map(item=>(
                           <tr key={item.id}>
                             <td>{item.id}</td>
                             <td>{item.name}</td>
                             <td>{item.price}</td>
                             <td>{item.rating}</td>
                           </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ShowProduct;