import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-list.html',
  styleUrls: ['./destination-list.scss']
})
export class DestinationList {
  @Input() destinations: Destination[] = [];
  @Input() selectedDestination: Destination | null = null;
  @Output() destinationSelected = new EventEmitter<Destination>();

  selectDestination(destination: Destination): void {
    this.destinationSelected.emit(destination);
  }

  getCrowdingColor(status: string): string {
    switch (status) {
      case 'low': return '#4caf50';
      case 'medium': return '#ff9800';
      case 'high': return '#f44336';
      case 'critical': return '#d32f2f';
      default: return '#666';
    }
  }
}