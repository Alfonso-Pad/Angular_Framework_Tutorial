import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aplicacion-ejemplo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">06</span>
        <h1>Aplicación de Ejemplo</h1>
        <p class="page-subtitle">Desarrollo paso a paso del Dashboard de Gestión de Proyectos</p>
      </header>

      <section class="content-section">
        <h2>Descripción del Proyecto</h2>
        <p>
          Vamos a construir un <strong>Dashboard de Gestión de Proyectos</strong> que incluye:
        </p>
        <ul class="feature-list">
          <li>📊 Gráficos de barras y circulares con Chart.js</li>
          <li>📋 Tabla de proyectos con datos de ejemplo</li>
          <li>🔍 Filtros de búsqueda por nombre y estado</li>
          <li>📈 Tarjetas KPI con métricas clave</li>
        </ul>
        
        <div class="cta-box">
          <p>Puedes ver el resultado final funcionando:</p>
          <a routerLink="/dashboard" class="btn-demo">Ver Dashboard Demo →</a>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 1: Definir los Modelos</h2>
        <p>Primero creamos las interfaces TypeScript para tipar nuestros datos:</p>
        
        <div class="code-block">
          <div class="code-header">models/project.model.ts</div>
          <pre><code>export type ProjectStatus = 'pendiente' | 'en-progreso' | 'completado' | 'cancelado';
export type ProjectPriority = 'baja' | 'media' | 'alta' | 'critica';

export interface Project {{ '{' }}
  id: number;
  nombre: string;
  descripcion: string;
  estado: ProjectStatus;
  prioridad: ProjectPriority;
  progreso: number;
  fechaInicio: Date;
  fechaFin: Date | null;
  responsable: string;
  presupuesto: number;
  gastado: number;
{{ '}' }}

export interface KpiData {{ '{' }}
  titulo: string;
  valor: number | string;
  icono: string;
  color: string;
  cambio?: number;
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 2: Crear el Servicio</h2>
        <p>El servicio gestiona los datos y la lógica de negocio usando signals:</p>
        
        <div class="code-block">
          <div class="code-header">services/project.service.ts</div>
          <pre><code>import {{ '{' }} Injectable, signal, computed {{ '}' }} from '&#64;angular/core';
import {{ '{' }} Project, ProjectStatus {{ '}' }} from '../models/project.model';

&#64;Injectable({{ '{' }} providedIn: 'root' {{ '}' }})
export class ProjectService {{ '{' }}
  private _projects = signal&lt;Project[]&gt;(this.getMockProjects());
  
  readonly projects = this._projects.asReadonly();
  
  readonly totalProjects = computed(() => this._projects().length);
  
  readonly completedProjects = computed(() =>
    this._projects().filter(p => p.estado === 'completado').length
  );
  
  filterProjects(search: string, status: ProjectStatus | 'todos'): Project[] {{ '{' }}
    return this._projects().filter(project => {{ '{' }}
      const matchesSearch = project.nombre.toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = status === 'todos' || project.estado === status;
      return matchesSearch && matchesStatus;
    {{ '}' }});
  {{ '}' }}
  
  private getMockProjects(): Project[] {{ '{' }}
    return [
      {{ '{' }} id: 1, nombre: 'Rediseño Web', estado: 'en-progreso', ... {{ '}' }},
      // ... más proyectos
    ];
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 3: Componente KPI Card</h2>
        <div class="code-block">
          <div class="code-header">components/dashboard/kpi-card.component.ts</div>
          <pre><code>import {{ '{' }} Component, Input {{ '}' }} from '&#64;angular/core';
import {{ '{' }} KpiData {{ '}' }} from '../../models/project.model';

