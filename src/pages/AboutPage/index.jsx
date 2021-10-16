import styled from "styled-components"

const Content = styled.div`

    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 3rem;
    margin: 3rem;
    width: 700px;

`

const Header = styled.h1`

    text-align: center;
    margin-top: 5rem;

`

const Text = styled.p`

    color: white;
    font-size: 1.5rem;
    a{
        color: rgb(219, 114, 219);
    }

`

const AboutPage = () => {

    return (
        <Content>
            <Header>About this project</Header>
            <Text textAlign='justified'>
            This is a web application for registering cats. The reason I made 
            this project is because I needed some experience with react and 
            build something to display in my portfolio. Feel free to register 
            some cats and checkout the project <a href="https://github.com/oieusouoede/cats-api-frontend"> 
            repository on github</a>. This webpage is meant to be integrated with a 
            backend API that I made with Java Spring which is stored on <a href="https://github.com/oieusouoede/cats-api-backend"> 
            this repository</a> and can also be found running on Heroku through
            <a href="https://cats-api-backend.herokuapp.com/swagger-ui/"> this link</a>.
            It's a very simple project (and very poorly designed) but it was a huge 
            challenge to put it together, especially for someone who have never messed 
            with react ever. I hope I can improve this code and add some cool features, 
            like allowing the user to upload cat pictures, cause any cat related web 
            application without cat pictures is a complete waste of time.
            </Text>
            <Text>Edd.</Text>
        </Content>
    )

}

export default AboutPage