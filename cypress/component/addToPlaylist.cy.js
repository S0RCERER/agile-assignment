/* eslint-disable no-undef */
import AddToPlaylistIcon from "../../src/components/cardIcons/addToPlaylist"

describe('Play List Icon', () => {
  it('added correctly', () => {
    cy.mount(<AddToPlaylistIcon />)
  });
})