import renderer from 'react-test-renderer'
import Historial from './Historial'

describe("Funcionalidad de Historial.js", () => {
    it("Should render", () => {

        const component = renderer.create(<Historial></Historial>)
        expect(component).toBeTruthy()
    })
})