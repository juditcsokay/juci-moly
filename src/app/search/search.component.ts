import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MolyService } from '../moly.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private molyService: MolyService) {}

  ngOnInit(): void {}

  onSubmit(searchForm: NgForm) {
    console.log(searchForm.value.searchInput);
    this.molyService.searchBooks(searchForm.value.searchInput);
  }
}
