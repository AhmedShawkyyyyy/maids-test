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
    const inputValue = +this.searchInputElement.nativeElement.value; // Convert input value to number
    this.searchText = isNaN(inputValue) ? 0 : inputValue; // If input value is not a number, set it to 0
    this.searchTextChange.emit(this.searchText);
    // this.searchText = this.searchInputElement.nativeElement.value;
    // this.searchTextChange.emit(this.searchText);
    // console.log(`this is search value from header ${this.searchText}`);
  }
}
