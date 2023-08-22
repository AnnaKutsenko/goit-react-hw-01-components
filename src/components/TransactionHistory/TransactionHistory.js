import PropTypes from 'prop-types';
import {TransactionTable, TableHead, TableHeading, TableRaw, TableData} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable className="transaction-history">
        <TableHead>
            <tr>
                <TableHeading>Type</TableHeading>
                <TableHeading>Amount</TableHeading>
                <TableHeading>Currency</TableHeading>
            </tr>
        </TableHead>

        <tbody>
            {items.map(item => {
                return (
                    <TableRaw key={item.id}>
                        <TableData>{ item.type}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{ item.currency}</TableData>
                    </TableRaw>
            )
            })}
        </tbody>
        </TransactionTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

    })).isRequired,
};