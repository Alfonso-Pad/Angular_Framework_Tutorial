import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcionamiento',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">05</span>
        <h1>Funcionamiento Interno</h1>
        <p class="page-subtitle">Arquitectura, ciclo de vida y detección de cambios</p>
      </header>

      <section class="content-section">
        <h2>¿Sobre qué actúa Angular? Páginas, ficheros y secciones</h2>
        <p>
          Angular organiza una aplicación web en <strong>unidades bien definidas</strong>.
          Entender sobre qué actúa el framework es clave para estructurar correctamente un proyecto:
        </p>
        <div class="entity-grid">
          <div class="entity-card">
            <span class="entity-icon">📄</span>
            <h3>Componentes (páginas y secciones)</h3>
            <p>
              Cada componente es una unidad visual reutilizable. Puede representar una <strong>página completa</strong>
              (p. ej. <code>HomeComponent</code>) o una <strong>sección</strong> dentro de una página
              (p. ej. <code>HeaderComponent</code>, <code>CardComponent</code>).
            </p>
          </div>
          <div class="entity-card">
            <span class="entity-icon">🗂️</span>
            <h3>Módulos / Rutas</h3>
            <p>
              El <strong>Router</strong> de Angular mapea URLs a componentes. Cada ruta activa
              renderiza el componente correspondiente dentro del <code>&lt;router-outlet&gt;</code>.
            </p>
          </div>
          <div class="entity-card">
            <span class="entity-icon">⚙️</span>
            <h3>Servicios</h3>
            <p>
              Los servicios son clases TypeScript sin vista. Gestionan <strong>datos, lógica de negocio
              y comunicación HTTP</strong>. Se inyectan en los componentes que los necesitan.
            </p>
          </div>
          <div class="entity-card">
            <span class="entity-icon">📝</span>
            <h3>Modelos (Interfaces)</h3>
            <p>
              Define las <strong>estructuras de datos</strong> con TypeScript interfaces o tipos.
              Garantizan consistencia entre componentes y servicios.
            </p>
          </div>
        </div>
        <p>La siguiente tabla resume los ficheros clave de un proyecto Angular y su función:</p>
        <table class="files-table">
          <thead>
            <tr><th>Fichero</th><th>Tipo</th><th>Función</th></tr>
          </thead>
          <tbody>
            <tr><td><code>*.component.ts</code></td><td>Componente</td><td>Lógica + template + estilos encapsulados</td></tr>
            <tr><td><code>app.routes.ts</code></td><td>Rutas</td><td>Mapa de URL → componente</td></tr>
            <tr><td><code>*.service.ts</code></td><td>Servicio</td><td>Lógica de negocio reutilizable</td></tr>
            <tr><td><code>*.model.ts</code></td><td>Modelo</td><td>Interfaces/tipos TypeScript</td></tr>
            <tr><td><code>app.config.ts</code></td><td>Config</td><td>Proveedores y configuración global</td></tr>
            <tr><td><code>main.ts</code></td><td>Bootstrap</td><td>Punto de entrada de la aplicación</td></tr>
            <tr><td><code>index.html</code></td><td>HTML raíz</td><td>Contenedor donde Angular monta la app</td></tr>
            <tr><td><code>styles.scss</code></td><td>Estilos globales</td><td>CSS aplicable a toda la aplicación</td></tr>
          </tbody>
        </table>
      </section>

      <section class="content-section">
        <h2>¿Cómo se editan y modifican los ficheros del framework?</h2>
        <p>
          Los ficheros de Angular se editan directamente con cualquier editor de texto, aunque
          <strong>VS Code</strong> es el recomendado por su integración con Angular Language Service.
        </p>

        <h3>Editar un componente existente</h3>
        <p>Un componente standalone concentra todo en un único fichero <code>.ts</code>:</p>
        <div class="code-block">
          <div class="code-header">src/app/pages/home/home.component.ts</div>
          <pre><code>&#64;Component({{ '{' }}
  selector: 'app-home',
  standalone: true,
  template: \`
    &lt;h1&gt;{{ '{{' }} titulo {{ '}}' }}&lt;/h1&gt;   &lt;!-- 1. Edita el template --&gt;
  \`,
  styles: [\`
    h1 {{ '{' }} color: red; {{ '}' }}          /* 2. Edita los estilos */
  \`]
{{ '}' }})
export class HomeComponent {{ '{' }}
  titulo = 'Inicio';                // 3. Edita la lógica TypeScript
{{ '}' }}</code></pre>
        </div>

        <h3>Modificar estilos globales</h3>
        <p>Los estilos que afectan a toda la aplicación van en <code>src/styles.scss</code>. Aquí se definen variables CSS, tipografías y resets globales.</p>

        <h3>Modificar la configuración del proyecto</h3>
        <div class="info-box">
          <span class="info-icon">⚙️</span>
          <p>
            El fichero <code>angular.json</code> controla opciones de compilación, assets, estilos globales y configuraciones de entorno.
            Edítalo con cuidado ya que controla el comportamiento de <code>ng serve</code> y <code>ng build</code>.
          </p>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Cómo se referencian los ficheros entre sí?</h2>
        <p>
          Angular usa el sistema de módulos de TypeScript/ES2022 para conectar los ficheros del proyecto entre sí.
          Existen varios mecanismos según el tipo de relación:
        </p>

        <h3>1. Importaciones TypeScript (entre ficheros .ts)</h3>
        <div class="code-block">
          <div class="code-header">Componente importa un servicio y un modelo</div>
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';
import {{ '{' }} ProjectService {{ '}' }} from '../../services/project.service';  // ruta relativa
import {{ '{' }} Project {{ '}' }} from '../../models/project.model';

&#64;Component({{ '{' }}...{{ '}' }})
export class DashboardComponent {{ '{' }}
  constructor(private projectService: ProjectService) {{ '{' }} {{ '}' }}
{{ '}' }}</code></pre>
        </div>

        <h3>2. Declaración en <code>imports[]</code> del componente</h3>
        <p>
          Un componente standalone debe declarar en su array <code>imports</code> todos los componentes,
          directivas y pipes que usa en su template:
        </p>
        <div class="code-block">
          <div class="code-header">dashboard.component.ts</div>
          <pre><code>import {{ '{' }} KpiCardComponent {{ '}' }} from '../components/kpi-card/kpi-card.component';
import {{ '{' }} BarChartComponent {{ '}' }} from '../components/bar-chart/bar-chart.component';

&#64;Component({{ '{' }}
  selector: 'app-dashboard',
  standalone: true,
  imports: [KpiCardComponent, BarChartComponent],  // referencia a otros componentes
  template: \`
    &lt;app-kpi-card [data]="kpi"&gt;&lt;/app-kpi-card&gt;
    &lt;app-bar-chart [datos]="datos"&gt;&lt;/app-bar-chart&gt;
  \`
{{ '}' }})</code></pre>
        </div>

        <h3>3. RouterLink y RouterOutlet (navegación entre páginas)</h3>
        <div class="code-block">
          <div class="code-header">Template con RouterLink</div>
          <pre><code>import {{ '{' }} RouterLink, RouterOutlet {{ '}' }} from '&#64;angular/router';

&#64;Component({{ '{' }}
  imports: [RouterLink, RouterOutlet],
  template: \`
    &lt;nav&gt;
      &lt;a routerLink="/home"&gt;Inicio&lt;/a&gt;
      &lt;a routerLink="/about"&gt;Acerca de&lt;/a&gt;
    &lt;/nav&gt;
    &lt;router-outlet&gt;&lt;/router-outlet&gt;  &lt;!-- aquí se renderizan las páginas --&gt;
  \`
{{ '}' }})</code></pre>
        </div>

        <h3>4. Rutas con lazy loading (carga bajo demanda)</h3>
        <div class="code-block">
          <div class="code-header">app.routes.ts</div>
          <pre><code>export const routes: Routes = [
  {{ '{' }}
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  {{ '}' }}
];</code></pre>
        </div>
        <p>Con lazy loading, Angular solo descarga el código del componente cuando el usuario navega a esa ruta, reduciendo el bundle inicial.</p>
      </section>

      <section class="content-section">
        <h2>Arquitectura de Angular</h2>
        <div class="architecture-diagram">
          <div class="arch-layer">
            <h3>📱 Componentes</h3>
            <p>Vistas con lógica encapsulada</p>
          </div>
          <div class="arch-arrow">↕️</div>
          <div class="arch-layer">
            <h3>🔧 Servicios</h3>
            <p>Lógica de negocio compartida</p>
          </div>
          <div class="arch-arrow">↕️</div>
          <div class="arch-layer">
            <h3>💉 Inyector DI</h3>
            <p>Gestión de dependencias</p>
          </div>
          <div class="arch-arrow">↕️</div>
          <div class="arch-layer">
            <h3>🔄 Change Detection</h3>
            <p>Actualización del DOM</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Ciclo de Vida de un Componente</h2>
        <p>Angular ejecuta una serie de hooks durante la vida de un componente:</p>
        
        <div class="lifecycle-list">
          <div class="lifecycle-item">
            <span class="hook-name">ngOnChanges()</span>
            <p>Se ejecuta cuando un &#64;Input cambia de valor.</p>
          </div>
          <div class="lifecycle-item">
            <span class="hook-name">ngOnInit()</span>
            <p>Inicialización del componente. Ideal para cargar datos.</p>
          </div>
          <div class="lifecycle-item">
            <span class="hook-name">ngAfterViewInit()</span>
            <p>Después de inicializar la vista y vistas hijas.</p>
          </div>
          <div class="lifecycle-item">
            <span class="hook-name">ngOnDestroy()</span>
            <p>Limpieza antes de destruir el componente.</p>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header">Implementando hooks del ciclo de vida</div>
          <pre><code>import {{ '{' }} Component, OnInit, OnDestroy {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}...{{ '}' }})
export class MiComponente implements OnInit, OnDestroy {{ '{' }}
  private subscription: Subscription | null = null;
  
  ngOnInit() {{ '{' }}
    // Cargar datos iniciales
    this.subscription = this.servicio.datos$.subscribe();
  {{ '}' }}
  
  ngOnDestroy() {{ '{' }}
    // Limpiar subscripciones
    this.subscription?.unsubscribe();
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Detección de Cambios</h2>
        <p>
          Angular usa Zone.js para detectar cambios asíncronos y actualizar el DOM automáticamente.
          Con Signals, la detección es más granular y eficiente.
        </p>
        
        <div class="comparison-boxes">
          <div class="compare-box">
            <h3>Zone.js (Tradicional)</h3>
            <ul>
              <li>Detecta todos los eventos asíncronos</li>
              <li>Verifica todo el árbol de componentes</li>
              <li>Puede causar re-renders innecesarios</li>
            </ul>
          </div>
          <div class="compare-box highlight">
            <h3>Signals (Moderno)</h3>
            <ul>
              <li>Reactividad granular</li>
              <li>Solo actualiza lo necesario</li>
              <li>Mejor rendimiento</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Compilación y Build</h2>
        <p>Angular utiliza compilación AOT (Ahead-of-Time) por defecto:</p>
        
        <div class="build-flow">
          <div class="build-step">
            <span class="step-number">1</span>
            <h4>TypeScript → JavaScript</h4>
            <p>Transpilación del código</p>
          </div>
          <div class="build-step">
            <span class="step-number">2</span>
            <h4>Templates → JavaScript</h4>
            <p>Compilación de templates</p>
          </div>
          <div class="build-step">
            <span class="step-number">3</span>
            <h4>Bundling</h4>
            <p>Empaquetado y optimización</p>
          </div>
          <div class="build-step">
            <span class="step-number">4</span>
            <h4>Tree Shaking</h4>
            <p>Eliminación de código no usado</p>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header">Comandos de Build</div>
          <pre><code># Build de desarrollo
ng build

# Build de producción (optimizado)
ng build --configuration production

# Servir en modo producción local
ng serve --configuration production</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Lazy Loading</h2>
        <p>Carga módulos bajo demanda para mejorar el tiempo de carga inicial:</p>
        
        <div class="code-block">
          <div class="code-header">app.routes.ts con Lazy Loading</div>
          <pre><code>export const routes: Routes = [
  {{ '{' }} path: '', component: HomeComponent {{ '}' }},
  {{ '{' }} 
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  {{ '}' }},
  {{ '{' }}
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
  {{ '}' }}
];</code></pre>
        </div>
        
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>El lazy loading divide el bundle en chunks que se cargan solo cuando el usuario navega a esa ruta.</p>
        </div>
      </section>

      <nav class="page-navigation">
        <a routerLink="/utilizacion" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Utilización</span>
        </a>
        <a routerLink="/aplicacion-ejemplo" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Aplicación Ejemplo</span>
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
    h3, h4 { color: #334155; margin: 0 0 0.5rem; }
    p { color: #475569; line-height: 1.7; margin: 0 0 1rem; }

    .architecture-diagram { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1.5rem; background: #f8fafc; border-radius: 0.75rem; }
    .arch-layer { background: white; padding: 1rem 2rem; border-radius: 0.5rem; text-align: center; width: 100%; max-width: 300px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .arch-layer h3 { margin: 0 0 0.25rem; font-size: 1rem; }
    .arch-layer p { margin: 0; font-size: 0.85rem; }
    .arch-arrow { font-size: 1.5rem; }

    .lifecycle-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .lifecycle-item { background: white; padding: 1rem 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    .hook-name { font-family: 'Fira Code', monospace; font-weight: 600; color: #7c3aed; }
    .lifecycle-item p { margin: 0.5rem 0 0; font-size: 0.9rem; }

    .comparison-boxes { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
    .compare-box { background: white; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; }
    .compare-box.highlight { border-color: #3b82f6; background: #eff6ff; }
    .compare-box h3 { font-size: 1rem; margin-bottom: 0.75rem; }
    .compare-box ul { margin: 0; padding-left: 1.25rem; }
    .compare-box li { font-size: 0.9rem; color: #475569; margin-bottom: 0.5rem; }

    .build-flow { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1rem 0; }
    .build-step { background: white; padding: 1rem; border-radius: 0.5rem; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    .step-number { display: inline-block; width: 28px; height: 28px; background: #3b82f6; color: white; border-radius: 50%; font-weight: 600; line-height: 28px; margin-bottom: 0.5rem; }
    .build-step h4 { font-size: 0.9rem; }
    .build-step p { margin: 0; font-size: 0.8rem; color: #64748b; }

    .code-block { background: #1e293b; border-radius: 0.5rem; overflow: hidden; margin: 1rem 0; }
    .code-header { background: #0f172a; color: #94a3b8; padding: 0.5rem 1rem; font-size: 0.85rem; }
    pre { margin: 0; padding: 1rem; overflow-x: auto; }
    code { color: #e2e8f0; font-family: 'Fira Code', monospace; font-size: 0.9rem; line-height: 1.6; }

    .info-box { display: flex; gap: 1rem; background: #eff6ff; padding: 1rem 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6; }
    .info-icon { font-size: 1.5rem; }
    .info-box p { margin: 0; color: #1e40af; }

    .page-navigation { display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    .nav-link { text-decoration: none; padding: 1rem; border-radius: 0.5rem; transition: background 0.2s; }
    .nav-link:hover { background: #f1f5f9; }
    .nav-direction { display: block; font-size: 0.85rem; color: #64748b; }
    .nav-title { display: block; font-weight: 600; color: #1e293b; }
    .nav-link.next { text-align: right; }

    .entity-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1rem 0; }
    .entity-card { background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem; }
    .entity-icon { font-size: 1.75rem; display: block; margin-bottom: 0.5rem; }
    .entity-card h3 { font-size: 0.95rem; color: #1e293b; margin: 0 0 0.4rem; }
    .entity-card p { font-size: 0.85rem; margin: 0; color: #64748b; }
    .entity-card code { background: #e2e8f0; padding: 0.1rem 0.3rem; border-radius: 0.25rem; font-size: 0.82em; }

    .files-table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.875rem; }
    .files-table th, .files-table td { padding: 0.55rem 0.8rem; text-align: left; border-bottom: 1px solid #e2e8f0; }
    .files-table th { background: #f8fafc; color: #475569; font-weight: 600; }
    .files-table td code { background: #e2e8f0; padding: 0.1rem 0.35rem; border-radius: 0.25rem; font-size: 0.85em; white-space: nowrap; }

    .info-box { display: flex; gap: 1rem; background: #eff6ff; padding: 1rem 1.25rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6; margin: 1rem 0; }
    .info-icon { font-size: 1.5rem; }
    .info-box p { margin: 0; color: #1e40af; font-size: 0.9rem; }
    .info-box code { background: rgba(0,0,0,0.1); padding: 0.1rem 0.35rem; border-radius: 0.25rem; }
  `]
})
export class FuncionamientoComponent {}
