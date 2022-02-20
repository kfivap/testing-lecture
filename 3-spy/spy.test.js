const spyModule = require('./spy')
describe('spy function', () => {
    it('spy calls', async () => {
        const saveOrderSpy = jest.spyOn(spyModule, 'saveOrder')
        const addBonusesSpy = jest.spyOn(spyModule, 'addBonuses')
        const updateStocksSpy = jest.spyOn(spyModule, 'updateStocks')
        await spyModule.createOrder('userId', [{ id: 1, quantity: 10, price: 100 }], 1000)
        expect(saveOrderSpy).toHaveBeenNthCalledWith(1, 'userId', [{ id: 1, quantity: 10, price: 100 }]);
        expect(addBonusesSpy).toHaveBeenNthCalledWith(1, 'userId', 1000);
        expect(updateStocksSpy).toHaveBeenNthCalledWith(1, [{ id: 1, quantity: 10, price: 100 }]);
    })
})