import axios from "axios"
import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setPosts(resp.data)
    })
  }, [])

  return (
    <Container>
      {posts.map((post) => (
        <Post baslik={post.title} mesaj={post.body} key={post.id} />
      ))}
    </Container>
  )
}

export default Posts
