export interface Coordinates {
  lat: number;
  lng: number;
}

export interface DataPoint {
  hour: string;
  visitors?: number;
  predictedVisitors?: number;
}

export interface Destination {
  id: number;
  name: string;
  type: string;
  coordinates: Coordinates;
  currentVisitorCount: number;
  capacity: number;
  crowdingStatus: 'low' | 'medium' | 'high' | 'critical';
  forecast: DataPoint[];
  historical: DataPoint[];
}
