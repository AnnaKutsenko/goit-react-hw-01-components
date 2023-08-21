import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    font-size: 20px;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 5px;
    margin-bottom: 30px;
    `;

export const UserDescription = styled.div`
    text-align: center;
`;

export const UserImg = styled.img`
    width: 100px;
    margin: 0 auto; 
    border-radius: 50%;
`;

export const UserName = styled.p`
    color: black;
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const UserTag = styled.p`
    color: grey;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const UserLocation = styled.p`
    color: grey;
    font-size: 18px;
    margin: 5px auto;
`;

export const Stats = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    border-top: 1px solid grey;
    border-radius: 5px;
    padding-left: 0;
    margin: 0 auto;
    padding: 10px 30px;
    justify-content: center;
    background-color: #f3f1f1;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    color: grey;
    color: black;
    font-size: 20px;
`;

export const Label = styled.span`
    color: grey;
    font-weight: 500;
`;

export const Quantity = styled.span`
    font-weight: 700;
    font-size: 20px;
    `;
    