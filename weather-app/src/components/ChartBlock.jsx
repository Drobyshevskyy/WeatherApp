import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function ChartBlock () {

    const { isLoading, error, data } = useSelector(store => store.weather);

    let chartData = {
        labels: [],
        datasets: [{
            data: [],
            fill: true,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            tension: 0.3,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)', 
        }]
    }

    chartData.labels = data?.map(item => item.time);
    chartData.datasets[0].data = data?.map(item => item.temp);

    let axesConfig = {
        grid: {
            display: false,
        },
        border: {
            display: false,
        },
        ticks: {
            display: false,
        }
    }
    let chartOptions = {
        maintainAspectRatio: false,
        scales: {
            x: axesConfig,
            y: axesConfig,
        },
        layout: {
            padding: {
                top: 25,
                right: 25,
                left: 25,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: '#fff',
                font: {
                    size: 15,
                },
                align: 'top',
                offset: 5,
            }
        }
    }

    return (
        <>
            {!(isLoading || error) && 
            <div className="flex place-items-center w-full h-[12rem] my-5">
                <Line
                    data={chartData} 
                    options={chartOptions}
                    plugins={[ChartDataLabels]}
                />
            </div>}
        </>
    );
}

export default ChartBlock;