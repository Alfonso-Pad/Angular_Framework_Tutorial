import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conclusiones',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">07</span>
        <h1>Conclusiones</h1>
        <p class="page-subtitle">Resumen del aprendizaje y recursos adicionales</p>
      </header>

      <section class="content-section">
        <h2>Lo que hemos aprendido</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <span class="summary-icon">🎯</span>
            <h3>Fundamentos de Angular</h3>
            <p>Componentes standalone, templates, estilos encapsulados y decoradores.</p>
          </div>
          <div class="summary-card">
            <span class="summary-icon">⚡</span>
            <h3>Signals y Reactividad</h3>
            <p>El nuevo sistema de reactividad de Angular 17+ para gestión de estado eficiente.</p>
          </div>
          <div class="summary-card">
            <span class="summary-icon">🔧</span>
            <h3>Servicios e Inyección</h3>
            <p>Cómo estructurar lógica de negocio reutilizable con el sistema DI de Angular.</p>
          </div>
          <div class="summary-card">
            <span class="summary-icon">📊</span>
            <h3>Integración con Chart.js</h3>
            <p>Visualización de datos con gráficos de barras y circulares.</p>
          </div>
          <div class="summary-card">
            <span class="summary-icon">🔄</span>
            <h3>Control Flow Moderno</h3>
            <p>Nueva sintaxis &#64;if, &#64;for para templates más legibles.</p>
          </div>
          <div class="summary-card">
            <span class="summary-icon">🛣️</span>
            <h3>Routing</h3>
            <p>Navegación SPA con Angular Router y lazy loading.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Aplicación Práctica</h2>
        <p>
          Durante este tutorial, hemos construido un <strong>Dashboard de Gestión de Proyectos</strong>
          completo que demuestra los conceptos aprendidos:
        </p>
        <ul class="achievement-list">
          <li>✅ Tarjetas KPI con datos dinámicos</li>
          <li>✅ Gráfico de barras para estados de proyectos</li>
          <li>✅ Gráfico circular para distribución de presupuesto</li>
          <li>✅ Tabla de datos con información detallada</li>
          <li>✅ Filtros de búsqueda y por estado</li>
          <li>✅ Diseño responsivo y moderno</li>
        </ul>
        <div class="cta-box">
          <a routerLink="/dashboard" class="btn-primary">Ver Dashboard en Acción →</a>
        </div>
      </section>

      <section class="content-section">
        <h2>Recursos Adicionales</h2>
        <div class="resources-list">
          <a href="https://angular.dev" target="_blank" class="resource-item">
            <span class="resource-icon">📚</span>
            <div class="resource-info">
              <h4>Documentación Oficial de Angular</h4>
              <p>La fuente definitiva para aprender Angular con guías y tutoriales.</p>
            </div>
            <span class="external">↗</span>
          </a>
          <a href="https://www.chartjs.org/docs/latest/" target="_blank" class="resource-item">
            <span class="resource-icon">📈</span>
            <div class="resource-info">
              <h4>Documentación de Chart.js</h4>
              <p>Referencia completa para crear gráficos interactivos.</p>
            </div>
            <span class="external">↗</span>
          </a>
          <a href="https://www.typescriptlang.org/docs/" target="_blank" class="resource-item">
            <span class="resource-icon">📘</span>
            <div class="resource-info">
              <h4>TypeScript Handbook</h4>
              <p>Guía oficial para dominar TypeScript.</p>
            </div>
            <span class="external">↗</span>
          </a>
        </div>
      </section>

      <section class="content-section">
        <h2>Próximos Pasos</h2>
        <div class="next-steps">
          <div class="step-item">
            <span class="step-number">1</span>
            <div>
              <h4>Añadir Backend</h4>
              <p>Conecta con una API REST usando HttpClient de Angular.</p>
            </div>
          </div>
          <div class="step-item">
            <span class="step-number">2</span>
            <div>
              <h4>Autenticación</h4>
              <p>Implementa login con guards y interceptors.</p>
            </div>
          </div>
          <div class="step-item">
            <span class="step-number">3</span>
            <div>
              <h4>Testing</h4>
              <p>Añade tests unitarios con Jasmine y tests e2e con Playwright.</p>
            </div>
          </div>
          <div class="step-item">
            <span class="step-number">4</span>
            <div>
              <h4>Despliegue</h4>
              <p>Publica tu aplicación en Firebase, Vercel o Netlify.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="author-section">
        <div class="author-card">
          <h3>Sobre este Tutorial</h3>
          <p>
            Este tutorial ha sido desarrollado como parte de la asignatura
            <strong>Desarrollo de Aplicaciones en Red (DAR)</strong>
            del Máster en Ingeniería Informática de UNIR.
          </p>
          <div class="author-meta">
            <span>👤 Alfonso Padilla P.</span>
            <span>🎓 UNIR 2026</span>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Alcance del tutorial y objetivos conseguidos</h2>
        <p>
          Este tutorial cubre los contenidos esenciales para que un desarrollador pueda
          <strong>empezar a trabajar con Angular de forma autónoma</strong>.
          A continuación se listan los objetivos planteados y el grado de consecución:
        </p>
        <div class="objectives-table-wrap">
          <table class="objectives-table">
            <thead>
              <tr>
                <th>Objetivo</th>
                <th>Sección</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comprender para qué sirve Angular y cuándo usarlo</td>
                <td>Justificación</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Conocer las aplicaciones reales construidas con Angular</td>
                <td>Justificación</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Identificar los prerrequisitos técnicos y de conocimiento</td>
                <td>Justificación</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Instalar el entorno de desarrollo paso a paso</td>
                <td>Instalación</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Conocer versiones, rutas y variables de entorno</td>
                <td>Instalación</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Crear y ejecutar el primer componente "Hola Mundo"</td>
                <td>Primeros Pasos</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Entender componentes, signals y control flow moderno</td>
                <td>Primeros Pasos</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Construir una aplicación base desde cero</td>
                <td>Utilización</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Visualizar resultados con ng serve y DevTools</td>
                <td>Utilización</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Entender sobre qué actúa Angular (páginas, ficheros, secciones)</td>
                <td>Funcionamiento</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Saber cómo se referencian los ficheros entre sí</td>
                <td>Funcionamiento</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
              <tr>
                <td>Aplicar todos los conceptos en una app de ejemplo real</td>
                <td>App Ejemplo / Dashboard</td>
                <td><span class="badge done">✅ Conseguido</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="final-note">
          <span class="final-icon">🚀</span>
          <p>
            Al completar este tutorial tienes una base sólida para desarrollar aplicaciones Angular profesionales.
            La práctica continua, la lectura de la documentación oficial y la construcción de proyectos propios
            son los pasos naturales para seguir avanzando.
          </p>
        </div>
      </section>

      <nav class="page-navigation">
        <a routerLink="/dashboard" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Dashboard Demo</span>
        </a>
        <a routerLink="/" class="nav-link next">
          <span class="nav-direction">Volver al →</span>
          <span class="nav-title">Inicio</span>
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

    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
    .summary-card { background: white; padding: 1.25rem; border-radius: 0.75rem; box-shadow: 0 1px 4px rgba(0,0,0,0.06); text-align: center; border: 1px solid #e2e8f0; }
    .summary-icon { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
    .summary-card h3 { font-size: 1rem; margin: 0 0 0.5rem; color: #1e293b; }
    .summary-card p { font-size: 0.85rem; margin: 0; }

    .achievement-list { list-style: none; padding: 0; margin: 0 0 1.5rem; }
    .achievement-list li { padding: 0.5rem 0; color: #475569; }

    .cta-box { text-align: center; padding: 1rem 0; }
    .btn-primary { display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600; transition: transform 0.2s; }
    .btn-primary:hover { transform: translateY(-2px); }

    .resources-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .resource-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; background: white; border-radius: 0.5rem; text-decoration: none; border: 1px solid #e2e8f0; transition: border-color 0.2s; }
    .resource-item:hover { border-color: #3b82f6; }
    .resource-icon { font-size: 1.5rem; }
    .resource-info { flex: 1; }
    .resource-info h4 { margin: 0 0 0.25rem; color: #1e293b; font-size: 1rem; }
    .resource-info p { margin: 0; font-size: 0.85rem; color: #64748b; }
    .external { color: #94a3b8; }

    .next-steps { display: flex; flex-direction: column; gap: 1rem; }
    .step-item { display: flex; gap: 1rem; align-items: flex-start; }
    .step-number { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #3b82f6; color: white; border-radius: 50%; font-weight: 600; flex-shrink: 0; }
    .step-item h4 { margin: 0 0 0.25rem; color: #1e293b; }
    .step-item p { margin: 0; font-size: 0.9rem; color: #64748b; }

    .author-section { margin-top: 3rem; }
    .author-card { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 2rem; border-radius: 1rem; text-align: center; }
    .author-card h3 { margin: 0 0 1rem; color: white; }
    .author-card p { color: #cbd5e1; margin: 0 0 1.5rem; }
    .author-meta { display: flex; justify-content: center; gap: 2rem; color: #94a3b8; }

    .objectives-table-wrap { overflow-x: auto; margin: 1rem 0; }
    .objectives-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    .objectives-table th, .objectives-table td { padding: 0.6rem 0.85rem; text-align: left; border-bottom: 1px solid #e2e8f0; }
    .objectives-table th { background: #f8fafc; color: #475569; font-weight: 600; }
    .badge { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; }
    .badge.done { background: #dcfce7; color: #16a34a; }

    .final-note { display: flex; gap: 1rem; background: linear-gradient(135deg, #eff6ff, #f0fdf4); border: 1px solid #bfdbfe; border-radius: 0.75rem; padding: 1.25rem; margin-top: 1.5rem; }
    .final-icon { font-size: 2rem; }
    .final-note p { margin: 0; color: #1e40af; line-height: 1.7; }

    .page-navigation { display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    .nav-link { text-decoration: none; padding: 1rem; border-radius: 0.5rem; transition: background 0.2s; }
    .nav-link:hover { background: #f1f5f9; }
    .nav-direction { display: block; font-size: 0.85rem; color: #64748b; }
    .nav-title { display: block; font-weight: 600; color: #1e293b; }
    .nav-link.next { text-align: right; }
  `]
})
export class ConclusionesComponent {}
