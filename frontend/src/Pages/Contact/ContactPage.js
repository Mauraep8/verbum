import React,{useState, useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.scss'
import SubmitMessage from '../../Components/SubmitMessage/SubmitMessage'
import Footer from '../../Components/Footer/Footer'

export default function ContactPage() {

  const [state, setState] = useState([false])
  const subjectInput = useRef ([])
  const messageInput = useRef ([])

  const submitHandler = (e) =>{
    e.preventDefault()
    // console.log(subjectInput.current.value)
    if (subjectInput.current.value !== ' ' && messageInput.current.value !== ' '){
      setState(true)
    }
    if (subjectInput.current.value === ' '){
      subjectInput.current.classList.add('contact__input--error')
    }
  }

  return (
    <div className='contact'>
      <Navbar/>
      <div className='contact__background'>
        <div className='contact__container'>
        <SubmitMessage uploadClicked={state}/>
              <h2 className='contact__header'>contact</h2>
              <div className='contact__form-container'>
                  <form action="">
                    <div className='contact__input-container'>
                      <label className='contact__input-label' htmlFor="">subject:</label>
                      <input className='contact__input'  type="text" ref={subjectInput}/>
                    </div>
                    <div className='contact__input-container'>
                      <label className='contact__input-label' htmlFor="">message:</label>
                      <textarea className='contact__input contact__input--secondary' type="text" ref={messageInput}/>
                    </div>
                      <button className='contact__button' onClick={submitHandler}>Submit</button>
                  </form>
              </div>
          </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}