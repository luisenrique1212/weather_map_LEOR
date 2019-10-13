import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { FormControl } from "@angular/forms";
import { GoogleMap } from '@agm/core/services/google-maps-types';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public searchControl: FormControl;
  lat = 21.874;
  lng = -102.3036;
  zoom = 13;

  @ViewChild('search',{static: false})
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    
    //create search FormControl
    this.searchControl = new FormControl();
      
    //set current position
    this.setCurrentPosition();
  
  
  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {types: ["(cities)"]});
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
      });
    });
  });
    }
    
  private setCurrentPosition() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 8;
    });
  }
  }
  
    mapClicked($event: MouseEvent) {
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng;
    }
  
  }
  