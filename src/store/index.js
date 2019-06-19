import Vue from "vue";
import Vuex from "vuex";

// import { SOME_MUTATION } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 30,
    todos: [
      {
        id: 1,
        text: "A",
        done: true
      },
      {
        id: 2,
        text: "B",
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionA({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("someMutation");
          resolve();
        }, 1000);
      });
    }
  }
});
