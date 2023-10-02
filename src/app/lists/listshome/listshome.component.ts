import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listshome',
  templateUrl: './listshome.component.html',
  styleUrls: ['./listshome.component.css'],
})
export class ListshomeComponent {
  numbers = [
    {
      value: 50,
      label: 'Müşteri',
    },
    {
      value: '3500 TL',
      label: 'Ciro',
    },
    {
      value: 65,
      label: 'Yorumlar',
    },
  ];

  images = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Sifonyer',
      description: 'Basildiğinizda saklanabileceğiniz sifonyer',
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Koltuk',
      description: 'Ergonomik koltuk, dibiniz bizim için kiymetli',
    },
  ];

  constructor() {}

  ngOninit(): void {}
}
