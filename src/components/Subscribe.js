import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import subscribeFormStyles from '../styles/components/subscribeform.module.scss'

export default class Subscribe extends React.Component {
    constructor() {
        super()
        this.state = { email: '', result: null }
      }
      
      handleSubmit = event => {
        const result = addToMailchimp(this.state.email)
        if (result.result === 'error') {
          alert(`Opala, si že prijavljen!`)
        } else {
          alert(`Hvala!`)
        }
        this.setState({ result: result })
      }
    
      handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
      }
    
    render() {
        return (
            <div className={subscribeFormStyles.subscribeForm}>
              <p className={subscribeFormStyles.subscribeInfo}>
                Blablabla, add CTA: So ti moje besedne nebuloze všeč? Pusti mi svoj mail, pa ti pošljem opomnik ob vsaki novi objavi.
              </p>
              <form onSubmit={this.handleSubmit}>
            <label>
                <input className={subscribeFormStyles.subscribeInput}
                type="text"
                name="email"
                placeholder="email"
                onChange={this.handleEmailChange}
                required />
            </label>
            <button type="submit" className={subscribeFormStyles.subscribeButton}>Prijava</button>
            </form>
            </div>
        )
      }
  }
