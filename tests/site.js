describe('mixtap', () => {
    it('displays and navigates properly', () => {
        cy.visit('/')

        cy.get('.main-section').find('.logo-text').should('have.text', 'mixtap')

        cy.get(".main-section > nav").find('div').eq(0).find('a').click()

        cy.get('header').find('.dj').should('have.text', 'dj')


    })
    it('loads a dj mix from the database', () => {
        cy.visit('/dj')

        cy.get('div > section > ul > div ').find('#player').should('exist')
    })
})