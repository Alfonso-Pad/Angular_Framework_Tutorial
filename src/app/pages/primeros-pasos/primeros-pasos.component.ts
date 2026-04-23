import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primeros-pasos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">03</span>
        <h1>Primeros Pasos con Angular</h1>
        <p class="page-subtitle">Conceptos fundamentales para comenzar a desarrollar</p>
      </header>

      <section class="content-section">
        <h2>¡Hola Mundo! — Tu primera aplicación Angular</h2>
        <p>
          Antes de profundizar en conceptos, vamos a crear y ejecutar el ejemplo más sencillo posible:
          un componente que muestra "¡Hola Mundo!" en pantalla.
        </p>

        <h3>Paso 1 — Crear el proyecto</h3>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code>ng new hola-mundo --style=css --routing=false
cd hola-mundo</code></pre>
        </div>

        <h3>Paso 2 — Modificar el componente raíz</h3>
        <p>Abre <code>src/app/app.ts</code> y reemplaza su contenido:</p>
        <div class="code-block">
          <div class="code-header">src/app/app.ts</div>
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}
  selector: 'app-root',
  standalone: true,
  template: \`
    &lt;h1&gt;¡Hola Mundo desde Angular!&lt;/h1&gt;
    &lt;p&gt;Mi primera aplicación Angular funciona correctamente.&lt;/p&gt;
  \`,
  styles: [\`
    h1 {{ '{' }}
      color: #3b82f6;
      font-family: sans-serif;
    {{ '}' }}
  \`]
{{ '}' }})
export class AppComponent {{ '{' }} {{ '}' }}</code></pre>
        </div>

        <h3>Paso 3 — Arrancar la aplicación</h3>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code>ng serve --open</code></pre>
        </div>
        <p>
          El flag <code>--open</code> abre automáticamente el navegador en
          <strong>http://localhost:4200</strong>. Deberías ver el mensaje "¡Hola Mundo desde Angular!".
        </p>

        <div class="hola-mundo-preview">
          <div class="preview-bar">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="preview-url">http://localhost:4200</span>
          </div>
          <div class="preview-body">
            <h1 style="color:#3b82f6;margin:0 0 0.5rem;font-size:1.4rem;">¡Hola Mundo desde Angular!</h1>
            <p style="color:#475569;margin:0;font-size:0.9rem;">Mi primera aplicación Angular funciona correctamente.</p>
          </div>
        </div>

        <div class="info-box">
          <span class="info-icon">🎉</span>
          <p>¡Felicidades! Ya tienes tu primera aplicación Angular ejecutándose. Cualquier cambio que guardes en el editor se reflejará automáticamente en el navegador gracias al <em>Hot Module Replacement</em>.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Componentes: La Base de Angular</h2>
        <p>
          Los <strong>componentes</strong> son los bloques de construcción fundamentales de Angular.
          Cada componente encapsula su propia lógica, template y estilos.
        </p>
        <div class="code-block">
          <div class="code-header">app/components/ejemplo/ejemplo.component.ts</div>
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}
  selector: 'app-ejemplo',
  standalone: true,
  template: \`
    &lt;div class="card"&gt;
      &lt;h3&gt;{{ '{{' }} titulo {{ '}}' }}&lt;/h3&gt;
      &lt;p&gt;{{ '{{' }} descripcion {{ '}}' }}&lt;/p&gt;
    &lt;/div&gt;
  \`,
  styles: [\`
    .card {{ '{' }}
      padding: 1rem;
      border-radius: 0.5rem;
      background: white;
    {{ '}' }}
  \`]
{{ '}' }})
export class EjemploComponent {{ '{' }}
  titulo = 'Mi Componente';
  descripcion = 'Este es un ejemplo básico.';
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Anatomía de un Componente</h2>
        <div class="anatomy-grid">
          <div class="anatomy-item">
            <h3>🏷️ Decorator &#64;Component</h3>
            <p>Configura el componente: selector, template, estilos y metadatos.</p>
          </div>
          <div class="anatomy-item">
            <h3>📝 Template</h3>
            <p>HTML con sintaxis especial de Angular para mostrar datos dinámicos.</p>
          </div>
          <div class="anatomy-item">
            <h3>🎨 Styles</h3>
            <p>CSS/SCSS encapsulado que solo afecta a este componente.</p>
          </div>
          <div class="anatomy-item">
            <h3>⚙️ Clase TypeScript</h3>
            <p>Lógica del componente: propiedades, métodos y ciclo de vida.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Standalone Components (Angular 17+)</h2>
        <p>
          Los componentes standalone simplifican la arquitectura al eliminar la necesidad de NgModules.
          Cada componente declara sus propias dependencias.
        </p>
        <div class="code-block">
          <div class="code-header">Componente Standalone con Dependencias</div>
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';
import {{ '{' }} CommonModule {{ '}' }} from '&#64;angular/common';
import {{ '{' }} RouterLink {{ '}' }} from '&#64;angular/router';

&#64;Component({{ '{' }}
  selector: 'app-mi-componente',
  standalone: true,
  imports: [CommonModule, RouterLink], // Dependencias
  template: \`....\`
{{ '}' }})
export class MiComponente {{ '{' }} {{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Control Flow (Nueva Sintaxis v17+)</h2>
        <p>Angular 17 introdujo una nueva sintaxis para control de flujo más intuitiva:</p>
        
        <h3>Condicionales con &#64;if</h3>
        <div class="code-block">
          <div class="code-header">Template</div>
          <pre><code>&lt;!-- Nueva sintaxis (Angular 17+) --&gt;
&#64;if (usuario) {{ '{' }}
  &lt;p&gt;Bienvenido, {{ '{{' }} usuario.nombre {{ '}}' }}&lt;/p&gt;
{{ '}' }} &#64;else {{ '{' }}
  &lt;p&gt;Por favor, inicia sesión&lt;/p&gt;
{{ '}' }}</code></pre>
        </div>

        <h3>Iteraciones con &#64;for</h3>
        <div class="code-block">
          <div class="code-header">Template</div>
          <pre><code>&lt;ul&gt;
  &#64;for (item of items; track item.id) {{ '{' }}
    &lt;li&gt;{{ '{{' }} item.nombre {{ '}}' }}&lt;/li&gt;
  {{ '}' }} &#64;empty {{ '{' }}
    &lt;li&gt;No hay elementos&lt;/li&gt;
  {{ '}' }}
&lt;/ul&gt;</code></pre>
        </div>

        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>La propiedad <code>track</code> es obligatoria en &#64;for y ayuda a Angular a optimizar el renderizado.</p>
        </div>
      </section>

      <section class="content-section">
        <h2>Signals: Reactividad Moderna</h2>
        <p>
          Los signals son el nuevo sistema de reactividad de Angular, más eficiente que los tradicionales observables
          para gestión de estado local.
        </p>
        <div class="code-block">
          <div class="code-header">Usando Signals</div>
          <pre><code>import {{ '{' }} Component, signal, computed {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}...{{ '}' }})
export class ContadorComponent {{ '{' }}
  // Signal básico
  contador = signal(0);
  
  // Signal computado (derivado)
  doble = computed(() => this.contador() * 2);
  
  incrementar() {{ '{' }}
    this.contador.update(v => v + 1);
  {{ '}' }}
  
  reset() {{ '{' }}
    this.contador.set(0);
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Generar Componentes con CLI</h2>
        <p>Angular CLI facilita la creación de componentes:</p>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># Generar un componente
ng generate component components/header

# Forma abreviada
ng g c components/sidebar

# Generar un servicio
ng g service services/proyecto</code></pre>
        </div>
      </section>

      <nav class="page-navigation">
        <a routerLink="/instalacion" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Instalación</span>
        </a>
        <a routerLink="/utilizacion" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Utilización</span>
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

    h3 {
      font-size: 1.1rem;
      color: #334155;
      margin: 1.5rem 0 0.75rem;
    }

    p {
      color: #475569;
      line-height: 1.7;
      margin: 0 0 1rem;
    }

    .anatomy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .anatomy-item {
      background: white;
      padding: 1.25rem;
      border-radius: 0.75rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }

    .anatomy-item h3 {
      margin: 0 0 0.5rem;
      font-size: 1rem;
    }

    .anatomy-item p {
      margin: 0;
      font-size: 0.9rem;
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

    p code, h3 code, li code {
      background: #f1f5f9;
      color: #1e293b;
      padding: 0.15rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 0.875em;
    }

    .info-box {
      display: flex;
      gap: 1rem;
      background: #eff6ff;
      padding: 1rem 1.25rem;
      border-radius: 0.5rem;
      border-left: 4px solid #3b82f6;
    }

    .hola-mundo-preview {
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      overflow: hidden;
      margin: 1rem 0;
    }

    .preview-bar {
      background: #f1f5f9;
      padding: 0.5rem 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }

    .dot.red { background: #ef4444; }
    .dot.yellow { background: #f59e0b; }
    .dot.green { background: #10b981; }

    .preview-url {
      margin-left: 0.5rem;
      font-size: 0.8rem;
      color: #64748b;
      background: white;
      padding: 0.15rem 0.6rem;
      border-radius: 9999px;
      border: 1px solid #e2e8f0;
    }

    .preview-body {
      padding: 1.5rem;
      background: white;
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
export class PrimerosPasosComponent {}
