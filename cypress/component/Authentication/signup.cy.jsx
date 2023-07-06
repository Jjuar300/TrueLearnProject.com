import SignUpPage from '../../../src/pages/Authentication/SignUp'
import { Provider } from 'react-redux'
import store from '../../../src/state/store'


describe('testing the signup page', () => {
    beforeEach(() => {
        cy.mount(<Provider store={store} ><SignUpPage/></Provider>)
    })

    it('user entering name and lastname', () => {
        cy.get('[name="firstname"]').type('Jose')
        cy.get(`[name='lastname']`).type('Juarez')
    })

    it('user uploading a photo', () => {
        cy.get('[name="uploadphoto"]').click()
    })

    it('user enters email and password', () => {
        cy.get('[name="email"]').type('Jjuareze2002@gmail.com'); 
        cy.get('[name="password"]').type('123');
    })
    it('user submiting the form', () => {
        cy.get('form').submit()
    })
})