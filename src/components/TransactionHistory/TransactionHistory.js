import PropTypes from 'prop-types';
import { History, Header, Tr, Th, Td } from './TransactionHistory.styled';
import { Box } from '../Box';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="section" m="0 auto" mb="50px">
      <History>
        <Header>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Header>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))}
        </tbody>
      </History>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};