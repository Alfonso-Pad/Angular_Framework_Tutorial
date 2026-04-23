import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-table',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="table-container">
      <table class="project-table">
        <thead>
          <tr>
            <th>Proyecto</th>
            <th>Responsable</th>
            <th>Estado</th>
            <th>Progreso</th>
            <th>Presupuesto</th>
            <th>Gastado</th>
          </tr>
        </thead>
        <tbody>
          @for (project of projects; track project.id) {
            <tr>
              <td>
                <div class="project-name">{{ project.nombre }}</div>
                <div class="project-desc">{{ project.descripcion }}</div>
              </td>
              <td>{{ project.responsable }}</td>
              <td>
                <span class="status-badge" [class]="project.estado">
                  {{ getStatusLabel(project.estado) }}
                </span>
              </td>
              <td>
                <div class="progress-container">
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      [style.width.%]="project.progreso"
                      [class.high]="project.progreso >= 75"
                      [class.medium]="project.progreso >= 50 && project.progreso < 75"
                      [class.low]="project.progreso < 50"
                    ></div>
                  </div>
                  <span class="progress-text">{{ project.progreso }}%</span>
                </div>
              </td>
              <td>{{ project.presupuesto | currency:'EUR':'symbol':'1.0-0' }}</td>
              <td>{{ project.gastado | currency:'EUR':'symbol':'1.0-0' }}</td>
            </tr>
          } @empty {
            <tr>
              <td colspan="6" class="empty-state">
                No se encontraron proyectos con los filtros aplicados
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .table-container {
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .project-table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      background: #f8fafc;
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: #475569;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border-bottom: 2px solid #e2e8f0;
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid #f1f5f9;
      vertical-align: middle;
    }

    tr:hover td {
      background: #f8fafc;
    }

    .project-name {
      font-weight: 600;
      color: #1e293b;
    }

    .project-desc {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 0.25rem;
    }

    .status-badge {
      display: inline-block;
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .status-badge.pendiente {
      background: #f1f5f9;
      color: #64748b;
    }

    .status-badge.en-progreso {
      background: #fef3c7;
      color: #d97706;
    }

    .status-badge.completado {
      background: #dcfce7;
      color: #16a34a;
    }

    .status-badge.cancelado {
      background: #fee2e2;
      color: #dc2626;
    }

    .progress-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .progress-fill.high { background: #22c55e; }
    .progress-fill.medium { background: #f59e0b; }
    .progress-fill.low { background: #ef4444; }

    .progress-text {
      font-size: 0.85rem;
      font-weight: 600;
      color: #475569;
      min-width: 40px;
    }

    .empty-state {
      text-align: center;
      color: #64748b;
      padding: 2rem;
    }
  `]
})
export class ProjectTableComponent {
  @Input() projects: Project[] = [];

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      pendiente: 'Pendiente',
      'en-progreso': 'En Progreso',
      completado: 'Completado',
      cancelado: 'Cancelado',
    };
    return labels[status] || status;
  }
}
