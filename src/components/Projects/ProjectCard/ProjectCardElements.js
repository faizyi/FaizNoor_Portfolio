import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Adjusts content spacing */
  height: 100%; /* Allows stretching to match grid-auto-rows */
  background: linear-gradient(145deg, #ffffff, #f3f4f6);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;


export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align content evenly */
  padding: 2rem 1.5rem;
  text-align: center;

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
    margin-bottom: 1.5rem;
  }
`;


export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

export const TechCard = styled.div`
  padding: 0.6rem 1.2rem;
  background: linear-gradient(145deg, #e2e8f0, #edf2f7);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #1f2937;
  font-weight: bold;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  a {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &.PrimaryBtn {
      background: linear-gradient(to right, #6a11cb, #2575fc);
      color: white;
      box-shadow: 0 5px 15px rgba(101, 52, 255, 0.3);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(101, 52, 255, 0.4);
      }
    }

    &.SecondaryBtn {
      background: linear-gradient(to right, #e2e8f0, #edf2f7);
      color: #1f2937;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      }
    }
  }
`;
