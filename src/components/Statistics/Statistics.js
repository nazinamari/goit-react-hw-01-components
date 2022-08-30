import getRandomHexColor from '../utils/RandomColors';
import PropTypes from 'prop-types';

import { Title, List, Item, Label, Percentage } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section" width="300px" m="0 auto" mb="50px" border="1px solid #d6d6d6" >
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
    </Box>
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
