// text.component.ts
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-text-info',
  standalone: true,
  imports: [MatButtonModule],
  template: `
  <div class="flex flex-row justify-between items-center">
    <div class="basis-[50%] ">
      <h2>
        @if (headerWhite) {
          <span class="hG_white">{{ headerWhite }}</span>
        }
        @if (headerBlue) {
          <span class="hG_blue">{{ headerBlue }}</span>
        }
      </h2>
      <ng-content></ng-content>
      <a matButton="filled"  class="" href="" target="_blank">Contact Us</a>
    </div>
    <div class="basis-[30%]">
      <picture class="obj_fit">
        <source type="image/webp" srcset="/{{img}}.webp 1x, /{{img}}@2x.webp 2x ">
        <img width="580" height="432" src="/{{img}}.jpg" srcset="/{{img}}.jpg 1x, /{{img}}@2x.jpg 2x" alt="{{ headerWhite || headerBlue }}" loading="lazy" decoding="async">
      </picture>
    </div>
  </div>
  `,
  styles: [`
    .obj_fit{
      height: 100%;
      display: block;
      img{
        max-width: 632px;
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 12px;
        transition: transform .6s ease,filter .6s ease;
      }
    }

  `]
})
export class AppTextInfoComponent {
  @Input() img = '';
  @Input() headerWhite?: string;
  @Input() headerBlue?: string;
}
