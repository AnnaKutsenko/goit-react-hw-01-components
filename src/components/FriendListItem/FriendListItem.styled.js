import styled from 'styled-components';

export const FriendItem = styled.li`
    width: 400px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.$status) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return 'null';
        }
    }};
`;

export const FriendAvatar = styled.img`
    background-color: #0000ff17;
    border-radius: 10px;
`;

export const FriendName = styled.p`
    font-size: 22px;
    font-weight: 700;
`; 