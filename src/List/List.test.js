import renderer from 'react-test-renderer'
import List from "./List"

describe("Funcionalidad de List.js", () => {
    it("Should render", () => {

        const component = renderer.create(<List></List>)
        expect(component).toBeTruthy()
    })
})