import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Details() {
    const [post, setPost] = useState([]);
    let { id } = useParams();
    const getData = () => {
        axios.get(`http://localhost:1221/users/${id}`).then((response) => {
            setPost(response.data);
        });
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <section className='usersSec'>
                        <div className='dataCard'>
                            <h2>{post.name}</h2>
                            <p>{post.description}</p>
                            <h4>{post.price}</h4>
                            <Link to={"/"}>Back to Home</Link>
                        </div>
            </section>
        </>
    )
}

export default Details