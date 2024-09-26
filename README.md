## Redux

a predictable state management library widely used in React applications. Redux helps manage complex states by centralizing it in a single source of truth and providing mechanisms for predictable state changes.

## Concepts to Learn:

### Redux Principles:

- Single Source of Truth: The state of the whole application is stored in a single JavaScript object.
- State is Read-Only: The only way to change the state is to emit an action.
- Pure Reducers: Changes are made with pure functions called reducers.
  Key Redux Components:

### Store: Holds the state.

- Actions: Plain JavaScript objects describing changes.
- Reducers: Pure functions that handle state transitions based on actions.
- Dispatch: Sends actions to the store to update the state.

### Install redux toolkit

```bash
npm install @reduxjs/toolkit react-redux
```
