/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantsComponent } from './plants.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantsService } from './plants.service';
import { Planta } from './plant';


describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantsComponent ],
      providers: [ PlantsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plant = new Planta(
        faker.datatype.number(),
        faker.lorem.words(),
        faker.lorem.words(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr.body-tr> elements', () => {
    expect(debug.queryAll(By.css('tr.body-tr'))).toHaveSize(3)
  });

  it('should have 1 <tr.header-tr> elements', () => {
    expect(debug.queryAll(By.css('tr.header-tr'))).toHaveSize(1)
  });

  it('should have the correct id for the row', () => {
    debug.queryAll(By.css('tr.body-tr td:first-child')).forEach((tr, i)=>{
      expect(tr.nativeElement.textContent).toContain(
        component.plants[i].id)
    })
  });

  it('should have the correct climate for the row', () => {
    debug.queryAll(By.css('tr.body-tr td:nth-child(4)')).forEach((tr, i)=>{
      expect(tr.nativeElement.textContent).toContain(
        component.plants[i].clima)
    })
  });

});
