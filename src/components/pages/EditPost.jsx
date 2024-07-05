import React,{useEffect,useState} from 'react';
import appwriteService from '../../appwrite/config'
import {Postfor,Container} from '../index';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [posts,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if (slug) {
            appwriteService.getPosts(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        }else {
            navigate('/')
        }
    },[slug,navigate])

    return post ? (
        <div className=' py-8'>
            <Container>
                <Postfor post={posts}/>
            </Container>
        </div>
    ) : null
}

export default EditPost;