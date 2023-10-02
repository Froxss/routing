import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data = [
    {
      name: 'Burak',
      age: 37,
      job: 'Interior Designer',
      employed: 'Hayir',
    },
    {
      name: 'Bilal',
      age: 39,
      job: 'Interior Designer',
      employed: 'Evet',
    },
    {
      name: 'Erdem',
      age: 38,
      job: 'Fullstack Developer',
      employed: 'Evet',
    },
  ];
  headers = [
    {
      key: 'employed',
      label: 'Aldigi ücretten memnun mu?',
    },
    {
      key: 'name',
      label: 'Ad Soyad',
    },
    {
      key: 'age',
      label: 'Yas',
    },
    {
      key: 'job',
      label: 'Meslek',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
