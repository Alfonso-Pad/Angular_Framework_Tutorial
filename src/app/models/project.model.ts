export type ProjectStatus = 'pendiente' | 'en-progreso' | 'completado' | 'cancelado';
export type ProjectPriority = 'baja' | 'media' | 'alta' | 'critica';

export interface Project {
  id: number;
  nombre: string;
  descripcion: string;
  estado: ProjectStatus;
  prioridad: ProjectPriority;
  progreso: number;
  fechaInicio: Date;
  fechaFin: Date | null;
  responsable: string;
  equipo: string[];
  presupuesto: number;
  gastado: number;
}

export interface KpiData {
  titulo: string;
  valor: number | string;
  icono: string;
  color: string;
  cambio?: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }[];
}
