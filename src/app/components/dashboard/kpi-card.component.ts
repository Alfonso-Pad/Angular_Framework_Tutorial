import { Component, Input } from '@angular/core';
import { KpiData } from '../../models/project.model';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  template: `
    <div class="kpi-card" [style.--accent-color]="kpi.color">
      <div class="kpi-icon">{{ kpi.icono }}</div>
      <div class="kpi-content">
        <h3 class="kpi-title">{{ kpi.titulo }}</h3>
        <div class="kpi-value">{{ kpi.valor }}</div>
        @if (kpi.cambio !== undefined) {
          <div class="kpi-change" [class.positive]="kpi.cambio > 0" [class.negative]="kpi.cambio < 0">
            {{ kpi.cambio > 0 ? '↑' : '↓' }} {{ kpi.cambio > 0 ? '+' : '' }}{{ kpi.cambio }}%
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .kpi-card {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      border-left: 4px solid var(--accent-color);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .kpi-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }

    .kpi-icon {
      font-size: 2.5rem;
      line-height: 1;
    }

    .kpi-content {
      flex: 1;
    }

    .kpi-title {
      margin: 0;
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .kpi-value {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0.25rem 0;
    }

    .kpi-change {
      font-size: 0.85rem;
      font-weight: 600;
    }

    .kpi-change.positive {
      color: #22c55e;
    }

    .kpi-change.negative {
      color: #ef4444;
    }
  `]
})
export class KpiCardComponent {
  @Input({ required: true }) kpi!: KpiData;
}
