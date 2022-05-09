import {Component} from 'react'

import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  initial: 'INITIAL',
}

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <p className="initial-view">
      Click on an event, to view its registration details
    </p>
  )

  renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        className="view-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegisteredView = () => (
    <div className="view-container">
      <img
        className="view-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        className="view-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  renderView = () => {
    // const {registrationStatus} = this.state

    const {status} = this.props

    switch (status) {
      case `${registrationStatusConstants.initial}`:
        return this.renderInitialView()

      case `${registrationStatusConstants.registered}`:
        return this.renderRegisteredView()

      case `${registrationStatusConstants.yetToRegister}`:
        return this.renderYetToRegisterView()

      case `${registrationStatusConstants.registrationsClosed}`:
        return this.renderRegistrationsClosedView()

      default:
        return null
    }
  }

  render() {
    return this.renderView()
  }
}

export default ActiveEventRegistrationDetails
