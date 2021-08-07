import Post from './Post'
import useFetch from './useFetch'
import React from 'react';


function Dashboard() {
    const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts');
    //console.log(posts);

    return (
        <div className="posts-list">
            <div className="posts-container">
                {
                    posts ? ( posts.map ((post) => (<Post data={post} key={post.id}/>))
                    ):(
                        <h4>Loading........</h4>
                    )
                }

            </div>
        </div>
    );
}

export default Dashboard
