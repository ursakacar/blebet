import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import subscribeFormStyles from "../styles/components/subscribeform.module.scss"

const isError = true

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
      isError = true
      // hide success, show error, remove border, add border
      alert(`Opala, na obveščanje si že prijavljen! Ali pa je prišlo do neke druge napake. Daj mi pošlji mail, pa bova zrihtala.`)
    } else {
      // hide error, show success, remove border, add border
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
        {/* <div id="subscribeSuccess" className={subscribeFormStyles.subscribeSuccess}>Prijava zabeležena, jo bo pa treba še potrditi preko emaila. Preveri svoj e-poštni predal za potrditveno sporočilo.</div> */}
        <div id="subscribeSuccess" className={isError ? 'hidden' : 'visible'}>Prijava zabeležena, jo bo pa treba še potrditi preko emaila. Preveri svoj e-poštni predal za potrditveno sporočilo.</div>
        <form onSubmit={this.handleSubmit} className={subscribeFormStyles.subscribeForm}>
          <label className={subscribeFormStyles.subscribeLabel}>
            <input
              id="subscribeInput"
              className={subscribeFormStyles.subscribeInput}
              type="email"
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
        <div id="subscribeFail" className={subscribeFormStyles.subscribeFail}>Opala, na obveščanje si že prijavljen! Ali pa je prišlo do neke druge napake. Daj mi pošlji mail na ursa@blebet.si, pa bova zrihtala.</div>
      </div>
    )
  }
}
