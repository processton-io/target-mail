import Cookies from 'js-cookie'
import * as types from '../mutation-types'

interface LangState {
    locale: string;
    locales: string[];
}

// state
export const state: LangState = {
    locale: getLocale([], ''),
    locales: []
}

// getters
export const getters = {
    locale: (state: LangState) => state.locale,
    locales: (state: LangState) => state.locales
}

// mutations
export const mutations = {
    [types.SET_LOCALE] (state: LangState, { locale }: { locale: string }) {
        state.locale = locale
    }
}

// actions
export const actions = {
    setLocale ({ commit }: { commit: Function }, { locale }: { locale: string }) {
        commit(types.SET_LOCALE, { locale })

        Cookies.set('locale', locale, { expires: 365 })
    }
}

/**
 * @param  {String[]} locales
 * @param  {String} fallback
 * @return {String}
 */
function getLocale (locales: string[], fallback: string): string {
    const locale = Cookies.get('locale')

    if (locale && locales.includes(locale)) {
        return locale
    } else if (locale) {
        Cookies.remove('locale')
    }

    return fallback
}
