

class SignUpPage {

    go(){
        cy.visit('/')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        
        cy.get('#page-deliver form h1').contains('cadastre-se para fazer entregas', { matchCase: false }) // Outra forma de verificar texto, mas ignorando case sensitive
    }

    fillForm(deliver){
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type = "button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street) //Verificar value e não o texto da tag
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        // cy.contains('.delivery-method li', deliver.delivery_method).click()
        // cy.get(`img[alt=${deliver.delivery_method}`).click()
        cy.get(`.delivery-method li [alt=${deliver.delivery_method}]`).click() // É necessário inserir crase : `texto...` para utilizar uma string como valor de atributo

        // cy.get('input[accept="image/*"][type="file"]').attachFile(deliver.cnh)
        // cy.get('input[accept^="image"][type="file"]').attachFile(deliver.cnh) //Utilizar o acento '^', é uma técnica de expressão regular onde é procurado no início da propriedade o valor especificado, que nesse exemplo começa com "image".
        cy.get('input[accept$="/*"][type="file"]').attachFile('/images/' + deliver.cnh) //Utilizar o símbolo '$', é uma técnica de expressão regular onde é procurado no fim da propriedade o valor especificado, que nesse exemplo termina com "/*".
        // cy.get('input[accept*="image"][type="file"]').attachFile(deliver.cnh) //Utilizar o símbolo '*', é uma técnica de expressão regular onde é procurado na propriedade o valor especificado, que nesse exemplo contém "image".
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container div[class="swal2-html-container"]').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        // cy.get('.alert-error').should('have.text', expectedMessage )
        cy.contains('.alert-error', expectedMessage).should('be.visible') //Busca o elemento da classe e concatena com o texto, ou seja, além de 
                                                                        //encontrar a classe, vai encontrar a classe com o texto especificado e verificar se está visível.
    }
    

}

// export default SignUpPage;
export default new SignUpPage; //Exporta a classe já instanciada