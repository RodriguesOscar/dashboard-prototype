import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-detail.html',
  styleUrls: ['./destination-detail.scss']
})
export class DestinationDetail {
  @Input() destination: Destination | null = null;
}