import Chart from 'chart.js/auto';

class IncomeChart {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.chart = null;
    this.initialize();
  }

  async initialize() {
    await this.populateYearDropdown();
    this.setupYearChangeListener();
  }

  async populateYearDropdown() {
    const yearSelect = document.getElementById('yearSelect');

    try {
      const response = await fetch(`${this.apiUrl}/api/get/years/income`);
      const { data } = await response.json();

      data.forEach((item) => {
        const option = document.createElement('option');
        option.value = item.tahun;
        option.textContent = item.tahun;
        yearSelect.appendChild(option);
      });

      if (data.length > 0) {
        this.loadChartData(data[0].tahun);
      }
    } catch (error) {
      console.error('Error fetching years:', error);
    }
  }

  setupYearChangeListener() {
    const yearSelect = document.getElementById('yearSelect');
    yearSelect.addEventListener('change', (event) => {
      const selectedYear = event.target.value;
      if (selectedYear) {
        this.loadChartData(selectedYear);
      }
    });
  }

  async loadChartData(year) {
    try {
      const response = await fetch(`${this.apiUrl}/api/get/income/${year}`);
      const { data } = await response.json();

      if (data) {
        // eslint-disable-next-line camelcase
        const { total_pendapatan, total_belanja } = data;
        this.renderChart(year, total_pendapatan, total_belanja);
      } else {
        console.warn('No data found for year:', year);
      }
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  }

  renderChart(year, income, expense) {
    const ctx = document.getElementById('incomeChart').getContext('2d');

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Pendapatan', 'Belanja'],
        datasets: [
          {
            label: `APB Desa Tahun ${year}`,
            data: [income, expense],
            backgroundColor: ['#4CAF50', '#F44336'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: Rp ${context.raw.toLocaleString('id-ID')}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `Rp ${value.toLocaleString('id-ID')}`,
            },
          },
        },
      },
    });
  }
}

export default IncomeChart;
