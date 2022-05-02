describe('home page', ()=>{
    it('Product Buy', ()=>{
        cy.viewport(1440, 900);
        cy.visit('https://www.kabum.com.br');

        var searchData = 'Processador';

        /*Fazer a busca do produto */
        cy.wait(2000);
        cy.get('#barraBuscaKabum > div > form > input#input-busca').type(searchData);
        cy.get('#barraBuscaKabum > div > form > button.hDoVLp').click();

        /*Escolhendo o produto */
        cy.url().should('include', '/busca?query='+searchData+'');
        cy.get('div.sc-cwpsFg.eHWKRV > div > main > div:nth-child(1) > a > div.iVjBPP').click();

        /*Comprando o Produto */
        cy.wait(2000);
        cy.get('.sc-kgUAyh').click();

        /*Adicionando e indo para o carrinho */
        cy.wait(2000);
        cy.get('.sc-fxvKuh > strong').should('have.text', 'PRODUTO ADICIONADO NO CARRINHO');
        cy.get('div.sc-elYLMi.uZBpz > button.sc-fHsOPI.ieTANm.buttonGoToCart').click();

        /*Validando o Produto final */
        cy.get('div.sc-dVNjXY.kOpfPi > a.productName').should('have.text', 'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200 - BX8070110400');
    })
})