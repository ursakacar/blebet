import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import subscribeFormStyles from "../styles/components/subscribeform.module.scss"

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }

  handleSubmit = async (event) => {
      event.preventDefault()
    const result = await addToMailchimp(this.state.email)
    debugger
    if (result.result === "error") {
      alert(`Opala, na obveščanje si že prijavljen! Ali pa je prišlo do neke druge napake. Daj mi pošlji mail, pa bova zrihtala.`)
    } else {
      alert(`Prijava zabeležena! Preverite svoj email`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={subscribeFormStyles.subscribeForm}>
          <label className={subscribeFormStyles.subscribeLabel}>
            <input
              className={subscribeFormStyles.subscribeInput}
              type="text"
              name="email"
              placeholder="vtipkajte vaš mail"
              onChange={this.handleEmailChange}
              required
            />
          </label>
          <button type="submit" className={subscribeFormStyles.subscribeButton}>
            Prijava
          </button>
        </form>
      </div>
    )
  }
}
