import NavBar from "../../../src/pages/Navbar/index.jsx";
import store from "../../../src/state/store.js";
import { Provider } from "react-redux";

describe('testing Navbar functionality', () => {
    beforeEach(() => {
        cy.mount(<Provider store={store} ><NavBar/></Provider>)
    })
    it('SignUp button was clicked', () => {
        cy.get(`[name="SignUpButton"]`).click().should('be.visible')  
    }); 
   it('testing searchBar input', () => {
    cy.get(`[name="SearchBar"]`).type('Machine Learning')
   })
})

/*
SignUpButton
HamburgerMenuButton
SearchBar
*/