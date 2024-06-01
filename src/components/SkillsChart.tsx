// SkillsChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SkillsChart: React.FC = () => {
    const data = {
        labels: ['JavaScript', 'TypeScript', 'PHP', 'Next.js', 'React', 'Vue.js', 'Angular', 'Bootstrap', 'Firebase', 'Node.js', 'Git', 'Sass', 'TailwindCSS', 'Photoshop', 'Figma'],
        datasets: [
            {
                label: 'Skills',
                data: [20, 15, 9, 17, 12, 9, 7, 8, 13, 10, 7, 9, 18, 6, 15],
                backgroundColor: '#fff',
                borderColor: '#ffffff',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: '#444444',
                },
            },
            y: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: '#444444',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default SkillsChart;
