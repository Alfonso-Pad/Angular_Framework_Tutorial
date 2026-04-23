import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instalacion',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">02</span>
        <h1>Instalación y Configuración</h1>
        <p class="page-subtitle">Prepara tu entorno de desarrollo para trabajar con Angular</p>
      </header>

      <section class="content-section">
        <h2>Requisitos Previos</h2>
        <div class="requirements-list">
          <div class="requirement">
            <span class="req-icon">📦</span>
            <div class="req-content">
              <h3>Node.js (v18+)</h3>
              <p>Entorno de ejecución JavaScript necesario para Angular CLI y npm.</p>
              <a href="https://nodejs.org" target="_blank" class="external-link">Descargar Node.js →</a>
            </div>
          </div>
          <div class="requirement">
            <span class="req-icon">💻</span>
            <div class="req-content">
              <h3>Editor de Código</h3>
              <p>Recomendado: VS Code con la extensión Angular Language Service.</p>
              <a href="https://code.visualstudio.com" target="_blank" class="external-link">Descargar VS Code →</a>
            </div>
          </div>
          <div class="requirement">
            <span class="req-icon">🖥️</span>
            <div class="req-content">
              <h3>Terminal</h3>
              <p>Terminal integrada o aplicación externa (Terminal, PowerShell, etc.).</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 1: Verificar Node.js</h2>
        <p>Abre una terminal y verifica que Node.js está instalado correctamente:</p>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code>node --version
# Debería mostrar v18.x.x o superior

npm --version
# Debería mostrar 9.x.x o superior</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 2: Instalar Angular CLI</h2>
        <p>Angular CLI es la herramienta de línea de comandos oficial para crear y gestionar proyectos Angular:</p>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># Instalar Angular CLI globalmente
npm install -g &#64;angular/cli

# Verificar la instalación
ng version</code></pre>
        </div>
        <div class="info-box success">
          <span class="info-icon">✅</span>
          <p>Si ves la versión de Angular CLI, la instalación fue exitosa.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 3: Crear un Nuevo Proyecto</h2>
        <p>Usa Angular CLI para crear un nuevo proyecto con la configuración recomendada:</p>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># Crear proyecto con SCSS y routing
ng new mi-dashboard --style=scss --routing=true

# Navegar al directorio del proyecto
cd mi-dashboard

# Iniciar el servidor de desarrollo
ng serve</code></pre>
        </div>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>El comando <code>ng serve</code> inicia un servidor en <code>http://localhost:4200</code> con recarga automática.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Paso 4: Estructura del Proyecto</h2>
        <p>Angular CLI genera la siguiente estructura de archivos:</p>
        <div class="file-tree">
          <div class="tree-item folder">📁 src/</div>
          <div class="tree-item folder indent-1">📁 app/</div>
          <div class="tree-item file indent-2">📄 app.ts <span class="file-desc">- Componente raíz</span></div>
          <div class="tree-item file indent-2">📄 app.html <span class="file-desc">- Template del componente</span></div>
          <div class="tree-item file indent-2">📄 app.scss <span class="file-desc">- Estilos del componente</span></div>
          <div class="tree-item file indent-2">📄 app.routes.ts <span class="file-desc">- Configuración de rutas</span></div>
          <div class="tree-item file indent-2">📄 app.config.ts <span class="file-desc">- Configuración de la app</span></div>
          <div class="tree-item file indent-1">📄 main.ts <span class="file-desc">- Punto de entrada</span></div>
          <div class="tree-item file indent-1">📄 index.html <span class="file-desc">- HTML principal</span></div>
          <div class="tree-item file indent-1">📄 styles.scss <span class="file-desc">- Estilos globales</span></div>
          <div class="tree-item file">📄 angular.json <span class="file-desc">- Configuración del proyecto</span></div>
          <div class="tree-item file">📄 package.json <span class="file-desc">- Dependencias npm</span></div>
          <div class="tree-item file">📄 tsconfig.json <span class="file-desc">- Configuración TypeScript</span></div>
        </div>
      </section>

      <section class="content-section">
        <h2>Instalar Dependencias Adicionales</h2>
        <p>Para este tutorial, también necesitaremos Chart.js para los gráficos:</p>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code>npm install chart.js</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Versiones necesarias y compatibilidad</h2>
        <p>La siguiente tabla muestra las versiones mínimas y recomendadas para trabajar con Angular:</p>
        <table class="versions-table">
          <thead>
            <tr>
              <th>Herramienta</th>
              <th>Mínima</th>
              <th>Recomendada</th>
              <th>Comando de verificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Node.js</td>
              <td>v18.13</td>
              <td>v20.x (LTS)</td>
              <td><code>node --version</code></td>
            </tr>
            <tr>
              <td>npm</td>
              <td>9.x</td>
              <td>10.x</td>
              <td><code>npm --version</code></td>
            </tr>
            <tr>
              <td>Angular CLI</td>
              <td>17.x</td>
              <td>21.x</td>
              <td><code>ng version</code></td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>5.2</td>
              <td>5.4+</td>
              <td><code>tsc --version</code></td>
            </tr>
            <tr>
              <td>Navegador</td>
              <td colspan="2">Chrome 88+, Firefox 78+, Edge 88+, Safari 15+</td>
              <td>Última versión estable</td>
            </tr>
          </tbody>
        </table>
        <div class="info-box">
          <span class="info-icon">⚠️</span>
          <p>Angular 21 requiere Node.js ≥ 18.13. Si usas una versión anterior, actualiza Node.js antes de instalar Angular CLI.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Rutas a tener en cuenta</h2>
        <p>Durante la instalación y uso de Angular, existen rutas clave que debes conocer:</p>
        <div class="routes-list">
          <div class="route-item">
            <span class="route-label">Instalación global de Angular CLI</span>
            <div class="code-block small">
              <pre><code># macOS / Linux
