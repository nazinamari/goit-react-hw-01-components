import styled from 'styled-components';

export const Description = styled.div`
    border-radius: ${p => p.theme.radii.normalTop};
    background-color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    border: ${p => p.theme.borders.normal};
    border-bottom: none;
`;

export const Avatar = styled.img`
    background-color: antiquewhite;
    width: 200px;
    border-radius: ${p => p.theme.radii.round};
    margin-top: ${p => p.theme.space[4]+4}px;
    margin-bottom: ${p => p.theme.space[4]+4}px;
`;

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]+2}px;
    text-align: center;
    color: ${p => p.theme.colors.black};
`;

export const Tag = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-weight: ${p => p.theme.fontWeights.normal};
    margin-bottom: ${p => p.theme.space[3]+2}px;
`;

export const Location = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-weight: ${p => p.theme.fontWeights.normal};
    margin-bottom: ${p => p.theme.space[3]+2}px;
`;