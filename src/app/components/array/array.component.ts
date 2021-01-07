import { Component, OnInit } from '@angular/core';
import { ArrayService, MaxSubarray } from 'src/app/services/array/array.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor(private arrayService: ArrayService) { }

  public maxSubarrays: MaxSubarrayStats[];

  ngOnInit(): void {
    this.maxSubarrays = [];
    let sequence: number[] = [3, 13, 2, 1, 10];
    let maxSubarray = this.arrayService.maximumSubarray(sequence);

    this.maxSubarrays.push({ 
      sequence: Object.assign([], sequence), 
      maxSubarray: maxSubarray 
    });

    sequence = [50, 10, 15, 12, 20, 30, 11, 15, 12, 40, 5];
    maxSubarray = this.arrayService.maximumSubarray(sequence);

    this.maxSubarrays.push({ 
      sequence: Object.assign([], sequence), 
      maxSubarray: maxSubarray 
    });
  }

}

interface MaxSubarrayStats {
  sequence: number[];
  maxSubarray: MaxSubarray;
}