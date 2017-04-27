import todos from '../src/redux/reducers/todos'

describe('todos reducer', () => {
    it('should handle initial state', () => {
        expect(todos(undefined, {})).toEqual([])
    });

    it('shuold handle ADD', () => {
        expect(todos([], {
            type: 'ADD',
            text: 'Run the tests',
            id: 0
        })).toEqual([
            {
                id: 0,
                text: 'Run the tests',
                deleted: false,
                completed: false
            }
        ])

        expect(todos([
            {
                text: 'Run the tests',
                deleted: false,
                completed: false,
                id: 0
            }
        ], {
            type: 'ADD',
            text: 'Use Redux',
            id: 1
        })).toEqual([
            {
                text: 'Use Redux',
                deleted: false,
                completed: false,
                id: 1
            }, {
                text: 'Run the tests',
                deleted: false,
                completed: false,
                id: 0
            }
        ])

        expect(todos([
            {
                text: 'Use Redux',
                deleted: false,
                completed: false,
                id: 1
            }, {
                text: 'Run the tests',
                deleted: false,
                completed: false,
                id: 0
            }
        ], {
            type: 'ADD',
            text: 'Fix the tests',
            id: 2
        })).toEqual([
            {
                text: 'Fix the tests',
                deleted: false,
                completed: false,
                id: 2
            }, {
                text: 'Use Redux',
                deleted: false,
                completed: false,
                id: 1
            }, {
                text: 'Run the tests',
                deleted: false,
                completed: false,
                id: 0
            }
        ])
    });

    it('should handle TOGGLE', () => {
        expect(todos([
            {
                text: 'Fix the tests',
                deleted: false,
                completed: false,
                id: 2
            }, {
                text: 'Use Redux',
                deleted: false,
                completed: false,
                id: 1
            }, {
                text: 'Run the tests',
                deleted: false,
                completed: false,
                id: 0
            }
        ], {
            type: 'TOGGLE',
            id: 2
        })).toEqual([
            {
                text: 'Fix the tests',
                completed: true,
                deleted: false,
                id: 2
            }, {
                text: 'Use Redux',
                completed: false,
                deleted: false,
                id: 1
            }, {
                text: 'Run the tests',
                completed: false,
                deleted: false,
                id: 0
            }
        ])
    });

    it('should handle RESET', () => {
        expect(todos([
            {
                text: 'Run the tests',
                completed: false,
                deleted: false,
                id: 0
            }
        ], {type: 'RESET'})).toEqual([])
    });

    it('should handle REMOVE', () => {
        expect(todos([
            {
                text: 'Run the tests',
                completed: false,
                deleted: false,
                id: 0
            }, {
                text: 'Remove todo tests',
                completed: false,
                deleted: false,
                id: 1
            }
        ], {
            type: 'REMOVE',
            id: 1
        })).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                deleted: false,
                id: 0
            }, {
                text: 'Remove todo tests',
                completed: false,
                deleted: true,
                id: 1
            }
        ]);
    })
});