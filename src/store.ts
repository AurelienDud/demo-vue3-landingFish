import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

/**
 * Types
 */
export interface State {
  pagesVisibility: Record<string, boolean>
}

/**
 * Injection key
 * usage in components:
 * 
 * import { useStore } from 'vuex'
 * import { key } from './store'
 * // ...
 * setup () {
 *  const store = useStore(key)
 *  store.state.count // typed value
 * }
 */
export const key: InjectionKey<Store<State>> = Symbol()

/**
 * Store
 */
export const store = createStore<State>({
  state: {
    pagesVisibility: {}
  },
  getters: {
    currentView({ pagesVisibility }){
      let index = 0
      let result = undefined
      
      while (!result && index < Object.keys(pagesVisibility).length) {
        if (Object.values(pagesVisibility)[index]) {
          result = Object.keys(pagesVisibility)[index]
        }
        index++
      }

      return result
    } 
  },
  mutations: {
    updatePageVisibility(state, { pageName, isVisible = false }) { 
      if (!pageName) return 
      state.pagesVisibility[pageName] = isVisible
    }
  }
})