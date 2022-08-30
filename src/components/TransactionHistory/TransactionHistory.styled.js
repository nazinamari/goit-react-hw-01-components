import styled from '@emotion/styled';

export const History = styled.table`
    background-color: white;
    width: 400px;
    height: 100%;
    align-items: center;
    box-shadow: 1px 1px 4px 2px rgb(0, 0, 0, 0.25);
    margin: 0 auto;
`;

export const Header = styled.thead`
    background-color: #00bcd5;
`;

export const Th = styled.th`
    color: white;
    padding: 10px;
`;

export const Td = styled.td`
    padding: 10px 10px 20px 40px;

    td:nth-of-type {
    text-transform: capitalize;
}
`;

export const Tr = styled.tr`
&:nth-of-type(even) {
background-color: #ecf1f3;
}
`;
