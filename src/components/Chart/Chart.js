import ChartBar from './ChartBar'
import './Chart.css'
const Chart=props=>{
const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value)
const totalMaximum=Math.max(...dataPointsValues)
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPont)=>(
            <ChartBar 
            key={dataPont.label}
            value={dataPont.value} 
            maxValue={totalMaximum}
            label={dataPont.label}/>))}
        </div>
    )
}

export default Chart