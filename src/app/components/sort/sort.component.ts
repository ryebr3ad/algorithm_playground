import { Component, OnInit } from '@angular/core';
import { SortService, InsertionSortView, MergeSortView } from 'src/app/services/sort/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private sortService: SortService) { }

  public insertionSortIterations: InsertionSortView[] = [];
  public mergeSortIterations: MergeSortView;

  ngOnInit(): void {
    this.sortService.insertionSort([1, 100, 44, 8, 2, 19]).subscribe(iters => this.insertionSortIterations = iters);
    this.sortService.mergeSort([5, 2, 4, 7, 1, 3, 2, 6]).subscribe(iters => this.mergeSortIterations = iters);
  }

}