import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="header-brand">
        <span class="header-logo">📘</span>
        <h1>Tutorial Angular</h1>
        <span class="header-subtitle">Dashboard de Gestión de Proyectos</span>
      </div>
      <nav class="header-nav">
        <span class="author">Alfonso Padilla P. | UNIR 2026</span>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 60px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .header-logo {
      font-size: 1.8rem;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .header-subtitle {
      color: #94a3b8;
      font-size: 0.9rem;
      padding-left: 1rem;
      border-left: 1px solid #475569;
    }

    .author {
      color: #94a3b8;
      font-size: 0.85rem;
    }
  `]
})
export class HeaderComponent {}
