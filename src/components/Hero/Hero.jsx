import styled from 'styled-components'
import TextCarousel from '../TextCarousel/TextCarousel'
import FlorkCharacter from '../FlorkCharacter/FlorkCharacter'

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #000000;
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-position: center top;
  object-fit: cover;
  image-rendering: auto;
`

const Title = styled.h1`
  font-family: 'Clash Display', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 64px;
  text-align: center;
  line-height: 1.2;
  margin: 0;
  padding: 0 20px;
  text-shadow: 0px 4px 13.8px rgba(0, 0, 0, 0.25);
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`

const CharacterWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 600px;
  margin: 30px auto 0;
  aspect-ratio: 1;
`

const CarouselWrapper = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 20px;
`

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundWrapper>
        <BackgroundImage
          decoding="async"
          sizes="100vw"
          srcSet="https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg?scale-down-to=2048 553w,
                  https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg?scale-down-to=4096 1106w,
                  https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg 1441w"
          src="https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg"
          alt="Background"
        />
      </BackgroundWrapper>
      <ContentWrapper>
        <Title>WELCOME TO THE<br />FLORK'S WORLD</Title>
        <CharacterWrapper>
          <FlorkCharacter />
        </CharacterWrapper>
        <CarouselWrapper>
          <TextCarousel />
          <br />
        </CarouselWrapper>
      </ContentWrapper>
    </HeroContainer>
  )
}

export default Hero
