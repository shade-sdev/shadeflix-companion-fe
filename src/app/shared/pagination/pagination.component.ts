import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public currentPage: number = 1;
  public pagesToDisplay?: number[] = [];

  @Input() totalPages?: number;

  @Output() changePageAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.updatePagesToDisplay(1);
  }

  public emitChangePageAction(page: number) {
    this.changePageAction.emit(page);
    this.currentPage = page;
    this.updatePagesToDisplay(page);
  }

  private updatePagesToDisplay(page: number) {
    console.log(page)
    let pagesToDisplay: number[] = [];
    if (page >= 1 && page <= this.totalPages!) {

      for (let i = page - 1; i >= 1; i--) {
        pagesToDisplay.unshift(i);
        if (i == page - 3) {
          break;
        }
      }

      for (let i = page; i <= this.totalPages!; i++) {
        pagesToDisplay.push(i);
        if (i == page + 3) {
          break;
        }
      }
    } else {
      for (let i = 1; i <= this.totalPages!; i++) {
        pagesToDisplay.push(i);
        if (i == page + 3) {
          break;
        }
      }
      this.currentPage = this.totalPages!;
    }

    this.pagesToDisplay = pagesToDisplay;
  }

}
