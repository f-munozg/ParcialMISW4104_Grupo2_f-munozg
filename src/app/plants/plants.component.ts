import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';
import { Planta } from './plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants: Array<Planta> = [];
  interiorPlants: number = 0;
  exteriorPlants: number = 0;
  constructor(private plantService: PlantsService) { }

  getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.interiorPlants = this.plants.filter((plant) => plant.tipo === "Interior").length;
      this.exteriorPlants = this.plants.filter((plant) => plant.tipo === "Exterior").length;
    })
  }

  ngOnInit() {
    this.getPlants();
  }

}
