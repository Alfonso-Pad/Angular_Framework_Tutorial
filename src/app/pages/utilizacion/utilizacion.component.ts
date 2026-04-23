import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-utilizacion',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="page">
      <header class="page-header">
        <span class="page-number">04</span>
        <h1>Utilización de Angular</h1>
        <p class="page-subtitle">Data binding, directivas y comunicación entre componentes</p>
      </header>

      <section class="content-section">
        <h2>Data Binding</h2>
        <p>Angular ofrece varias formas de vincular datos entre el componente y el template:</p>
        
        <div class="binding-types">
          <div class="binding-card">
            <h3>Interpolación {{ '{{' }} {{ '}}' }}</h3>
            <p>Muestra valores en el template</p>
            <div class="code-inline">&lt;p&gt;{{ '{{' }} usuario.nombre {{ '}}' }}&lt;/p&gt;</div>
          </div>
          
          <div class="binding-card">
            <h3>Property Binding [ ]</h3>
            <p>Enlaza propiedades del DOM</p>
            <div class="code-inline">&lt;img [src]="imagen.url"&gt;</div>
          </div>
          
          <div class="binding-card">
            <h3>Event Binding ( )</h3>
            <p>Escucha eventos del DOM</p>
            <div class="code-inline">&lt;button (click)="guardar()"&gt;</div>
          </div>
          
          <div class="binding-card">
            <h3>Two-way Binding [( )]</h3>
            <p>Sincroniza en ambas direcciones</p>
            <div class="code-inline">&lt;input [(ngModel)]="nombre"&gt;</div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Input y Output: Comunicación entre Componentes</h2>
        
        <h3>&#64;Input() - Padre → Hijo</h3>
        <div class="code-block">
          <div class="code-header">hijo.component.ts</div>
          <pre><code>import {{ '{' }} Component, Input {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}
  selector: 'app-hijo',
  template: \`&lt;p&gt;{{ '{{' }} mensaje {{ '}}' }}&lt;/p&gt;\`
{{ '}' }})
export class HijoComponent {{ '{' }}
  &#64;Input() mensaje = '';
{{ '}' }}</code></pre>
        </div>
        
        <div class="code-block">
          <div class="code-header">padre.component.html</div>
          <pre><code>&lt;app-hijo [mensaje]="'Hola desde el padre'"&gt;&lt;/app-hijo&gt;</code></pre>
        </div>

        <h3>&#64;Output() - Hijo → Padre</h3>
        <div class="code-block">
          <div class="code-header">hijo.component.ts</div>
          <pre><code>import {{ '{' }} Component, Output, EventEmitter {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}
  selector: 'app-hijo',
  template: \`
    &lt;button (click)="enviarEvento()"&gt;Notificar&lt;/button&gt;
  \`
{{ '}' }})
export class HijoComponent {{ '{' }}
  &#64;Output() notificacion = new EventEmitter&lt;string&gt;();
  
  enviarEvento() {{ '{' }}
    this.notificacion.emit('Mensaje del hijo');
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
        
        <div class="code-block">
          <div class="code-header">padre.component.html</div>
          <pre><code>&lt;app-hijo (notificacion)="manejarNotificacion($event)"&gt;&lt;/app-hijo&gt;</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Servicios e Inyección de Dependencias</h2>
        <p>Los servicios encapsulan lógica de negocio y se inyectan en los componentes:</p>
        
        <div class="code-block">
          <div class="code-header">services/datos.service.ts</div>
          <pre><code>import {{ '{' }} Injectable, signal {{ '}' }} from '&#64;angular/core';

&#64;Injectable({{ '{' }} providedIn: 'root' {{ '}' }})
export class DatosService {{ '{' }}
  private _items = signal&lt;string[]&gt;([]);
  
  readonly items = this._items.asReadonly();
  
  agregarItem(item: string) {{ '{' }}
    this._items.update(items => [...items, item]);
  {{ '}' }}
  
  eliminarItem(index: number) {{ '{' }}
    this._items.update(items => items.filter((_, i) => i !== index));
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
        
        <div class="code-block">
          <div class="code-header">Inyectando el servicio</div>
          <pre><code>import {{ '{' }} Component, inject {{ '}' }} from '&#64;angular/core';
import {{ '{' }} DatosService {{ '}' }} from './services/datos.service';

&#64;Component({{ '{' }}...{{ '}' }})
export class MiComponente {{ '{' }}
  // Nueva forma (Angular 14+)
  private datosService = inject(DatosService);
  
  items = this.datosService.items;
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Routing y Navegación</h2>
        <p>Angular Router gestiona la navegación entre vistas:</p>
        
        <div class="code-block">
          <div class="code-header">app.routes.ts</div>
          <pre><code>import {{ '{' }} Routes {{ '}' }} from '&#64;angular/router';

export const routes: Routes = [
  {{ '{' }} path: '', component: HomeComponent {{ '}' }},
  {{ '{' }} path: 'proyectos', component: ProyectosComponent {{ '}' }},
  {{ '{' }} path: 'proyecto/:id', component: DetalleComponent {{ '}' }},
  {{ '{' }} path: '**', redirectTo: '' {{ '}' }}
];</code></pre>
        </div>
        
        <div class="code-block">
          <div class="code-header">Navegación en template</div>
          <pre><code>&lt;!-- Con routerLink --&gt;
&lt;a routerLink="/proyectos"&gt;Ver Proyectos&lt;/a&gt;
&lt;a [routerLink]="['/proyecto', proyecto.id]"&gt;Detalle&lt;/a&gt;

&lt;!-- Router outlet para mostrar componentes --&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>Formularios Reactivos</h2>
        <div class="code-block">
          <div class="code-header">formulario.component.ts</div>
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';
import {{ '{' }} FormBuilder, FormGroup, Validators, ReactiveFormsModule {{ '}' }} from '&#64;angular/forms';

&#64;Component({{ '{' }}
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    &lt;form [formGroup]="form" (ngSubmit)="enviar()"&gt;
      &lt;input formControlName="nombre" placeholder="Nombre"&gt;
      &lt;input formControlName="email" type="email" placeholder="Email"&gt;
      &lt;button type="submit" [disabled]="!form.valid"&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  \`
{{ '}' }})
export class FormularioComponent {{ '{' }}
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {{ '{' }}
    this.form = this.fb.group({{ '{' }}
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    {{ '}' }});
  {{ '}' }}
  
  enviar() {{ '{' }}
    if (this.form.valid) {{ '{' }}
      console.log(this.form.value);
    {{ '}' }}
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Cómo empezar a crear una aplicación base?</h2>
        <p>
          Una aplicación base en Angular tiene una estructura mínima funcional. Estos son los pasos
          para construirla desde cero de forma ordenada:
        </p>
        <div class="steps-list">
          <div class="step-card">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>Genera el proyecto con Angular CLI</h3>
              <div class="code-block">
                <div class="code-header">Terminal</div>
                <pre><code>ng new mi-app --style=scss --routing=true
cd mi-app</code></pre>
              </div>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>Crea los componentes de la aplicación</h3>
              <div class="code-block">
                <div class="code-header">Terminal</div>
                <pre><code># Componentes de página
ng g c pages/home
ng g c pages/about

# Componentes de layout
ng g c components/header
ng g c components/footer</code></pre>
              </div>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>Configura las rutas</h3>
              <div class="code-block">
                <div class="code-header">src/app/app.routes.ts</div>
                <pre><code>import {{ '{' }} Routes {{ '}' }} from '&#64;angular/router';
import {{ '{' }} HomeComponent {{ '}' }} from './pages/home/home.component';
import {{ '{' }} AboutComponent {{ '}' }} from './pages/about/about.component';

export const routes: Routes = [
  {{ '{' }} path: '', component: HomeComponent {{ '}' }},
  {{ '{' }} path: 'about', component: AboutComponent {{ '}' }},
  {{ '{' }} path: '**', redirectTo: '' {{ '}' }}
];</code></pre>
              </div>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">4</div>
            <div class="step-body">
              <h3>Monta el layout en app.html</h3>
              <div class="code-block">
                <div class="code-header">src/app/app.html</div>
                <pre><code>&lt;app-header&gt;&lt;/app-header&gt;
&lt;main&gt;
  &lt;router-outlet&gt;&lt;/router-outlet&gt;
&lt;/main&gt;
&lt;app-footer&gt;&lt;/app-footer&gt;</code></pre>
              </div>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">5</div>
            <div class="step-body">
              <h3>Crea un servicio para los datos</h3>
              <div class="code-block">
                <div class="code-header">Terminal</div>
                <pre><code>ng g service services/data</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>¿Cómo visualizar los resultados de la ejecución?</h2>
        <p>Angular ofrece varias formas de inspeccionar y visualizar cómo se ejecuta la aplicación:</p>

        <h3>1. Servidor de desarrollo (<code>ng serve</code>)</h3>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># Arrancar con apertura automática del navegador
ng serve --open

# Especificar puerto y host
ng serve --port 4201 --host 0.0.0.0

# Con configuración de producción (para testear build final)
ng serve --configuration production</code></pre>
        </div>
        <p>El servidor escucha en <strong>http://localhost:4200</strong> con <em>live reload</em>: cada vez que guardas un fichero, el navegador se actualiza automáticamente.</p>

        <h3>2. DevTools del navegador</h3>
        <div class="devtools-list">
          <div class="devtools-item">
            <span class="dt-icon">🔍</span>
            <div>
              <strong>Consola</strong>
              <p>Los <code>console.log()</code> del código TypeScript aparecen aquí. Útil para depurar lógica.</p>
            </div>
          </div>
          <div class="devtools-item">
            <span class="dt-icon">🌐</span>
            <div>
              <strong>Network</strong>
              <p>Monitoriza las peticiones HTTP que realiza tu servicio Angular a APIs externas.</p>
            </div>
          </div>
          <div class="devtools-item">
            <span class="dt-icon">🧩</span>
            <div>
              <strong>Angular DevTools (extensión)</strong>
              <p>Extensión oficial de Chrome que permite inspeccionar el árbol de componentes, signals y el rendimiento.</p>
            </div>
          </div>
        </div>

        <h3>3. Build de producción</h3>
        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># Genera los ficheros optimizados en /dist
ng build --configuration production</code></pre>
        </div>
        <p>Los ficheros del build están en <code>dist/&lt;nombre-proyecto&gt;/browser/</code> y pueden desplegarse en cualquier servidor web estático (Nginx, Apache, Vercel, GitHub Pages, etc.).</p>
      </section>

      <nav class="page-navigation">
        <a routerLink="/primeros-pasos" class="nav-link prev">
          <span class="nav-direction">← Anterior</span>
          <span class="nav-title">Primeros Pasos</span>
        </a>
        <a routerLink="/funcionamiento" class="nav-link next">
          <span class="nav-direction">Siguiente →</span>
          <span class="nav-title">Funcionamiento</span>
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
    h3 { font-size: 1.1rem; color: #334155; margin: 1.5rem 0 0.75rem; }
    p { color: #475569; line-height: 1.7; margin: 0 0 1rem; }
    
    .binding-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
    .binding-card { background: white; padding: 1.25rem; border-radius: 0.75rem; box-shadow: 0 1px 4px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .binding-card h3 { margin: 0 0 0.5rem; font-size: 1rem; color: #1e293b; }
    .binding-card p { margin: 0 0 0.75rem; font-size: 0.9rem; }
    .code-inline { background: #1e293b; color: #e2e8f0; padding: 0.5rem 0.75rem; border-radius: 0.25rem; font-family: 'Fira Code', monospace; font-size: 0.8rem; overflow-x: auto; }
    
    .code-block { background: #1e293b; border-radius: 0.5rem; overflow: hidden; margin: 1rem 0; }
    .code-header { background: #0f172a; color: #94a3b8; padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 500; }
    pre { margin: 0; padding: 1rem; overflow-x: auto; }
    code { color: #e2e8f0; font-family: 'Fira Code', monospace; font-size: 0.9rem; line-height: 1.6; }
    
    .page-navigation { display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    .nav-link { text-decoration: none; padding: 1rem; border-radius: 0.5rem; transition: background 0.2s; }
    .nav-link:hover { background: #f1f5f9; }
    .nav-direction { display: block; font-size: 0.85rem; color: #64748b; }
    .nav-title { display: block; font-weight: 600; color: #1e293b; }
    .nav-link.next { text-align: right; }

    .steps-list { display: flex; flex-direction: column; gap: 1rem; }
    .step-card { display: flex; gap: 1rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem; }
    .step-num { display: flex; align-items: center; justify-content: center; min-width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border-radius: 9999px; font-weight: 700; font-size: 1rem; }
    .step-body { flex: 1; }
    .step-body h3 { font-size: 0.95rem; color: #1e293b; margin: 0 0 0.5rem; }

    .devtools-list { display: flex; flex-direction: column; gap: 0.75rem; margin: 0.75rem 0 1rem; }
    .devtools-item { display: flex; gap: 0.75rem; align-items: flex-start; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 0.75rem 1rem; }
    .dt-icon { font-size: 1.4rem; }
    .devtools-item strong { display: block; color: #1e293b; margin-bottom: 0.2rem; font-size: 0.9rem; }
    .devtools-item p { margin: 0; font-size: 0.85rem; color: #64748b; }
  `]
})
export class UtilizacionComponent {}