&#64;Component({{ '{' }}
  selector: 'app-kpi-card',
  standalone: true,
  template: \`
    &lt;div class="kpi-card" [style.--accent-color]="kpi.color"&gt;
      &lt;div class="kpi-icon"&gt;{{ '{{' }} kpi.icono {{ '}}' }}&lt;/div&gt;
      &lt;div class="kpi-content"&gt;
        &lt;h3&gt;{{ '{{' }} kpi.titulo {{ '}}' }}&lt;/h3&gt;
        &lt;div class="kpi-value"&gt;{{ '{{' }} kpi.valor {{ '}}' }}&lt;/div&gt;
        &#64;if (kpi.cambio) {{ '{' }}
          &lt;div class="kpi-change" [class.positive]="kpi.cambio > 0"&gt;
            {{ '{{' }} kpi.cambio > 0 ? '+' : '' {{ '}}' }}{{ '{{' }} kpi.cambio {{ '}}' }}%
          &lt;/div&gt;
        {{ '}' }}
      &lt;/div&gt;
    &lt;/div&gt;
  \`
{{ '}' }})
export class KpiCardComponent {{ '{' }}
  &#64;Input({{ '{' }} required: true {{ '}' }}) kpi!: KpiData;
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 4: Componente Chart con Chart.js</h2>
        <div class="code-block">
          <div class="code-header">components/dashboard/bar-chart.component.ts</div>
          <pre><code>import {{ '{' }} Component, Input, ViewChild, ElementRef, AfterViewInit {{ '}' }} from '&#64;angular/core';
import {{ '{' }} Chart, registerables {{ '}' }} from 'chart.js';

Chart.register(...registerables);

&#64;Component({{ '{' }}
  selector: 'app-bar-chart',
  standalone: true,
  template: \`
    &lt;div class="chart-container"&gt;
      &lt;h3&gt;{{ '{{' }} title {{ '}}' }}&lt;/h3&gt;
      &lt;canvas #chartCanvas&gt;&lt;/canvas&gt;
    &lt;/div&gt;
  \`
{{ '}' }})
export class BarChartComponent implements AfterViewInit {{ '{' }}
  &#64;Input() data!: ChartData;
  &#64;Input() title = 'Gráfico';
  &#64;ViewChild('chartCanvas') chartCanvas!: ElementRef&lt;HTMLCanvasElement&gt;;
  
  ngAfterViewInit() {{ '{' }}
    new Chart(this.chartCanvas.nativeElement, {{ '{' }}
      type: 'bar',
      data: this.data,
      options: {{ '{' }} responsive: true {{ '}' }}
    {{ '}' }});
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 5: Filtros de Búsqueda</h2>
        <div class="code-block">
          <div class="code-header">components/dashboard/search-filter.component.ts</div>
          <pre><code>import {{ '{' }} Component, Output, EventEmitter {{ '}' }} from '&#64;angular/core';
import {{ '{' }} FormsModule {{ '}' }} from '&#64;angular/forms';

&#64;Component({{ '{' }}
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule],
  template: \`
    &lt;div class="filter-container"&gt;
      &lt;input
        type="text"
        [(ngModel)]="searchTerm"
        (ngModelChange)="emitFilter()"
        placeholder="Buscar..."
      /&gt;
      &lt;select [(ngModel)]="selectedStatus" (ngModelChange)="emitFilter()"&gt;
        &lt;option value="todos"&gt;Todos&lt;/option&gt;
        &lt;option value="en-progreso"&gt;En Progreso&lt;/option&gt;
        &lt;option value="completado"&gt;Completado&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  \`
{{ '}' }})
export class SearchFilterComponent {{ '{' }}
  &#64;Output() filterChange = new EventEmitter&lt;{{ '{' }}search: string, status: string{{ '}' }}&gt;();
  
  searchTerm = '';
  selectedStatus = 'todos';
  
  emitFilter() {{ '{' }}
    this.filterChange.emit({{ '{' }}
      search: this.searchTerm,
      status: this.selectedStatus
    {{ '}' }});
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 6: Integrar en el Dashboard</h2>
        <div class="code-block">
          <div class="code-header">pages/dashboard/dashboard.component.ts</div>
          <pre><code>&#64;Component({{ '{' }}
  selector: 'app-dashboard',
  standalone: true,
  imports: [KpiCardComponent, BarChartComponent, SearchFilterComponent, ProjectTableComponent],
  template: \`
    &lt;div class="dashboard"&gt;
      &lt;div class="kpi-grid"&gt;
        &#64;for (kpi of kpis; track kpi.titulo) {{ '{' }}
          &lt;app-kpi-card [kpi]="kpi" /&gt;
        {{ '}' }}
      &lt;/div&gt;
      
      &lt;div class="charts-grid"&gt;
        &lt;app-bar-chart [data]="barData" title="Por Estado" /&gt;
        &lt;app-pie-chart [data]="pieData" title="Presupuesto" /&gt;
      &lt;/div&gt;
      
      &lt;app-search-filter (filterChange)="onFilter($event)" /&gt;
      &lt;app-project-table [projects]="filteredProjects" /&gt;
    &lt;/div&gt;
  \`
{{ '}' }})
export class DashboardComponent {{ '{' }}
  private projectService = inject(ProjectService);
  
  kpis = this.projectService.getKpis();
  barData = this.projectService.getBarChartData();
  filteredProjects = this.projectService.projects();
  
  onFilter(filter: {{ '{' }}search: string, status: string{{ '}' }}) {{ '{' }}
    this.filteredProjects = this.projectService.filterProjects(
      filter.search, filter.status
    );
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <nav class="page-navigation">
        <a routerLink="/funcionamiento" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Funcionamiento</span>
        </a>
        <a routerLink="/dashboard" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Dashboard Demo</span>
        </a>
      </nav>
    </article>
  `,
  styles: [`
    .page { max-width: 800px; margin: 0 auto; }
    .page-header { margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; }
    .page-number { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.75rem; }
    h1 { font-size: 2rem; color: #1e293b; margin: 0 0 0.5rem; }
    .page-subtitle { color: #64748b; font-size: 1.1rem; margin: 0; }
    .content-section { margin-bottom: 2.5rem; }
    h2 { font-size: 1.4rem; color: #1e293b; margin: 0 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e2e8f0; }
    p { color: #475569; line-height: 1.7; margin: 0 0 1rem; }

    .feature-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
    .feature-list li { padding: 0.5rem 0; color: #475569; font-size: 1.05rem; }

    .cta-box { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 1.5rem; border-radius: 0.75rem; text-align: center; }
    .cta-box p { color: white; margin: 0 0 1rem; }
    .btn-demo { display: inline-block; background: white; color: #2563eb; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: transform 0.2s; }
    .btn-demo:hover { transform: translateY(-2px); }

    .code-block { background: #1e293b; border-radius: 0.5rem; overflow: hidden; margin: 1rem 0; }
    .code-header { background: #0f172a; color: #94a3b8; padding: 0.5rem 1rem; font-size: 0.85rem; }
    pre { margin: 0; padding: 1rem; overflow-x: auto; }
    code { color: #e2e8f0; font-family: 'Fira Code', monospace; font-size: 0.85rem; line-height: 1.5; }

    .page-navigation { display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    .nav-link { text-decoration: none; padding: 1rem; border-radius: 0.5rem; transition: background 0.2s; }
    .nav-link:hover { background: #f1f5f9; }
    .nav-direction { display: block; font-size: 0.85rem; color: #64748b; }
    .nav-title { display: block; font-weight: 600; color: #1e293b; }
    .nav-link.next { text-align: right; }
  `]
})
export class AplicacionEjemploComponent {}
