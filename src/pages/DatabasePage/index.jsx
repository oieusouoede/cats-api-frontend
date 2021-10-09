import styled from "styled-components"
import ListComponent from "./components/ListComponent"

const Main = styled.main`
    
    width: 1000px;
    background-color: gray;
    margin: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
`

function DatabasePage() {
    return(
        <>
        <Main>
            <ListComponent/>
        </Main>
        </>
    )
}
            
export default DatabasePage