import renderer from "react-test-renderer";
import Pokemon from "./Pokemon"

describe("Funcionalidad de Pokemon.js",()=>{
    it("Should render",() =>{
        const component = renderer.create(<Pokemon></Pokemon>)
        expect(component).toBeTruthy()
    })
})
