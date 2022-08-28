import styled from '@emotion/styled';

export const Stats = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    background-color: #f3f6f9;
    border: 1px solid #d6d6d6;
    border-radius: 0px 0px 12px 12px;
`;

export const Item = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Label = styled.span`
    color: #919da9;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Quantity = styled.span`
    font-weight: 700;
    text-align: center;
`;