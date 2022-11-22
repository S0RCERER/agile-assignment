/* eslint-disable no-undef */
import AddToFavorites from "../../src/components/cardIcons/addToFavorites"

describe('Favorites Icon', () => {
  it('added correctly', () => {
    cy.mount(<AddToFavorites />)
  });
})