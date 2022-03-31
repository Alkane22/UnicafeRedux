const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  //Spaghetti code :D.....
  switch (action.type) {
    case 'GOOD':
      const newState = {good: state.good + 1, bad: state.bad, ok: state.ok}
      state = Object.assign({}, newState);
      return state
    case 'OK':
      const newState2 = {good: state.good, bad: state.bad, ok: state.ok + 1}
      state = Object.assign({}, newState2);
      return state
    case 'BAD':
      const newState3 = {good: state.good, bad: state.bad + 1, ok: state.ok}
      state = Object.assign({}, newState3);
      return state
    case 'ZERO':
      const newState4 = {good: 0, bad: 0, ok: 0}
      state = Object.assign({}, newState4);
      return state
    default: return state
  }
  
}

export default counterReducer