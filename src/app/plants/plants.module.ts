import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantsComponent],
  exports: [PlantsComponent]
})
export class PlantsModule { }
