import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectStatus } from '../../models/project.model';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="filter-container">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (ngModelChange)="emitFilter()"
          placeholder="Buscar por nombre o responsable..."
          class="search-input"
        />
      </div>
      <div class="filter-select">
        <select [(ngModel)]="selectedStatus" (ngModelChange)="emitFilter()" class="status-select">
          <option value="todos">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en-progreso">En Progreso</option>
          <option value="completado">Completado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>
    </div>
  `,
  styles: [`
    .filter-container {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .search-box {
      flex: 1;
      min-width: 250px;
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
    }

    .search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      outline: none;
      border-color: #3b82f6;
    }

    .status-select {
      padding: 0.75rem 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      background: white;
      cursor: pointer;
      min-width: 180px;
    }

    .status-select:focus {
      outline: none;
      border-color: #3b82f6;
    }
  `]
})
export class SearchFilterComponent {
  @Output() filterChange = new EventEmitter<{ search: string; status: ProjectStatus | 'todos' }>();

  searchTerm = '';
  selectedStatus: ProjectStatus | 'todos' = 'todos';

  emitFilter(): void {
    this.filterChange.emit({
      search: this.searchTerm,
      status: this.selectedStatus,
    });
  }
}
