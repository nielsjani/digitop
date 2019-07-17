import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss']
})
export class GameOverviewComponent implements OnInit {

  games = [
    {id: 1, name: 'Spookuur', new: true},
    {id: 2, name: 'Spookuur'},
    {id: 3, name: 'Spookuur'},
    {id: 4, name: 'Spookuur'},
    {id: 5, name: 'Spookuur'},
    {id: 6, name: 'Spookuur', new: true},
    {id: 7, name: 'Spookuur'},
    {id: 8, name: 'Spookuur'},
    {id: 9, name: 'Spookuur'},
    {id: 10, name: 'Spookuur'},
    {id: 11, name: 'Spookuur'}
  ];
  private currentHovering: any;

  constructor() {
  }

  ngOnInit() {
  }

  hoveringOver(game) {
    return this.currentHovering && game.id === this.currentHovering.id;
  }

  setHovering(game) {
    this.currentHovering = game;
  }
}
