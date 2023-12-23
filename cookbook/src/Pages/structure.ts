import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff; /* Background color */
  border: 1px solid #dddddd; /* Border color */
  border-radius: 8px; /* Border radius for rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle lift effect */
`;

export const MainTitle = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  color: #555;
`;

export const Paragraph = styled.p`
  color: #777;
`;

export const ExampleLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ExampleLinkItem = styled.li`
  margin-bottom: 10px;
`;

export const ExampleLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Instal = styled.section`
  margin-bottom: 30px;
`;

export const InstalTitle = styled.h2`
  color: #555;
`;

export const InstalPara = styled.p`
  color: #777;
  margin-bottom: 15px;
`;

export const CodeSnippet = styled.pre`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
`;