import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-justificacion',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">01</span>
        <h1>Justificación del Framework</h1>
        <p class="page-subtitle">Por qué Angular es la elección ideal para aplicaciones empresariales</p>
      </header>

      <section class="content-section">
        <h2>¿Qué es Angular?</h2>
        <p>
          Angular es un <strong>framework de desarrollo web</strong> creado y mantenido por Google.
          Es una plataforma completa para construir aplicaciones web escalables y de alto rendimiento,
          utilizando TypeScript como lenguaje principal.
        </p>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>
            A diferencia de librerías como React o Vue, Angular es un framework completo que incluye
            todo lo necesario: routing, formularios, HTTP client, testing, y más.
          </p>
        </div>
      </section>

      <section class="content-section">
        <h2>Ventajas de Angular</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>🏗️ Arquitectura Sólida</h3>
            <p>Estructura basada en componentes con separación clara de responsabilidades (MVC/MVVM).</p>
          </div>
          <div class="advantage-card">
            <h3>📝 TypeScript Nativo</h3>
            <p>Tipado estático que previene errores en tiempo de compilación y mejora el autocompletado.</p>
          </div>
          <div class="advantage-card">
            <h3>🔧 CLI Potente</h3>
            <p>Angular CLI automatiza tareas comunes: crear componentes, servicios, builds y testing.</p>
          </div>
          <div class="advantage-card">
            <h3>📦 Inyección de Dependencias</h3>
            <p>Sistema DI integrado que facilita testing y reutilización de código.</p>
          </div>
          <div class="advantage-card">
            <h3>🎯 Signals (v17+)</h3>
            <p>Nuevo sistema de reactividad más eficiente que reduce re-renderizados innecesarios.</p>
          </div>
          <div class="advantage-card">
            <h3>🌐 Ecosistema Maduro</h3>
            <p>Gran comunidad, documentación extensa y soporte corporativo de Google.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Comparativa con Otros Frameworks</h2>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th>Angular</th>
              <th>React</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipo</td>
              <td>Framework completo</td>
              <td>Librería UI</td>
              <td>Framework progresivo</td>
            </tr>
            <tr>
              <td>Lenguaje</td>
              <td>TypeScript</td>
              <td>JavaScript/JSX</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>Curva de aprendizaje</td>
              <td>Alta</td>
              <td>Media</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Escalabilidad</td>
              <td>Excelente</td>
              <td>Buena</td>
              <td>Buena</td>
            </tr>
            <tr>
              <td>Soporte empresarial</td>
              <td>Google</td>
              <td>Meta</td>
              <td>Comunidad</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="content-section">
        <h2>¿Cuándo elegir Angular?</h2>
        <ul class="checklist">
          <li>✅ Aplicaciones empresariales de gran escala</li>
          <li>✅ Equipos que valoran convenciones y estructura</li>
          <li>✅ Proyectos que requieren mantenimiento a largo plazo</li>
          <li>✅ Aplicaciones con formularios complejos</li>
          <li>✅ Cuando se necesita un framework "todo en uno"</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>¿Qué aplicaciones se han construido con Angular?</h2>
        <p>
          Angular es usado por algunas de las empresas y plataformas más importantes del mundo.
          Su robustez lo hace idóneo para aplicaciones de gran escala con millones de usuarios:
        </p>
        <div class="apps-grid">
          <div class="app-card">
            <span class="app-icon">🔍</span>
            <h3>Google Cloud Console</h3>
            <p>Panel de administración de servicios en la nube de Google, con flujos de trabajo complejos.</p>
          </div>
          <div class="app-card">
            <span class="app-icon">💼</span>
            <h3>Microsoft Office Online</h3>
            <p>Versión web de las aplicaciones de Office, con edición en tiempo real y colaboración.</p>
          </div>
          <div class="app-card">
            <span class="app-icon">🛒</span>
            <h3>Forbes &amp; GMail (componentes)</h3>
            <p>Partes de aplicaciones de medios de comunicación y gestión de correo a gran escala.</p>
          </div>
          <div class="app-card">
            <span class="app-icon">🏦</span>
            <h3>Banca y Fintech</h3>
            <p>Aplicaciones bancarias online, dashboards financieros y plataformas de inversión.</p>
          </div>
          <div class="app-card">
            <span class="app-icon">📊</span>
            <h3>Dashboards Empresariales</h3>
            <p>ERPs, CRMs, paneles de control con visualización de datos e informes en tiempo real.</p>
          </div>
          <div class="app-card">
            <span class="app-icon">🎓</span>
            <h3>Plataformas Educativas</h3>
            <p>Aulas virtuales, sistemas LMS con gestión de cursos, alumnos y calificaciones.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Sobre qué lenguajes y tecnologías se apoya?</h2>
        <p>
          Angular es una plataforma multi-tecnología que combina varios lenguajes y estándares:
        </p>
        <div class="lang-grid">
          <div class="lang-card primary">
            <span class="lang-badge">Principal</span>
            <h3>TypeScript</h3>
            <p>Superconjunto de JavaScript con tipado estático. Es el lenguaje principal de toda la lógica de componentes, servicios y modelos.</p>
          </div>
          <div class="lang-card">
            <span class="lang-badge secondary">Template</span>
            <h3>HTML5 + Angular Template Syntax</h3>
            <p>Los templates combinan HTML estándar con directivas Angular (<code>&#64;if</code>, <code>&#64;for</code>), bindings y expresiones.</p>
          </div>
          <div class="lang-card">
            <span class="lang-badge secondary">Estilos</span>
            <h3>CSS / SCSS / Less</h3>
            <p>Angular soporta CSS nativo, SCSS (Sass) y Less para dar estilos a los componentes, con encapsulación automática.</p>
          </div>
          <div class="lang-card">
            <span class="lang-badge secondary">Ejecución</span>
            <h3>JavaScript (ES2022+)</h3>
            <p>El compilador AOT de Angular transpila TypeScript a JavaScript optimizado para el navegador.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Qué prerrequisitos necesita?</h2>
        <div class="prereq-list">
          <div class="prereq-item">
            <span class="prereq-num">01</span>
            <div class="prereq-content">
              <h3>Conocimientos de JavaScript / TypeScript</h3>
              <p>Es imprescindible entender variables, funciones, clases, módulos ES6+ y conceptos de tipado.</p>
            </div>
          </div>
          <div class="prereq-item">
            <span class="prereq-num">02</span>
            <div class="prereq-content">
              <h3>HTML y CSS básico</h3>
              <p>Los templates de Angular son HTML estándar enriquecido. Se requiere dominio de la maquetación web.</p>
            </div>
          </div>
          <div class="prereq-item">
            <span class="prereq-num">03</span>
            <div class="prereq-content">
              <h3>Programación orientada a objetos</h3>
              <p>Clases, herencia, interfaces y decoradores son el núcleo de la arquitectura de Angular.</p>
            </div>
          </div>
          <div class="prereq-item">
            <span class="prereq-num">04</span>
            <div class="prereq-content">
              <h3>Node.js y npm instalados</h3>
              <p>Son necesarios para ejecutar Angular CLI, instalar dependencias y compilar el proyecto.</p>
            </div>
          </div>
          <div class="prereq-item">
            <span class="prereq-num">05</span>
            <div class="prereq-content">
              <h3>Conceptos de programación reactiva (recomendado)</h3>
              <p>RxJS y Signals se usan ampliamente; conocer observables y programación reactiva facilita el aprendizaje.</p>
            </div>
          </div>
        </div>
      </section>

      <nav class="page-navigation">
        <a routerLink="/" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Inicio</span>
        </a>
        <a routerLink="/instalacion" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Instalación</span>
        </a>
      </nav>
    </article>
  `,
  styles: [`
    .page {
      max-width: 800px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .page-number {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    h1 {
      font-size: 2rem;
      color: #1e293b;
      margin: 0 0 0.5rem;
    }

    .page-subtitle {
      color: #64748b;
      font-size: 1.1rem;
      margin: 0;
    }

    .content-section {
      margin-bottom: 2.5rem;
    }

    h2 {
      font-size: 1.4rem;
      color: #1e293b;
      margin: 0 0 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e2e8f0;
    }

    p {
      color: #475569;
      line-height: 1.7;
      margin: 0 0 1rem;
    }

    .info-box {
      display: flex;
      gap: 1rem;
      background: #eff6ff;
      padding: 1rem 1.25rem;
      border-radius: 0.5rem;
      border-left: 4px solid #3b82f6;
    }

    .info-icon {
      font-size: 1.5rem;
    }

    .info-box p {
      margin: 0;
      color: #1e40af;
    }

    .advantages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
    }

    .advantage-card {
      background: white;
      padding: 1.25rem;
      border-radius: 0.75rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }

    .advantage-card h3 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
      color: #1e293b;
    }

    .advantage-card p {
      font-size: 0.9rem;
      margin: 0;
    }

    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }

    .comparison-table th,
    .comparison-table td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }

    .comparison-table th {
      background: #f8fafc;
      font-weight: 600;
      color: #475569;
    }

    .comparison-table td {
      color: #475569;
    }

    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .checklist li {
      padding: 0.5rem 0;
      color: #475569;
    }

    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .app-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      padding: 1.25rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }

    .app-card .app-icon {
      font-size: 1.75rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    .app-card h3 {
      font-size: 0.95rem;
      color: #1e293b;
      margin: 0 0 0.4rem;
    }

    .app-card p {
      font-size: 0.85rem;
      margin: 0;
      color: #64748b;
    }

    .lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .lang-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      padding: 1.25rem;
      position: relative;
    }

    .lang-card.primary {
      border-color: #3b82f6;
      background: #eff6ff;
    }

    .lang-badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      background: #3b82f6;
      color: white;
      padding: 0.15rem 0.5rem;
      border-radius: 9999px;
      margin-bottom: 0.5rem;
    }

    .lang-badge.secondary {
      background: #64748b;
    }

    .lang-card h3 {
      font-size: 0.95rem;
      color: #1e293b;
      margin: 0 0 0.4rem;
    }

    .lang-card p {
      font-size: 0.85rem;
      margin: 0;
      color: #64748b;
    }

    .lang-card code {
      background: #e2e8f0;
      padding: 0.1rem 0.3rem;
      border-radius: 0.25rem;
      font-size: 0.85em;
      color: #1e293b;
    }

    .prereq-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .prereq-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      padding: 1rem 1.25rem;
    }

    .prereq-num {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 2rem;
      height: 2rem;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
    }

    .prereq-content h3 {
      font-size: 0.95rem;
      color: #1e293b;
      margin: 0 0 0.25rem;
    }

    .prereq-content p {
      font-size: 0.88rem;
      margin: 0;
      color: #64748b;
    }

    .page-navigation {
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      border-top: 1px solid #e2e8f0;
      margin-top: 2rem;
    }

    .nav-link {
      text-decoration: none;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: background 0.2s;
    }

    .nav-link:hover {
      background: #f1f5f9;
    }

    .nav-direction {
      display: block;
      font-size: 0.85rem;
      color: #64748b;
    }

    .nav-title {
      display: block;
      font-weight: 600;
      color: #1e293b;
    }

    .nav-link.next {
      text-align: right;
    }
  `]
})
export class JustificacionComponent {}
