import styled from "styled-components"

const MainSection = styled.main`
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    

`

const Hero = styled.div`

    width: 800px;
    background-color: #f4eae6;
    padding: 3rem;
    border-radius: 5px;

`

const HeroImg = styled.div`

    width: 500px;
    height: 400px;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e8/12_cats_eating_together_around_a_centrally_placed_lamp_in_cat_cafe.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`


function Main(){
    return (
        <MainSection>
            <Hero>
            <HeroImg/>
            </Hero>
        </MainSection>
    )
}

export default Main