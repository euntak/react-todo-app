import filter from '../src/redux/reducers/filter';
// var filter = require('../src/redux/reducers/filter');

describe('filter reducer', () => {
   
    it('should handle show all', () => {
        expect(filter(undefined, {
            type: 'FILTER',
            filter : 'SHOW_ALL'
        })).toEqual('SHOW_ALL')
    });

    it('should handle show completed', () => {
        expect(filter(undefined, {
            type: 'FILTER',
            filter : 'SHOW_COMPLETED'
        })).toEqual('SHOW_COMPLETED')
    });

    it('should handle show deleted', () => {
        expect(filter(undefined, {
            type: 'FILTER',
            filter : 'SHOW_DELETED'
        })).toEqual('SHOW_DELETED')
    });

    it('should handle show active', () => {
        expect(filter(undefined, {
            type: 'FILTER',
            filter : 'SHOW_ACTIVE'
        })).toEqual('SHOW_ACTIVE')
    });
});