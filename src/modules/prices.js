import { createActions, handleActions } from 'redux-actions'
import api from '../api'
import { getLatestRelease } from './bootstrap'

const runeliteApi = api('https://api.runelite.net/')

// Actions
export const { fetchPrices, setPrices } = createActions(
  {
    FETCH_PRICES: () => async (dispatch, getState) => {
      const version = getLatestRelease(getState())

      const prices = await runeliteApi(`runelite-${version}/item/prices.js`, {
        method: 'GET'
      })

      let priceMap = {}

      for (let item of prices) {
        priceMap[item.id] = item.price
      }

      dispatch(setPrices(priceMap))
    }
  },
  'SET_PRICES'
)

// Reducer
export default handleActions(
  {
    [setPrices]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  },
  {
    data: {}
  }
)

// Selectors
export const getPrices = state => state.prices.data
