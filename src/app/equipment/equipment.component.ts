import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: String[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ];

  itemBeingEdited: String = null;


  constructor() { }

  ngOnInit() {
  }


  add(item: String){
    if(!this.equipment.includes(item)){
      this.equipment.push(item)
    }
  };

  remove(item: String){
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1)
  };

  edit(item: String) {
    this.itemBeingEdited = item;
  }

  save(updateItem: String, item: String) {
    let index = this.equipment.indexOf(item)
    this.equipment.splice(index, 1, updateItem)
    this.itemBeingEdited = null;
  }

}
