import React, { useEffect, useState } from "react"
import axios from 'axios'

function useGetPost() {
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => setPost(res.data))
    }, [])
    return [post, setPost]
}

export default function List() {
    const [post, setPost] = useGetPost()
    return <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
    </div>
}
