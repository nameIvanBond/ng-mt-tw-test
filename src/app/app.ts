import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {AppTextInfoComponent} from '../component/app.text-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, AppTextInfoComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = 'testOne';
}
