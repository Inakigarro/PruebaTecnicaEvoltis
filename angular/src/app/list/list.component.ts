import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent<TItem> implements OnInit {
  @Input()
  public listId = 'list';
  
  @Input()
    public listTitle?: string;

    @Input()
    public listHeaders: (string & keyof TItem | 'buttons')[];

    @Input()
    public listData: Observable<TItem[]>;

    public dataSource = new MatTableDataSource<TItem>();
}
