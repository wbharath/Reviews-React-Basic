import { useState } from 'react'
import reviews from './data'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'

function App() {
  const [index, setIndex] = useState(0)
  const { name, job, text, image } = reviews[index]
  // console.log(name);

  const nextPerson = () =>{
    setIndex((currentIndex) =>{
      const newIndex = (currentIndex + 1) % reviews.length
      return newIndex
    })
  }

  const prevPerson = () =>{
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length
      return newIndex
    })
  }

  const randomPerson = ()=>{
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if(randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % reviews.length
    // console.log(randomNumber, index)
    setIndex(newIndex)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronLeft onClick={prevPerson} />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={nextPerson} />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Pick Random
        </button>
      </article>
    </main>
  )
}

export default App
