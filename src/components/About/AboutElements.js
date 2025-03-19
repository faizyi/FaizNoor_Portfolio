import styled from "@emotion/styled";

export const AboutWrapper = styled.div`
  background-color: #FAFAFA;
  padding: 3rem 0;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const AboutContent = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;
