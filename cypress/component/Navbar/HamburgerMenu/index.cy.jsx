import HamburgerMenu from "../../../../src/pages/Navbar/HamburgerMenu/index.jsx"
import store from "../../../../src/state/store.js"
import { Provider } from "react-redux"

describe('testing HamburgerMenu functionality', () => {

  beforeEach(() => {
    cy.mount(<Provider store={store}><HamburgerMenu/></Provider>)
  })

  it('testing inside the hamburger Menu Icon Button', () => {
    cy.get(`[name= "HamburgerMenuIcon"]`).click();
    cy.get(`[name="SignUpButton"]`).contains('Sign Up').click();
    cy.get(`[name= "SignInButton"]`).contains('Sign In').click();
    cy.get(`[name="createCourse"]`).contains('Create Course').click() 
    cy.get(`[name="about"]`).contains('Explore Courses').click(); 
    cy.get(`[name= CancelButtonIcon]`).click(); 
  
  }); 
})

/*
*/