import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonSpinner, IonButton } from '@ionic/angular/standalone';
import { DestinationList } from '../destination-list/destination-list';
import { MapView } from '../map-view/map-view';
import { DestinationDetail } from '../destination-detail/destination-detail';
import { Destination } from '../../models/destination';
import { DestinationService } from '../../services/destination';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IonSpinner, IonButton, DestinationList, MapView, DestinationDetail],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: Destination | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private destinationService: DestinationService) {}

  ngOnInit() {
    this.loadDestinations();
  }

  loadDestinations() {
    this.isLoading = true;
    this.error = null;

    console.log('Starting to load destinations...');

    this.destinationService.getDestinations().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.destinations = data;
        this.isLoading = false;

        console.log('Destinations loaded:', this.destinations.length);

        if (this.destinations.length > 0) {
          this.selectedDestination = this.destinations[0];
          console.log('Selected first destination:', this.selectedDestination.name);
        }
      },
      error: (err) => {
        console.error('Error loading destinations:', err);
        this.error = 'Failed to load destinations: ' + err.message;
        this.isLoading = false;
      },
      complete: () => {
        console.log('Destination loading completed');
      },
    });
  }

  onDestinationSelected(destination: Destination) {
    this.selectedDestination = destination;
  }
}
