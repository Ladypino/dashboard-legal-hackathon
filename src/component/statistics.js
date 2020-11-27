import React, { Fragment, PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import logo from '../images/Identify.svg'
import '../component/styles/statistics.css';
const data = [
  { name: 'NDA', value: 400 , fill:'#B455AA' },
  { name: 'CIBERSECURITY', value: 300 , fill:'#DCAFFF' },
  { name: 'LBA', value: 300 , fill:'#A100FF'},
  { name: 'BHP', value: 200 , fill:'#7500C0'},
  { name: 'ENEL', value: 100 , fill:'#460073' },
]

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PE ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Received ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Statistics extends PureComponent {
  

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
   <Fragment>

      <div  className='ContainerT'>
       <div className='headerT'>
         <h3 className='Tickets'>TICKETS</h3>
         <div className='Excel'>Export to Exel</div>
         <div className='Date'>Asig for Day</div>
       </div>

       <div className='status'>All Tickets 10</div>
       <div className='status'>Pending 4</div>
       <div className='status'>Solved 7</div>
       <div className='status'>In Process 12</div>
       <div className='status'>On Hold 20</div>

<div className='ubic'>
  <div className='containerIdentify'>
  <img src={logo} className='logoidentify'/> 
  </div>
    

      <PieChart width={8999} height={6786}>
      
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={500}
          cy={500}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
          class="recharts-layer recharts-pie-sector"
        />
      </PieChart>
      </div>
      </div>
       </Fragment>
    );
  }
}





