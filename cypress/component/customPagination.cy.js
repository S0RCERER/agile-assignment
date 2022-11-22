/* eslint-disable no-undef */
import CustomPagination from "../../src/components/customPagination"

describe('Pagination Component', () => {
  it('added correctly', () => {
    cy.mount(<CustomPagination />).get(".MuiButtonBase-root").contains("30")
  });
})