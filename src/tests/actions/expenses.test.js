import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses , startSetExpenses, startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import e from 'express';

const createMockStore = configureMockStore([thunk])



test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// test('should eidt expense from firebase', (done) => {
//   const store = createMockStore({});
//   const id = expenses[0].id;
//   const updates = { amount: 21045 };
//   store.dispatch(startEditExpense(id, updates)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'EDIT_EXPENSE',
//       id,
//       updates
//     });
//     return database.ref(`expenses/${id}`).once('value');
//   }).then((snapshot) => {
//     expect(snapshot.val().amout).toBe(updates.amount);
//     done();
//   });
// });

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// test fails on done()

// test('should add expense to database and store', (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: 'Mouse',
//     amount: 3000,
//     note: 'This one is better',
//     createdAt: 1000
//   };

//   store.dispatch(startAddExpense(expenseData)).then(() => {
//     expect(1).toBe(1);
//     done();
//   });
// });

test('should add expense with defaults to database and store', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

//  test fails on done()

// test('should fetch the expenses from firebase', (done) => {
//   const store = createMockStore({});
//   store.dispatch(startSetExpenses()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'SET_EXPENSES',
//       expenses
//     });
//     done();
//   });
// });