import React from 'react'

export default class AuthService {
  constructor(clientId, domain) {
      // config Auth0
      this.clientId = clientId
      this.domain = domain

      this.lock = new Auth0Lock(clientId, domain, {})
      // add callback for lock 'authenticated' event
      this.lock.on('authenticated', this._doAuthentication.bind(this))
      // binds login function to keep context
      this.login = this.login.bind(this)
  }
  _doAuthentication(authResult) {
      // Saves the user token
      this.setToken(authResult.idToken)
  }

  getLock() {
      // an instance of lock
      return new Auth0Lock(this.clientId, this.domain, {});
  }

  login() {
      // call the new method to display the widget
      this.lock.show()
  }

  loggedIn() {
      // checks if there is a saved token and it's still valid
      return !!this.getToken()
  }

  setToken(idToken) {
      // saves user token to localStorage
      localStorage.setItem('id_token', idToken)
  }

  getToken() {
      // retrieves the user token from localStorage
      return localStorage.getItem('id_token')
  }

  logout() {
      // clear user token and profile data from localStorage
      localStorage.removeItem('id_tokeb');
  }
}