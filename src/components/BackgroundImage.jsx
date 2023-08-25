import React from 'react'
import posts from "../images/posts.jpeg"
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BackgroundImage = (props) => {
  const navigate= useNavigate()
  const handleClick = event =>
  {
   console.log(event.target);
   console.log("Image Clicked");
   
  }
  return (
    <div>
    <Container>
    <div className='logo'>
    <img src = {posts} alt="posts" className='post'/>
    </div>
    
    </Container>
    
    <button onClick = {() => navigate(props.home ? "home" : "learn more" )}>{props.home ? "home" : "learn more"}</button>
    <button onClick={(event)=> handleClick (event, 'Hello')}>Learn More</button>
    </div>
  )
}

export default BackgroundImage

const Container = styled.div`
position: centre;
display: block;
max-height: 100%;
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

.logo{
  img{
    height: 5rem;

 }

}
button{
  padding: 0.5rem 1rem;
  background-color: #e5091;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
  position: center;
  align-item:center;

}
`
