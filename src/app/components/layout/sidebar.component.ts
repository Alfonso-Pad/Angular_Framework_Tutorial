import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  section?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <nav class="sidebar-nav">
        @for (item of menuItems; track item.path) {
          @if (item.section) {
            <div class="section-divider">{{ item.section }}</div>
          }
          <a
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.path === '/' }"
            class="nav-item"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        }
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 260px;
      background: #0f172a;
      height: calc(100vh - 60px);
      position: fixed;
      top: 60px;
      left: 0;
      overflow-y: auto;
      padding: 1rem 0;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0 0.5rem;
    }

    .section-divider {
      color: #64748b;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 1.5rem 1rem 0.5rem;
      margin-top: 0.5rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      color: #94a3b8;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
    }

    .nav-item:hover {
      background: #1e293b;
      color: white;
    }

    .nav-item.active {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
    }

    .nav-icon {
      font-size: 1.2rem;
    }

    .nav-label {
      font-size: 0.95rem;
    }
  `]
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { path: '/', label: 'Inicio', icon: '🏠' },
    { path: '/justificacion', label: 'Justificación', icon: '📋', section: 'Tutorial' },
    { path: '/instalacion', label: 'Instalación', icon: '⚙️' },
    { path: '/primeros-pasos', label: 'Primeros Pasos', icon: '🚀' },
    { path: '/utilizacion', label: 'Utilización', icon: '💻' },
    { path: '/funcionamiento', label: 'Funcionamiento', icon: '🔧' },
    { path: '/aplicacion-ejemplo', label: 'Aplicación Ejemplo', icon: '🎯', section: 'Práctica' },
    { path: '/dashboard', label: 'Dashboard Demo', icon: '📊' },
    { path: '/conclusiones', label: 'Conclusiones', icon: '✨', section: 'Cierre' },
  ];
}
