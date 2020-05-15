import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sujetCtrl = new FormControl();
  page = 1;
  pageSize = 5;
  sujets: string[] = ['Altlassian', 'Node Js', 'Angular'];
  modules: string[] = ['Introduction : Jira Confluence', 'Test unitaire: Padawan tu seras'];
  cards: { sujet: string, module: string, img: string, level: string, description: string }[] = [
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      sujet: 'Jira', module: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/altlassian.png', level: '../../assets/img/level/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.cards.length);
    console.log(this.sujetCtrl.value);
  }

}
