

describe ('home page', ()=>{ //Criação da suíte de testes
    it('app deve estar online', ()=>{ //Caso de teste
        cy.viewport(1920, 1080)
        // cy.visit('https://buger-eats.vercel.app')
        cy.visit('/')
        // cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //OBS : não utilizar o Selector Playground para buscar elementos
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })  
}) 