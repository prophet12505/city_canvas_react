import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import { posts } from '../../posts'
const Home = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <br></br>
        <div class="row">
            {
            posts.map((post)=>{
                return (<div class="col-md-4 mb-4">
                    <Card imgSrc={post.imgSrc} title={post.title} content={post.content}/>
                </div>)
            })}
        </div>
  </div>
      <Footer/>

    </div>
  )
}

export default Home