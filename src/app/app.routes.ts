import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JustificacionComponent } from './pages/justificacion/justificacion.component';
import { InstalacionComponent } from './pages/instalacion/instalacion.component';
import { PrimerosPasosComponent } from './pages/primeros-pasos/primeros-pasos.component';
import { UtilizacionComponent } from './pages/utilizacion/utilizacion.component';
import { FuncionamientoComponent } from './pages/funcionamiento/funcionamiento.component';
import { AplicacionEjemploComponent } from './pages/aplicacion-ejemplo/aplicacion-ejemplo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConclusionesComponent } from './pages/conclusiones/conclusiones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'justificacion', component: JustificacionComponent },
  { path: 'instalacion', component: InstalacionComponent },
  { path: 'primeros-pasos', component: PrimerosPasosComponent },
  { path: 'utilizacion', component: UtilizacionComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'aplicacion-ejemplo', component: AplicacionEjemploComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'conclusiones', component: ConclusionesComponent },
  { path: '**', redirectTo: '' }
];
