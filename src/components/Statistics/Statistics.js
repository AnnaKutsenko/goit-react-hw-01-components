import PropTypes from 'prop-types';
import { StatItem, StatisticsSection, StatisticsTitle, StatList, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection className="statistics">
            {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
            <StatList className="stat-list"> 
                {stats.map(({ id, label, percentage }) =>
                    <StatItem key={id} className="item">
                        <Label className="label">{ label } </Label>
                        <Percentage className="percentage">{ percentage} %</Percentage>
                    </StatItem> 
                )}
            </StatList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}
