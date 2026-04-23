import { Injectable, signal, computed } from '@angular/core';
import { Project, KpiData, ChartData, ProjectStatus } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private _projects = signal<Project[]>(this.getMockProjects());

  readonly projects = this._projects.asReadonly();

  readonly totalProjects = computed(() => this._projects().length);

  readonly completedProjects = computed(() =>
    this._projects().filter((p) => p.estado === 'completado').length
  );

  readonly inProgressProjects = computed(() =>
    this._projects().filter((p) => p.estado === 'en-progreso').length
  );

  readonly averageProgress = computed(() => {
    const projects = this._projects();
    if (projects.length === 0) return 0;
    const sum = projects.reduce((acc, p) => acc + p.progreso, 0);
    return Math.round(sum / projects.length);
  });

  getKpis(): KpiData[] {
    return [
      {
        titulo: 'Total Proyectos',
        valor: this.totalProjects(),
        icono: '📁',
        color: '#3498db',
        cambio: 12,
      },
      {
        titulo: 'Completados',
        valor: this.completedProjects(),
        icono: '✅',
        color: '#27ae60',
        cambio: 8,
      },
      {
        titulo: 'En Progreso',
        valor: this.inProgressProjects(),
        icono: '🔄',
        color: '#f39c12',
        cambio: -3,
      },
      {
        titulo: 'Progreso Medio',
        valor: `${this.averageProgress()}%`,
        icono: '📊',
        color: '#9b59b6',
        cambio: 5,
      },
    ];
  }

  getBarChartData(): ChartData {
    const projects = this._projects();
    const estados: ProjectStatus[] = ['pendiente', 'en-progreso', 'completado', 'cancelado'];
    const conteos = estados.map((estado) => projects.filter((p) => p.estado === estado).length);

    return {
      labels: ['Pendiente', 'En Progreso', 'Completado', 'Cancelado'],
      datasets: [
        {
          label: 'Proyectos por Estado',
          data: conteos,
          backgroundColor: ['#95a5a6', '#f39c12', '#27ae60', '#e74c3c'],
        },
      ],
    };
  }

  getPieChartData(): ChartData {
    const projects = this._projects();
    const porEstado = {
      'en-progreso': 0,
      completado: 0,
      pendiente: 0,
    };

    projects.forEach((p) => {
      if (p.estado in porEstado) {
        porEstado[p.estado as keyof typeof porEstado] += p.presupuesto;
      }
    });

    return {
      labels: ['En Progreso', 'Completado', 'Pendiente'],
      datasets: [
        {
          label: 'Presupuesto por Estado',
          data: [porEstado['en-progreso'], porEstado['completado'], porEstado['pendiente']],
          backgroundColor: ['#f39c12', '#27ae60', '#95a5a6'],
        },
      ],
    };
  }

  filterProjects(searchTerm: string = '', status: ProjectStatus | 'todos' = 'todos'): Project[] {
    return this._projects().filter((project) => {
      const matchesSearch =
        project.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.responsable.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = status === 'todos' || project.estado === status;

      return matchesSearch && matchesStatus;
    });
  }

  private getMockProjects(): Project[] {
    return [
      {
        id: 1,
        nombre: 'Rediseño Web Corporativa',
        descripcion: 'Modernización completa del sitio web',
        estado: 'en-progreso',
        prioridad: 'alta',
        progreso: 65,
        fechaInicio: new Date('2024-01-15'),
        fechaFin: null,
        responsable: 'Ana García',
        equipo: ['Carlos López', 'María Ruiz'],
        presupuesto: 25000,
        gastado: 16250,
      },
      {
        id: 2,
        nombre: 'App Móvil Ventas',
        descripcion: 'Desarrollo de aplicación para el equipo de ventas',
        estado: 'completado',
        prioridad: 'critica',
        progreso: 100,
        fechaInicio: new Date('2023-09-01'),
        fechaFin: new Date('2024-02-28'),
        responsable: 'Pedro Martín',
        equipo: ['Laura Sánchez', 'Miguel Torres'],
        presupuesto: 45000,
        gastado: 42000,
      },
      {
        id: 3,
        nombre: 'Sistema de Inventario',
        descripcion: 'Automatización del control de inventario',
        estado: 'pendiente',
        prioridad: 'media',
        progreso: 0,
        fechaInicio: new Date('2024-04-01'),
        fechaFin: null,
        responsable: 'Carmen Vega',
        equipo: ['Roberto Díaz'],
        presupuesto: 18000,
        gastado: 0,
      },
      {
        id: 4,
        nombre: 'Migración Cloud',
        descripcion: 'Migración de infraestructura a AWS',
        estado: 'en-progreso',
        prioridad: 'critica',
        progreso: 40,
        fechaInicio: new Date('2024-02-01'),
        fechaFin: null,
        responsable: 'David Moreno',
        equipo: ['Elena Prieto', 'Sergio Castro'],
        presupuesto: 60000,
        gastado: 24000,
      },
      {
        id: 5,
        nombre: 'Portal de Clientes',
        descripcion: 'Desarrollo de portal self-service para clientes',
        estado: 'en-progreso',
        prioridad: 'alta',
        progreso: 80,
        fechaInicio: new Date('2023-11-15'),
        fechaFin: null,
        responsable: 'Ana García',
        equipo: ['Carlos López', 'Laura Sánchez'],
        presupuesto: 35000,
        gastado: 28000,
      },
      {
        id: 6,
        nombre: 'Integración CRM',
        descripcion: 'Integración con sistema CRM existente',
        estado: 'completado',
        prioridad: 'media',
        progreso: 100,
        fechaInicio: new Date('2023-08-01'),
        fechaFin: new Date('2024-01-15'),
        responsable: 'Miguel Torres',
        equipo: ['Roberto Díaz'],
        presupuesto: 15000,
        gastado: 14500,
      },
    ];
  }
}
