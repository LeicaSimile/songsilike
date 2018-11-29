import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  template: `
  <form>
    <div class="btn-group">
      <input type="text" placeholder="Search" class="form-control"/>
      <button type="button" class="btn btn-info">
        Go
      </button>
    </div>
  </form>
  `
})
export class SearchbarComponent {
}
