import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { ChartData } from '../../models/project.model';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  template: `
    <div class="chart-container">
      <h3 class="chart-title">{{ title }}</h3>
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .chart-title {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      color: #1e293b;
      font-weight: 600;
    }

    canvas {
      max-height: 300px;
    }
  `]
})
export class BarChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input({ required: true }) data!: ChartData;
  @Input() title = 'Gráfico de Barras';
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart: Chart | null = null;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(): void {
    if (this.chart) {
      this.chart.destroy();
      this.createChart();
    }
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private createChart(): void {
    if (!this.chartCanvas) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: this.data.datasets.map((ds) => ({
          ...ds,
          borderRadius: 8,
          borderSkipped: false,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#f1f5f9',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
