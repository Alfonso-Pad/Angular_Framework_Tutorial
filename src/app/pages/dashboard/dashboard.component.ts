import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { KpiCardComponent } from '../../components/dashboard/kpi-card.component';
import { BarChartComponent } from '../../components/dashboard/bar-chart.component';
import { PieChartComponent } from '../../components/dashboard/pie-chart.component';
import { SearchFilterComponent } from '../../components/dashboard/search-filter.component';
import { ProjectTableComponent } from '../../components/dashboard/project-table.component';
import { Project, ProjectStatus } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    KpiCardComponent,
    BarChartComponent,
    PieChartComponent,
    SearchFilterComponent,
    ProjectTableComponent,
  ],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <div>
          <h1>Dashboard de Proyectos</h1>
          <p>Panel de control con gráficos, filtros y tabla de datos</p>
        </div>
        <a routerLink="/aplicacion-ejemplo" class="btn-tutorial">
          ← Ver código del tutorial
        </a>
      </header>

      <section class="kpi-section">
        <h2>Indicadores Clave (KPIs)</h2>
        <div class="kpi-grid">
          @for (kpi of kpis; track kpi.titulo) {
            <app-kpi-card [kpi]="kpi" />
          }
        </div>
      </section>

      <section class="charts-section">
        <h2>Visualización de Datos</h2>
        <div class="charts-grid">
          <app-bar-chart [data]="barChartData" title="Proyectos por Estado" />
          <app-pie-chart [data]="pieChartData" title="Distribución del Presupuesto" />
        </div>
      </section>

      <section class="table-section">
        <h2>Listado de Proyectos</h2>
        <app-search-filter (filterChange)="onFilterChange($event)" />
        <app-project-table [projects]="filteredProjects()" />
      </section>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 1200px;
      margin: 0 auto;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .dashboard-header h1 {
      font-size: 1.75rem;
      color: #1e293b;
      margin: 0 0 0.25rem;
    }

    .dashboard-header p {
      color: #64748b;
      margin: 0;
    }

    .btn-tutorial {
      background: #f1f5f9;
      color: #475569;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-size: 0.9rem;
      transition: background 0.2s;
    }

    .btn-tutorial:hover {
      background: #e2e8f0;
    }

    section {
      margin-bottom: 2.5rem;
    }

    h2 {
      font-size: 1.25rem;
      color: #1e293b;
      margin: 0 0 1rem;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.25rem;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
    }
  `]
})
export class DashboardComponent {
  private projectService = inject(ProjectService);

  kpis = this.projectService.getKpis();
  barChartData = this.projectService.getBarChartData();
  pieChartData = this.projectService.getPieChartData();

  private searchTerm = signal('');
  private statusFilter = signal<ProjectStatus | 'todos'>('todos');

  filteredProjects = signal<Project[]>(this.projectService.projects());

  onFilterChange(filter: { search: string; status: ProjectStatus | 'todos' }) {
    this.searchTerm.set(filter.search);
    this.statusFilter.set(filter.status);
    this.filteredProjects.set(
      this.projectService.filterProjects(filter.search, filter.status)
    );
  }
}
