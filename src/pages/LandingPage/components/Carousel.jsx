import styled, {css} from 'styled-components'
import { Image } from 'semantic-ui-react'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonNext,
    ButtonBack,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const SliderWrapper = styled.div`

    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.534);

`

const Content = styled.div`

  font-family: 'Syncopate', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 0px 5px 17px rgba(0, 0, 0, 1);
  line-height: 6rem;
  color: white;
  width: 1050px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

`

const Nav = styled.nav`

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;

`

const sharedStyles = css`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 19, 43, 0.5);
  color: white;
  border: 0;
  font-size: 40px;
  outline: none;
  transition: opacity 0.35s;
  &:disabled {
    opacity: 0;
  }

`
const NextButton = styled(ButtonNext)`

  ${sharedStyles};

`
const BackButton = styled(ButtonBack)`

  ${sharedStyles};

`

const slides = [
    "https://am23.mediaite.com/tms/cnt/uploads/2012/10/CatsWorking.jpg",
    "https://3milliondogs.com/blog-assets-two/2015/05/9-cats-20-boxes-1024x731.png",
  ]

const Carousel = () => {
    
    return (

      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={500}
          totalSlides={3}
          visibleSlides={1}
        >
          <Slider>
            <Slide index={1}>
              <Content>
              <p>
                A Modern solution to organize cats
              </p>
              </Content>
            </Slide>
            <Slide index={2}>
              <Content>
                Very professional
              <Image src={slides[0]}
                    size='big'
                    style={{ filter: 'grayscale(60%)', borderRadius: '8px', margin: '3rem 0' }}/>
              </Content>
            </Slide>
            <Slide index={3}>
              <Content>
                Cats!
              <Image src={slides[1]}
                    size='large'
                    style={{ filter: 'grayscale(60%)', borderRadius: '8px', margin: '3rem 0' }}/>
              </Content>
            </Slide>
          </Slider>
          <Nav>
            <BackButton>{`<`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
        </CarouselProvider>
      </SliderWrapper>
    )
}

export default Carousel