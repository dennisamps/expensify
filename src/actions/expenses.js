import uuid from 'uuid';


//ADD expense acvtion
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt

    }

});


//remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});


//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id:id,
    updates:updates
});

export {editExpense, removeExpense, addExpense}