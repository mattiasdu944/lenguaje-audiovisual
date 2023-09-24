class BarChart {
    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
    }
}

class PieChart {
    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
    }
}

class RadialChart {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
    }
}

const barChart = new BarChart();
barChart.draw([1, 2, 3]);

const pieChart = new PieChart();
pieChart.draw([30, 40, 60]);

const radialChart = new RadialChart();
radialChart.draw([10, 20, 30]);
