import getRandomHexColor from '../utils/RandomColors';
import PropTypes from 'prop-types';

import { Container, Title, List, Item, Label, Percentage } from './Statistics.styled';
import { Section } from "components/utils/Section";

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Container>
        {title && <Title>{title.toUpperCase()}</Title>}

        <List>
          {stats.map(({ id, label, percentage }) => (
            <Item
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage + '%'}</Percentage>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
