import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-view.html',
  styleUrls: ['./map-view.scss'],
})
export class MapView {
  @Input() destinations: Destination[] = [];
  @Input() selectedDestination: Destination | null = null;
  @Output() destinationSelected = new EventEmitter<Destination>();

  getMarkerX(index: number): number {
    const positions = [
      60, // Laboe Beach (left)
      120, // Holstenstraße (center-right)
      90, // St. Peter-Ording (center)
      140, // Wunderino Arena (far right)
      100, // Kieler Schloss (center)
      80, // Kieler Woche (center-left)
      70, // Botanischer Garten (left)
      110, // Hauptbahnhof (center-right)
      65, // Schrevenpark (left)
      130, // Ostseehalle (right)
    ];
    return positions[index] || 50 + (index % 8) * 20;
  }

  getMarkerY(index: number): number {
    const positions = [
      50, // Laboe Beach (top)
      70, // Holstenstraße (middle-top)
      90, // St. Peter-Ording (middle)
      60, // Wunderino Arena (top-middle)
      80, // Kieler Schloss (middle)
      40, // Kieler Woche (top)
      100, // Botanischer Garten (bottom)
      85, // Hauptbahnhof (middle-bottom)
      95, // Schrevenpark (bottom)
      75, // Ostseehalle (middle)
    ];
    return positions[index] || 40 + Math.floor(index / 5) * 30;
  }
}
