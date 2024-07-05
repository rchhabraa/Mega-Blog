import React,{useState,useEffect} from 'react';
import appwriteService from '../../appwrite/config'
import {Postcard,Container} from '../index';

function Allposts(props) {
    const [post,setpost]=useState([])
    useEffect(()=>{})
    appwriteService.getPosts([]).then((posts)=>setpost(posts.documents))
    return (
        <div  className='w-full py-8'>
            <Container>
                <div className=' flex flex-wrap'>
                {post.map((post)=>(
                    <div key={post.$id} className=' w-1/4 p-2'>
                    <Postcard post={post}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>
    );
}

export default Allposts;