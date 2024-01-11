import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Dynamic from "./components/Dynamic"
import Contact from "./components/Contact"
import Joke from "./components/Joke"
import NewJoke from "./components/NewJoke"
import NewJokesData from "./NewJokesData"
import Data from "./Data"

import chomok from "./images/chomok.jpg"
import shuvo from "./images/shuvo_fb1.jpg"
import shanto from "./images/shanto.jpg"
import sagor from "./images/sagor.jpg"

const App = () => {
  const athlete = "https://picsum.photos/200/300"
  const jokesElement = NewJokesData.map(joke => {
    return (
      <NewJoke
        setup={joke.setup}
        punchline={joke.punchline} />
    )
  })
  const dataElement = Data.map(data => {
    return (
      <Card 
        key={data.id}
        img={data.coverImg}
        rating={data.status.rating}
        reviewCount={data.status.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        openSpots={data.openSpots}
        />
    )
  })
  return (
      <div className="container">
          <Navbar />
          <Hero />

          <section className="card-list">
            {dataElement}
          </section>

          <Dynamic />
          <Joke 
            setup="If you want a simple, thorough roadmap for how to start a blog."
            punchline="With over 4 million readers, we’re one of the world’s biggest websites about writing and blogging. We’ve helped thousands of people start a blog, improve their writing skills, and earn real, tangible income online. And today, we’re going to help you."
            ispunch={true}
            upvotes={45}
            downvotes={5}
            comments=""
            />
          <Joke 
            setup="Pick the Right Blog Topic."
            punchline="Most people don’t know there’s a huge chance of failure, so they spend months or even years creating a blog with zero chance of succeeding."
            ispunch={false}
            upvotes={10}
            downvotes={2}
            comments={[{author: "", body: "", title: ""}]}
            />
          <Joke 
            setup="How to Choose a Winning Blog Topic."
            punchline="Too many bloggers try to be cute. They hunt for an audience no one else is serving. They think, “if there’s no competition for this topic, creating a successful blog will be easy!”"
            ispunch={true}
            upvotes={25}
            downvotes={7}
            comments=""
            />
          <Joke 
            setup="Choose the Right Blogging Platform"
            punchline="In fact, we’re big proponents of bloggers starting with a free blog at Medium.com so they can test their content ideas and make sure they’re viable before creating a full-fledged blog."
            ispunch={true}
            upvotes={78}
            downvotes={3}
            comments=""
            />
          <section className="card-list">
              <Contact
                img={chomok}
                name="A.B.Chomok"
                phone="(212) 555-1234"
                email="mr.chomok@gmail.com"
              />


             <Contact 
                img={shuvo}
                name="Hassan Shuvo"
                phone="(212) 555-4567"
                email="mr.shuvo@gmail.com"
              />


              <Contact 
                img={shanto}
                name="Hasibul Hasan Shanto"
                phone="(212) 555-1245"
                email="mr.shanto@gmail.com"
              />


              <Contact 
                img={sagor}
                name="Sagor Ahmed"
                phone="(212) 555-1288"
                email="mr.sagor@gmail.com"
              />

          </section>
          {jokesElement}

      </div>
  )
}

export default App;
