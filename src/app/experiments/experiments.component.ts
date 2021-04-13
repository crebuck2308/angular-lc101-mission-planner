import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: String[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ];

  experimentBeingEdited: String = null;

  constructor() { }

  ngOnInit() {
  }


  add(newExperiment: String){
    if(!this.experiments.includes(newExperiment)){
      this.experiments.push(newExperiment)
    }
  }

  remove(experiment: String){
    let index = this.experiments.indexOf(experiment)
    this.experiments.splice(index, 1)
  }

  edit(experiment: String){
    this.experimentBeingEdited = experiment;
  }

  save(updateExperiment: String, experiment: String){
    let index = this.experiments.indexOf(experiment)
    this.experiments.splice(index, 1, updateExperiment)
    this.experimentBeingEdited = null
  }

}
