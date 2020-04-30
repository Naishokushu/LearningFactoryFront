import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sujets: string[] = ['Altlassian', 'Node Js', 'Angular'];
  modules: string[] = ['Introduction : Jira Confluence', 'Test unitaire: Padawan tu seras'];
  constructor() { }

  ngOnInit() {
  }

}
