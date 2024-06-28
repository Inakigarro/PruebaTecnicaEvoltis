import { Component } from '@angular/core';
import { CourtService } from '../../domain/service/court.service';
import { Court } from '../../shared';
import { ListComponent } from '../../../list/list.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

export const COURT_LIST_ID = 'court-list';

@Component({
  selector: 'app-court-list',
  standalone: true,
  imports: [CommonModule, ListComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './court-list.component.html',
  styleUrl: './court-list.component.scss'
})
export class CourtListComponent {
  public listId = COURT_LIST_ID;
  public listTitle = 'Courts';
  public listHeaders : (string & keyof Court | 'buttons')[] = ['number', 'type', 'buttons'];
  public listLoaded$ = this.courtService.courtListLoaded$;
  public listData$ = this.courtService.courtsList$;

  constructor(private courtService: CourtService) {}
}
