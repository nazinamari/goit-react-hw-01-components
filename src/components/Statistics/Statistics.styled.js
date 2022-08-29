import styled from 'styled-components';

export const Container = styled.section`
    margin: 0px auto;
    width: 300px;
    height: 100%;
    border: 1px solid #d6d6d6;
`;

export const Title = styled.h2`
    color: rgb(117, 111, 111);
    background-color: white;
    font-weight: 600;
    text-align: center;
    padding: 20px 20px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
    padding: 0px;
    margin: 0px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.white};
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Percentage = styled.span`
    color: ${p => p.theme.colors.white};
    font-weight: 500;
    margin-bottom: 10px;
`; 