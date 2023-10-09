import ChartTemplate from './chart-template';
import ChartType from './chart-type';
import Comparisons from './comparisons';
import DrawingTools from './drawing-tools';
import Indicators from './indicators';
import ShareChart from './share-chart';
import TimeInterval from './time-interval';

const Tools = () => (
    <div
        // test styles, we should not write inline styles :))
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <ChartTemplate />
        <ChartType />
        <Comparisons />
        <DrawingTools />
        <Indicators />
        <ShareChart />
        <TimeInterval />
    </div>
);

export default Tools;
