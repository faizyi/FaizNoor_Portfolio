import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  background-color: #FAFAFA;
  padding-top: 3rem;
`;

export const Image = styled.img`
  max-width: 150px; /* Adjust size as needed */
  height: 150px; /* Ensure width and height are equal */
  border-radius: 50%; /* Make the image round */
  object-fit: cover; /* Ensures the image fits nicely within the circle */
  // box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Add some depth with shadow */
  margin: 0 auto;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth hover effects */

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    box-shadow: 0 12px 10px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }
`;


export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
