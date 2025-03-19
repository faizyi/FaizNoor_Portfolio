import styled from "@emotion/styled";

export const ProjectsGrid = styled.div`

display: grid;
  grid-template-columns: repeat(3, 1fr); /* Ensures 3 cards in a row */
  gap: 2rem;
  padding: 1rem;
  

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on medium screens */
  }
    @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); /* 1 card per row on small screens */
  }

`

export const Card = styled.div`
  background: #FAFAFA;
  padding: 0.5rem;
  border: #D2D2D1 1px solid;
  border-radius: 12px;
  overflow: hidden; /* Ensures content stays within the card */
  height: 400px; /* Set uniform card height */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;



export const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  height: 250px; /* Set a fixed height for uniformity */
  overflow: hidden;
  position: relative;

  &:hover {
    overflow-y: auto; /* Show scrollbar on hover */
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  h4 {
    font-size: 1.8rem;
    color: #1f2937;
    font-weight: 600;
    margin-bottom: 0.8rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;
  }
`;



export const TechCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const TechCard = styled.div`
  background: #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &.PrimaryBtn {
   padding: 12px 20px;
  border-radius: 100px;
  text-decoration: none;

      &:hover {
        color: #dad7d7;;
      }
    }

    &.SecondaryBtn {
  padding: 12px 20px;
  border: #D2D2D1 1px solid;
  background: #FCFCFC;
  color: #1A1A19;
  border-radius: 100px;
  cursor: pointer;
    transition: all 0.3s ease;

      &:hover {
         background: #EFEFEE;
      }
    }
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .FilterBtn {
    padding: 12px 40px;
    border: #D2D2D1 1px solid;
    background: #FCFCFC;
    color: #1A1A19;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #EFEFEE;
    }

    /* Add the active state styles */
    &.active {
      background-color: black;
      color: white;
    }
  }
`

