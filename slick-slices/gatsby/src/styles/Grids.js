import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));

  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (max-width: 400px) {
    --columns: 1;
  }
`;

export const ItemStyles = styled.div`
  text-align: center;
  position: relative;

  img {
    height: auto;
    font-size: 0;

    @keyframes shine {
      from {
        background-position: 200%;
      }
      to {
        background-position: -40px;
      }
    }

    &.loading {
      --shine: white;
      --background: var(--grey);
      background-image: linear-gradient(
        90deg,
        var(--background) 0px,
        var(--shine) 40px,
        var(--background) 80px
      );
      background-size: 500px;
      animation: shine 1s infinite linear;
    }
  }

  p {
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
  }

  .mark {
    display: inline;
  }
`;