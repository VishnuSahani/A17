import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

  constructor(){}

  isSideBarOpen:boolean = true;

  cardList:any=[
    {name:"card 10"},
    {name:"card 11"},
    {name:"card 12"},
    {name:"card 13"},
    {name:"card 14"},
    {name:"card 15"},
    {name:"card 16"},
    {name:"card 17"},
    {name:"card 18"},
    {name:"card 19"},
  ]

  sideBarControl():void{
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
