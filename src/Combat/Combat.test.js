import renderer from 'react-test-renderer'
import Combat from './Combat'

describe("Funcionalidad de Combat.js", () => {
    it("Should render", () => {

        const component = renderer.create(<Combat></Combat>)
        expect(component).toBeTruthy()
    })
})