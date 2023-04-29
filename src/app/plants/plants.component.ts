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

  constructor(private plantService: PlantsService) { }

  getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      console.log(this.plants);
    })
  }

  ngOnInit() {
    this.getPlants();
  }

}
