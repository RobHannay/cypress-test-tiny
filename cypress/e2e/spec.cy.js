/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('./app/files.html');

    cy.get('input[type=file]')
      .first()
      .selectFile('cypress/fixtures/videos/Koala1.mp4', { force: true }, { action: 'drag-drop' });

  })
})
