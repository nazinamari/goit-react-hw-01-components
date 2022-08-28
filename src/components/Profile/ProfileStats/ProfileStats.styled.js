import styled from 'styled-components';

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    background-color: #f3f6f9;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normalBottom};
`;

export const Item = styled.li`
    padding: ${p => p.theme.space[3]+2}px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.secondary};
    font-weight: ${p => p.theme.fontWeights.normal};
    margin-bottom: ${p => p.theme.space[3]+2}px;
`;

export const Quantity = styled.span`
    font-weight: ${p => p.theme.fontWeights.boldPlus};
    text-align: center;
`;