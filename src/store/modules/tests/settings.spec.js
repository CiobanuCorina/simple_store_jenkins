import settings from '../settings';
import Vuex from "vuex";
import Vue from "vue";
import {testFunction} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        settings
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe("settings", () => {
    it("should have default value", () => {
        expect(store.getters['settings/getIsDarkModeEnabled']).toBe(false);
    })
    it("should change dark mode to true", () => {
        testFunction.mockReturnValue('new string');
        store.commit('settings/mutateIsDarkModeEnabled', true);
        expect(store.getters['settings/getIsDarkModeEnabled']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})