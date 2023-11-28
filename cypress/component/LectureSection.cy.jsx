import LectureSection from "../../src/components/LectureSection"
import { Provider } from "react-redux"
import store from '../../src/state/store';
import HomePage from "../../src/pages/Homepage";

describe('LectureSection.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<Provider store={store} >
      <LectureSection/>
    </Provider>); 
    cy.get('[data-testid="outlinedInput"]').click()
    cy.get('[data-testid="outlinedInput"]').type('Deep learning')
    cy.get('[name="file"]').click()
    cy.get('[name="saveButton"]').click()
  })
})