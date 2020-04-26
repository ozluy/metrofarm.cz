import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from 'pure-react-carousel'
import styled, { css } from 'styled-components'
import { H1, Img, Div } from 'components/Elements'
import Arrow from 'components/Icon/arrow'
import imgList from './imgList'

const sharedButtonStyle = css`
  top: 400px;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
`

export const Wrapper = styled.div`
  position: relative;
  padding: 70px;

  #buttonNext {
    ${sharedButtonStyle};
    right: 18%;
    transform: rotate(-180deg);
  }

  #buttonBack {
    ${sharedButtonStyle};
    left: 18%;
  }
  .slider-dot-group {
    bottom: 100px;
    width: 400px;
    position: absolute;
    justify-content: center;
    display: flex;
    padding: 0 8px;

    button {
      height: 15px;
      padding: 0;
      width: 15px;
      margin: 0 4px;
      border-width: 0;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      border: solid 1px rgba(0, 0, 0, 0.1);

      &.carousel__dot--selected {
        background-color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`

const Gallery = ({ listName = 'garden' }) => {
  const selectedList = imgList[listName]
  return (
    <Wrapper>
      <H1 textAlign="center">Fotogalerie</H1>
      <Div color="black" height="600px" width="400px" m="0 auto">
        <CarouselProvider
          naturalSlideWidth={400}
          naturalSlideHeight={600}
          totalSlides={selectedList.length}
          infinite
          isPlaying
        >
          <Slider>
            {selectedList.map((imgSrc, index) => (
              <Slide style={{ height: 600 }} key={index} index={index}>
                <Img height="600px" width="400px" src={imgSrc} />
              </Slide>
            ))}
          </Slider>
          <DotGroup className="slider-dot-group" />
          <ButtonBack id="buttonBack">
            <Arrow />
          </ButtonBack>
          <ButtonNext id="buttonNext">
            <Arrow />
          </ButtonNext>
        </CarouselProvider>
      </Div>
    </Wrapper>
  )
}

export default Gallery
