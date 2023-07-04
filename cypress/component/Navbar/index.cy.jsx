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

    it('clicking the SearchIcon', () => {
        cy.get(`[name="SearchIcon"]`).click()
    })

   it('testing searchBar input', () => {
    cy.get(`[name="SearchBar"]`).type('Machine Learning')
   })

   it('clicking the white box area to exit the searchbar', () => {
    cy.get(`[name="onCloseClick"]`).click()
   })

   it('testing categories buttons', () => {
    cy.get('.AI').click()
    cy.get('.productmanagement').click()
    cy.get('.robotics').click()
    cy.get('.graphicdesign').click()
    cy.get('.engineering').click()
   })

})
