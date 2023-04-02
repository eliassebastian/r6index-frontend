'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import styles from "../TrendsCard.module.scss";

interface TrendsCardContentProps {
    uuid: string;
    data: number[];
    average: number;
    //maps: Map;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TrendsCardContent = (props: TrendsCardContentProps) => {

    const data: ChartData<'line'> = {
        labels: props.data.map((_, i) => i + 1),
        datasets: [
          {
            label: 'KOST',
            data: props.data,
            borderColor: '#ebe6e0',
            backgroundColor: '#ebe6e0',
            tension: 0.5,
          },
        ],
    };

    const options: ChartOptions<'line'> = {
        elements: {
            point: {
                pointStyle: false
            }
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    //hide tooltip title
                    /* @ts-ignore */
                    title: () => null,
                }
            },
            legend: {
                display: false,
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <Line data={data} options={options}/>
        </div>
    )
}

export default TrendsCardContent;