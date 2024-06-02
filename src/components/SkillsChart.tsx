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
                data: [82, 71, 55, 85, 73, 70, 65, 72, 80, 60, 75, 72, 91, 58, 79],
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
