import React,{useState, useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.scss'
import SubmitMessage from '../../Components/SubmitMessage/SubmitMessage'

export default function ContactPage() {

  const [state, setState] = useState([false])
  const subjectInput = useRef ([])
  const messageInput = useRef ([])

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(subjectInput.current.value)
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
              <h2 className='contact__header'>Contact</h2>
              <div className='contact__form-container'>
                  <form action="">
                    <div className='contact__input-container'>
                      <label htmlFor="">Subject</label>
                      <input type="text" ref={subjectInput}/>
                    </div>
                    <div className='contact__input-container'>
                      <label htmlFor="">Message</label>
                      <textarea type="text" ref={messageInput}/>
                    </div>
                      <button className='contact__button' onClick={submitHandler}>Submit</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  )
}