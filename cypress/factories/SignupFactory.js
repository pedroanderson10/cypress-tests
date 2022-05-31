var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85911111111',
            
            address:{
                postalcode: '60830345',
                street: 'Rua Manuel Teixeira',
                number: '1000',
                details: 'casa 45',
                district: 'José de Alencar',
                city_state: 'Fortaleza/CE' 
            },
            delivery_method: 'Moto', 
            cnh:'cnh-digital.jpg'
        }

        return data

    }

}