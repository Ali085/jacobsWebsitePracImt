import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Users() {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState([])

    const getData = () => {
        axios.get('http://localhost:1221/users').then((response) => {
            setPost(response.data);
        });
    }

    useEffect(() => {
        getData()
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:1221/users/${id}`).then(() => getData())
    }

 
    return (
        <>
            <section className='usersSec'>
                 <input type="text" onChange={(e)=> setSearch(e.target.value)} />
                {post.filter(data => data.name.toLowerCase().includes(search)).map((element) =>

                        <div className='dataCard'>
                            <Link to={`/details/${element._id}`}><h2>{element.name}</h2> </Link>
                            <p>{element.description}</p>
                            <h4>{element.price}</h4>
                            <button onClick={() => handleDelete(element._id)}>X</button>
                        </div>


                    )
                }
               
            </section>
        </>
    )
}

export default Users