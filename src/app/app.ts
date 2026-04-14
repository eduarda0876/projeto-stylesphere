import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Carrossel } from './carrossel/carrossel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Carrossel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-stylesphere');
}