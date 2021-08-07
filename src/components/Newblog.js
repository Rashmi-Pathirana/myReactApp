import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Newblog() {

    const[title, setTitle] = useState('');
    const[userid, setUserid] = useState('');
    const[body, setBody] = useState('');

    const history = useHistory();

    const addPost= (e)=>{
            e.preventDefault();

            const newPost = {title, userid, body};
            
            fetch('https://jsonplaceholder.typicode.com/posts',{
                method:"POST",
                header: {'content-type':'application/json'},
                body: JSON.stringify(newPost),
            })
                .then((Response) => Response.json())
                .then((json) =>{
                    console.log("completed");
                    alert('Successfully Added');
                    history.push('/');
                })
    }

    return (
        <div className="add-post">
            <h2>Add New Blog</h2>
            <form onSubmit={addPost}>
                <lable>Add Title</lable>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <lable>Add of the User ID </lable>
                <input type="text" value={userid} onChange={(e)=>setUserid(e.target.value)}/>

                <lable>Add Content</lable>
                <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <button>Publish</button>
            </form>
        </div>
    )
}

export default Newblog
