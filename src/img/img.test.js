import renderer from 'react-test-renderer'
import Imagen from "./img"

describe("Funcionalidad de img.js", () => {
    it("Should render", () => {

        const component = renderer.create(<Imagen></Imagen>)
        expect(component).toBeTruthy()
    })
})