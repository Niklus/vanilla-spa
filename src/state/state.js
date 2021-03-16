import { getStateFromStorage } from '../utils/storage';

export default getStateFromStorage() || {
  count: 0,
  data: null,
  todos: [],
};
