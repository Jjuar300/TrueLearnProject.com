import SignInPage from "../../../src/pages/Authentication/SignIn";
import { Provider } from "react-redux";
import store from "../../../src/state/store";

describe('testing signin page ', () => {
    beforeEach(() => {
        cy.mount(<Provider store={store} ><SignInPage/></Provider>)
    })

    it('user adds email account and password', () => {
        cy.get(`[name="email"]`).type('Jjuareze2002@gmail.com')
        cy.get(`[name="password"]`).type('123')
    })

    it('user forgots password', () => {
        cy.get(`[name="forgotpasswordbutton"]`).click()
    })

   it('user submits sign in form', () => {
    cy.get('form').submit()
   })
   
})