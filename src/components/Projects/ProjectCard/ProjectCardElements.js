import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechCard = styled.div`
  padding: 0.5rem 1rem;
  background: #f4f4f4;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #333;
  font-weight: bold;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s ease;

    &.PrimaryBtn {
      background: linear-gradient(to right, #6a11cb, #2575fc);
      color: white;
    }

    &.SecondaryBtn {
      background: #e8e8e8;
      color: #333;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
