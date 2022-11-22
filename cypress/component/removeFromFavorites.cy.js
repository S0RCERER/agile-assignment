/* eslint-disable no-undef */
import RemoveFromFavoritesIcon from "../../src/components/cardIcons/removeFromFavorites"

describe('Remove From Favorites Icon', () => {
  it('added correctly', () => {
    cy.mount(<RemoveFromFavoritesIcon />)
  });
})