~/.npm/bin/ng  (o /usr/local/bin/ng si se instaló con sudo)

# Windows
%APPDATA%\npm\ng.cmd</code></pre>
            </div>
          </div>
          <div class="route-item">
            <span class="route-label">Módulos locales del proyecto</span>
            <div class="code-block small">
              <pre><code>&lt;proyecto&gt;/node_modules/   ← dependencias npm
&lt;proyecto&gt;/dist/           ← build compilado
&lt;proyecto&gt;/src/            ← código fuente
&lt;proyecto&gt;/.angular/cache/ ← caché de compilación</code></pre>
            </div>
          </div>
          <div class="route-item">
            <span class="route-label">Servidor de desarrollo</span>
            <div class="code-block small">
              <pre><code>http://localhost:4200/   ← URL por defecto de ng serve</code></pre>
            </div>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Asegúrate de que la carpeta de binarios globales de npm está en tu <code>PATH</code> del sistema para poder ejecutar <code>ng</code> desde cualquier directorio.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Variables de entorno</h2>
        <p>
          Angular no requiere variables de entorno del sistema operativo por defecto, pero ofrece
          su propio mecanismo de configuración por entorno dentro del proyecto:
        </p>
        <div class="env-explanation">
          <div class="env-card">
            <h3>Archivos de entorno en Angular</h3>
            <p>Angular CLI gestiona entornos a través de ficheros en <code>src/environments/</code>:</p>
            <div class="code-block">
              <div class="code-header">src/environments/environment.ts (desarrollo)</div>
              <pre><code>export const environment = {{ '{' }}
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Mi App Angular'
{{ '}' }};</code></pre>
            </div>
            <div class="code-block">
              <div class="code-header">src/environments/environment.prod.ts (producción)</div>
              <pre><code>export const environment = {{ '{' }}
  production: true,
  apiUrl: 'https://api.miapp.com/api',
  appName: 'Mi App Angular'
{{ '}' }};</code></pre>
            </div>
          </div>
          <div class="env-card">
            <h3>Uso en componentes y servicios</h3>
            <div class="code-block">
              <div class="code-header">services/api.service.ts</div>
              <pre><code>import {{ '{' }} environment {{ '}' }} from '../../environments/environment';

