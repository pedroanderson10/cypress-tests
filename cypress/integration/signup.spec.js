// import SignUpPage from '../pages/SignUpPage'
import signupPage from '../pages/SignUpPage' //Importa a classe já intanciada
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach(function() { //É necessário usar function invés de arrow, para essa sintaxe funcionar
    //     cy.fixture('deliver').then((d)=>{ 
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function() {

        var deliver = signupFactory.deliver()

        signupPage.go()
        // signUp.fillForm(this.deliver.signup)
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.modalContentShouldBe("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
    })

    it('Invalid document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = "000000141AA"

        signupPage.go()
        // signupPage.fillForm(this.deliver.cpf_invalid)
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe("Oops! CPF inválidu")
    })

    it('Invalid email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = "teste.com.br"

        signupPage.go()
        // signupPage.fillForm(this.deliver.email_invalid)
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe("Oops! Email com formato inválido.")
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })

    })

    // it('Required fields', function () {

    //     signupPage.go()
    //     signupPage.submit()

    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o e-mail')
    //     signupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')


    // })

})