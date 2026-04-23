import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header.component';
import { SidebarComponent } from './components/layout/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <app-header />
    <div class="app-container">
      <app-sidebar />
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: calc(100vh - 60px);
      margin-top: 60px;
    }

    .main-content {
      flex: 1;
      margin-left: 260px;
      padding: 2rem;
      background: #f8fafc;
      min-height: calc(100vh - 60px);
    }
  `]
})
export class App {}
