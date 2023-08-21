import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 600px;
    border-radius: 0px 0px 4px 4px;
    border: 2px solid black;
    margin: 0 auto;
    margin-bottom: 50px;
    text-align: center;
`;

export const TableHead = styled.thead`
    background-color: skyblue;
    color: white;
`;

export const TableHeading = styled.th`
    padding: 20px;
    font-size: 15px;
    font-weight: 500;
    font-family: sans-serif;
    text-transform: uppercase;
`;
export const TableRaw = styled.tr`
    &: nth-child(even) {
        background-color: #d1d1da;
    }
`;

export const TableData = styled.td`
    width: 200px;
`;