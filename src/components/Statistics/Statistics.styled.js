import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 400px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 auto;
`;

export const StatisticsTitle = styled.h2`
  color: black;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
  padding: 10px;
  margin: 0 auto;
  background-color: aqua;
`;

export const StatItem = styled.li`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 25px;
  font-weight: 700;
`;
