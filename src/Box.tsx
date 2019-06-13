import styled from "styled-components";

type Props = {
  width: string;
  height: string;
  color: string;
  background: string;
  padding: string;
};

const Box = styled.div`
  font-family: sans-serif;
  background: ${(props: Props) => props.background || "red"};
  color: ${(props: Props) => props.color || "white"};
  width: ${(props: Props) => props.width || "200px"};
  padding: ${(props: Props) => props.padding || "15px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Box;
