import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <section class="hero">
        <h1>Tutorial de Angular</h1>
        <p class="subtitle">
          Guía completa para desarrollar un Dashboard de Gestión de Proyectos
        </p>
        <div class="hero-meta">
          <span>📚 Desarrollo de Aplicaciones en Red (DAR)</span>
          <span>🎓 UNIR - 2025</span>
          <span>👤 Alfonso Padilla Padilla</span>
        </div>
      </section>

      <section class="overview">
        <h2>¿Qué aprenderás en este tutorial?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">⚡</span>
            <h3>Angular 17+</h3>
            <p>Aprende las últimas características del framework: signals, control flow, standalone components.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📊</span>
            <h3>Chart.js</h3>
            <p>Integra gráficos interactivos: barras, líneas y gráficos circulares para visualización de datos.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🎨</span>
            <h3>SCSS</h3>
            <p>Diseña interfaces modernas con estilos responsivos y componentes reutilizables.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🔄</span>
            <h3>Servicios</h3>
            <p>Gestiona el estado de la aplicación con servicios y signals reactivos.</p>
          </div>
        </div>
      </section>

      <section class="content-overview">
        <h2>Contenido del Tutorial</h2>
        <div class="content-list">
          <a routerLink="/justificacion" class="content-item">
            <span class="content-number">01</span>
            <div class="content-info">
              <h4>Justificación</h4>
              <p>Por qué elegir Angular para desarrollo web moderno</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/instalacion" class="content-item">
            <span class="content-number">02</span>
            <div class="content-info">
              <h4>Instalación</h4>
              <p>Configuración del entorno de desarrollo</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/primeros-pasos" class="content-item">
            <span class="content-number">03</span>
            <div class="content-info">
              <h4>Primeros Pasos</h4>
              <p>Estructura del proyecto y conceptos básicos</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/utilizacion" class="content-item">
            <span class="content-number">04</span>
            <div class="content-info">
              <h4>Utilización</h4>
              <p>Componentes, directivas y data binding</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/funcionamiento" class="content-item">
            <span class="content-number">05</span>
            <div class="content-info">
              <h4>Funcionamiento</h4>
              <p>Arquitectura interna y ciclo de vida</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/aplicacion-ejemplo" class="content-item">
            <span class="content-number">06</span>
            <div class="content-info">
              <h4>Aplicación de Ejemplo</h4>
              <p>Desarrollo paso a paso del Dashboard</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/dashboard" class="content-item highlight">
            <span class="content-number">🎯</span>
            <div class="content-info">
              <h4>Dashboard Demo</h4>
              <p>Aplicación funcional con gráficos y filtros</p>
            </div>
            <span class="arrow">→</span>
          </a>
          <a routerLink="/conclusiones" class="content-item">
            <span class="content-number">07</span>
            <div class="content-info">
              <h4>Conclusiones</h4>
              <p>Resumen y recursos adicionales</p>
            </div>
            <span class="arrow">→</span>
          </a>
        </div>
      </section>

      <section class="cta">
        <a routerLink="/justificacion" class="btn-primary">
          Comenzar Tutorial →
        </a>
      </section>
    </div>
  `,
  styles: [`
    .home {
      max-width: 900px;
      margin: 0 auto;
    }

    .hero {
      text-align: center;
      padding: 3rem 0;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 2.5rem;
      color: #1e293b;
      margin: 0 0 0.5rem;
    }

    .subtitle {
      font-size: 1.25rem;
      color: #64748b;
      margin: 0 0 1.5rem;
    }

    .hero-meta {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      font-size: 0.9rem;
      color: #475569;
    }

    .overview h2,
    .content-overview h2 {
      font-size: 1.5rem;
      color: #1e293b;
      margin-bottom: 1.5rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      text-align: center;
    }

    .feature-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.75rem;
    }

    .feature-card h3 {
      margin: 0 0 0.5rem;
      color: #1e293b;
      font-size: 1.1rem;
    }

    .feature-card p {
      margin: 0;
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .content-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }

    .content-item {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1rem 1.5rem;
      background: white;
      border-radius: 0.75rem;
      text-decoration: none;
      transition: all 0.2s;
      border: 1px solid #e2e8f0;
    }

    .content-item:hover {
      border-color: #3b82f6;
      transform: translateX(4px);
    }

    .content-item.highlight {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      border: none;
    }

    .content-item.highlight .content-number,
    .content-item.highlight h4,
    .content-item.highlight p,
    .content-item.highlight .arrow {
      color: white;
    }

    .content-number {
      font-size: 1.25rem;
      font-weight: 700;
      color: #3b82f6;
      min-width: 40px;
    }

    .content-info {
      flex: 1;
    }

    .content-info h4 {
      margin: 0 0 0.25rem;
      color: #1e293b;
      font-size: 1rem;
    }

    .content-info p {
      margin: 0;
      color: #64748b;
      font-size: 0.85rem;
    }

    .arrow {
      color: #94a3b8;
      font-size: 1.25rem;
    }

    .cta {
      text-align: center;
      padding: 2rem 0;
    }

    .btn-primary {
      display: inline-block;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1.1rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
  `]
})
export class HomeComponent {}
