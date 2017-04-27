import * as actions from '../src/redux/actions';

describe('todo actions', () => {
    it('should ADD action create todo', () => {
        expect(actions.add('Use Redux')).toEqual({
            type: 'ADD',
            text: 'Use Redux',
            id: 0
        });
    });

    it('shuold TOGGLE action completed toggle todo', () => {
        expect(actions.toggle(0)).toEqual({
            type: 'TOGGLE',
            id:0
        });
    });

    it('shuold REMOVE action remove todo item', () => {
        expect(actions.remove(0)).toEqual({
            type: 'REMOVE',
            id:0
        });
    });

    it('shuold RESET action reset todo list', () => {
        expect(actions.reset()).toEqual({
            type: 'RESET'
        });
    });
});