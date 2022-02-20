const spyModule = require('./spy')
describe('spy function', () => {
    it('spy calls', async () => {
        const saveOrderSpy = jest.spyOn(spyModule, 'saveOrder')
        const addBonusesSpy = jest.spyOn(spyModule, 'addBonuses')
        const updateStocksSpy = jest.spyOn(spyModule, 'updateStocks')
        await spyModule.createOrder('userId', [{ id: 1, quantity: 10, price: 100 }], 1000)
        expect(saveOrderSpy).toHaveBeenCalledWith(1, 'userId', [{ id: 1, quantity: 10, price: 100 }]);
        expect(addBonusesSpy).toHaveBeenCalledWith('userId', 1000);
        expect(addBonusesSpy).toHaveBeenCalledWith('userReferral', 1000);
        expect(updateStocksSpy).toHaveBeenCalledWith(1, [{ id: 1, quantity: 10, price: 100 }]);
    })
})