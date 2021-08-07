import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

function Detailspage() {
    const{id} = useParams();
    const history = useHistory();

    const{ data : post } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);

    const deletePost =()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' +id , {
            method: 'DELETE',
        }).then(()=>{
            alert('Delete');
            history.push('/');
        });
    } ;

    return (
        <div className="content">
            {
                post && (
                    <>
                        {' '}
                        <img src="https://picsum.photos/600/400" alt="random pic"/>
                        <div className="header-text">
                            <h2>{post.title}</h2>
                        </div>
                            <p>{post.userId}</p>
                            <div className="text-content"><p>{post.body}</p></div>
                            <div className="btn-section">
                                <button className="delete" onClick={deletePost}> Delete </button>
                            </div>
                    </>
                )
            }
            
        </div>
    )
}

export default Detailspage
