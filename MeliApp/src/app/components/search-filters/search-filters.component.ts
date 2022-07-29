import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class SearchFiltersComponent implements OnInit {

  constructor() { }

  categories: any[] = [
    {value: 'Vehiculos', viewValue: 'Vehículos'},
    {value: 'Inmuebles', viewValue: 'Inmuebles'},
    {value: 'Supermercado', viewValue: 'Supermercado'},
    {value: 'Tecnología', viewValue: 'Tecnología'},
    {value: 'Hogar y Muebles', viewValue: 'Hogar y Muebles'},
    {value: 'AccesoriosParaVehiculos', viewValue: 'Accesorios para Vehículos'},
    {value: 'Fitness', viewValue: 'Fitness'},
    {value: 'Servicios', viewValue: 'Servicios'}
  ];

  ngOnInit(): void {
  }

}