&#64;Injectable({{ '{' }} providedIn: 'root' {{ '}' }})
export class ApiService {{ '{' }}
  private baseUrl = environment.apiUrl;
  // Cambia automáticamente según el entorno
{{ '}' }}</code></pre>
            </div>
            <p>Al compilar con <code>ng build --configuration production</code>, Angular sustituye automáticamente el archivo de entorno de desarrollo por el de producción.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Necesita base de datos?</h2>
        <div class="info-box success">
          <span class="info-icon">✅</span>
          <p><strong>Angular NO necesita base de datos</strong> para ejecutarse. Es un framework de frontend que corre exclusivamente en el navegador del cliente.</p>
        </div>
        <p>
          Angular se comunica con bases de datos <strong>indirectamente</strong>, a través de una API REST o GraphQL
          proporcionada por un backend (Node.js, Spring Boot, Django, etc.). El esquema es:
        </p>
        <div class="db-diagram">
          <div class="db-box browser">
            <span class="db-icon">🌐</span>
            <strong>Navegador</strong>
            <small>Angular App</small>
          </div>
          <div class="db-arrow">HTTP / REST</div>
          <div class="db-box backend">
            <span class="db-icon">⚙️</span>
            <strong>Backend</strong>
            <small>Node / Spring / etc.</small>
          </div>
          <div class="db-arrow">SQL / NoSQL</div>
          <div class="db-box database">
            <span class="db-icon">🗄️</span>
            <strong>Base de Datos</strong>
            <small>PostgreSQL / MongoDB</small>
          </div>
        </div>
        <p>Para este tutorial <strong>no se necesita ninguna base de datos</strong>: los datos son mock data generados directamente en el servicio Angular.</p>
      </section>

      <nav class="page-navigation">
        <a routerLink="/justificacion" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Justificación</span>
        </a>
        <a routerLink="/primeros-pasos" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Primeros Pasos</span>
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

    .requirements-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .requirement {
      display: flex;
      gap: 1rem;
      padding: 1.25rem;
      background: white;
      border-radius: 0.75rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }

    .req-icon {
      font-size: 2rem;
    }

    .req-content h3 {
      margin: 0 0 0.25rem;
      color: #1e293b;
      font-size: 1.1rem;
    }

    .req-content p {
      margin: 0 0 0.5rem;
      font-size: 0.95rem;
    }

    .external-link {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .external-link:hover {
      text-decoration: underline;
    }

    .code-block {
      background: #1e293b;
      border-radius: 0.5rem;
      overflow: hidden;
      margin: 1rem 0;
    }

    .code-header {
      background: #0f172a;
      color: #94a3b8;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 500;
    }

    pre {
      margin: 0;
      padding: 1rem;
      overflow-x: auto;
    }

    code {
      color: #e2e8f0;
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .info-box {
      display: flex;
      gap: 1rem;
      background: #eff6ff;
      padding: 1rem 1.25rem;
      border-radius: 0.5rem;
      border-left: 4px solid #3b82f6;
    }

    .info-box.success {
      background: #f0fdf4;
      border-left-color: #22c55e;
    }

    .info-box.success p {
      color: #166534;
    }

    .info-icon {
      font-size: 1.5rem;
    }

    .info-box p {
      margin: 0;
      color: #1e40af;
    }

    .info-box code {
      background: rgba(0,0,0,0.1);
      padding: 0.15rem 0.4rem;
      border-radius: 0.25rem;
      color: inherit;
      font-size: 0.85rem;
    }

    .file-tree {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
    }

    .tree-item {
      padding: 0.25rem 0;
      color: #475569;
    }

    .tree-item.folder {
      color: #3b82f6;
      font-weight: 500;
    }

    .indent-1 { padding-left: 1.5rem; }
    .indent-2 { padding-left: 3rem; }

    .file-desc {
      color: #94a3b8;
      font-size: 0.8rem;
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

    .versions-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .versions-table th,
    .versions-table td {
      padding: 0.65rem 0.9rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
      font-size: 0.9rem;
    }

    .versions-table th {
      background: #f8fafc;
      color: #475569;
      font-weight: 600;
    }

    .versions-table td code {
      background: #e2e8f0;
      padding: 0.1rem 0.35rem;
      border-radius: 0.25rem;
      font-size: 0.85em;
    }

    .routes-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.75rem;
    }

    .route-item {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      padding: 1rem 1.25rem;
    }

    .route-label {
      display: block;
      font-weight: 600;
      color: #334155;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .code-block.small pre {
      padding: 0.6rem 1rem;
    }

    .env-explanation {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .env-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      padding: 1.25rem;
    }

    .env-card h3 {
      font-size: 1rem;
      color: #1e293b;
      margin: 0 0 0.75rem;
    }

    .env-card p {
      font-size: 0.9rem;
    }

    .db-diagram {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1.5rem 0;
    }

    .db-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 0.75rem;
      padding: 1rem 1.5rem;
      min-width: 120px;
      text-align: center;
    }

    .db-box.browser { border-color: #3b82f6; }
    .db-box.backend { border-color: #10b981; }
    .db-box.database { border-color: #f59e0b; }

    .db-box .db-icon { font-size: 1.75rem; }
    .db-box strong { font-size: 0.9rem; color: #1e293b; }
    .db-box small { font-size: 0.75rem; color: #94a3b8; }

    .db-arrow {
      font-size: 0.75rem;
      color: #64748b;
      text-align: center;
      padding: 0 0.25rem;
    }
  `]
})
export class InstalacionComponent {}
