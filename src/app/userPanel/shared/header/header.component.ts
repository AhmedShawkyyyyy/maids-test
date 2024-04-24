import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // ============= search text method===========\\

  searchText: number = 0;
  @Output()
  searchTextChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('searchInput') searchInputElement!: ElementRef<HTMLInputElement>;

  onSearchTextChange() {
    const inputValue = +this.searchInputElement.nativeElement.value;
    this.searchText = isNaN(inputValue) ? 0 : inputValue;
    this.searchTextChange.emit(this.searchText);
  }
}
