import styled from 'styled-components'

const CarouselContainer = styled.div`
  transform: rotate(-2deg);
  width: 100%;
  position: relative;
  z-index: 1;
`

const CarouselSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  place-items: center;
  margin: 50px 0;
  padding: 10px;
  list-style-type: none;
  opacity: 1;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0) 12.5%,
    rgb(0, 0, 0) 87.5%,
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden;
`

const CarouselList = styled.ul`
  display: flex;
  width: max-content;
  height: 100%;
  place-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: 10px;
  position: relative;
  flex-direction: row;
  will-change: transform;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

const CarouselItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const Circle = styled.div`
  width: 10px;  
  height: 10px;
  background: #8A6CFF;
  border-radius: 50%;
`

const Text = styled.p`
  font-family: 'Clash Display', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 24px;
`

const TextCarousel = () => {
  const items = ['$FLORK', 'FLORK', '$FLORK', 'FLORK'];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <CarouselContainer>
      <CarouselSection>
        <CarouselList>
          {repeatedItems.map((item, index) => (
            <CarouselItem key={`item-${index}`}>
              <Circle />
              <Text>{item}</Text>
            </CarouselItem>
          ))}
        </CarouselList>
      </CarouselSection>
    </CarouselContainer>
  )
}

export default TextCarousel
