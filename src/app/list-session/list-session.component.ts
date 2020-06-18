import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss'],
})
export class ListSessionComponent implements OnInit {
  page = 1;
  pageSize = 5;
  public DateFin = new Date();
  date_debut = new FormControl(new Date());
  date_fin = new FormControl(new Date(this.DateFin.setDate((new Date()).getDate() + 50)));
  module: { titre: string, img: string, duration: number, levelTitle: string, level: string, description: string } = {
    titre: 'Introduction : Jira Confluence', img: '../../assets/img/sujet/atlassianBlanc_1.png', duration: 4, levelTitle: 'Facile', level: '../../assets/img/level/white/18w/facile.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  };
  cards: { date: string, sachant: string, lieu: string, description: string, }[] = [
    {
      date: "2020-06-30 09:00:00", sachant: "Antoine Dugué", lieu: "Aix-en-Provence", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }, {
      date: "2020-06-30 10:00:00", sachant: "Antoine Dugué", lieu: "Aix-en-Provence", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      date: "2020-07-14 10:00:00", sachant: "Antoine Dugué", lieu: "Aix-en-Provence", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      date: "2020-08-24 10:00:00", sachant: "Antoine Dugué", lieu: "Aix-en-Provence", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      date: "2020-09-15 10:00:00", sachant: "Antoine Dugué", lieu: "Aix-en-Provence", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr');
  }

  ngOnInit() {
    console.log('Ceci est la date de fin:', this.date_fin.value);
  }

}
