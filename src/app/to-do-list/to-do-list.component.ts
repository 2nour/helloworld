import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos = [{
    id: 1,
    titre: 'completer cours angular',
    description: 'lire tt les chapitres du cours',
    dateAjout: '05/07/2018'
  },
  {
    id: 2,
    titre: 'apprendre NodeJs',
    description: 'lire tt les chapitres du framework NodeJs',
    dateAjout: "05/07/2018"
  },
  {
    id: 3,
    titre: 'creer web service avec ExperssJs',
    description: 'lire tt les chapitres du cours',
    dateAjout: "06/07/2019"
  }

  ];
  dones = [
    {
      id: 1,
      titre: "apprendre html css javascript",
      datedeb: "02/02/2020",
      datefin: "05/02/2020"
    },

    {
      id: 2,
      titre: "apprendre BootStrap",
      datedeb: "02/02/2012",
      datefin: "05/02/2015"
    },
    {
      id: 3,
      titre: "creer un projet basique",
      datedeb: "02/02/2019",
      datefin: "05/02/2020"
    }
  ];
  constructor() { }

  ngOnInit() {
    // liaison avec back-end
  }

  delete(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  deletee(done) {
    let index = this.dones.indexOf(done);
    this.dones.splice(index, 1);
  }

  tansfer(todo) {

    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    this.dones.push(todo);
  }
}
