import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup = this.builder.group({
    searchString: ['', Validators.required]
    });
  @Output() clickEmitter = new EventEmitter();
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  public processSearch() {
   const searchTerm = this.searchForm.get('searchString').value;
   this.clickEmitter.emit(searchTerm);
  }

}
