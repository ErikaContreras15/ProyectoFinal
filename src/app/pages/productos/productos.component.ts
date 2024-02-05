import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements AfterViewInit {


  @ViewChild('owlCarousel') owlCarousel!: ElementRef;


  ngAfterViewInit() {
    $(this.owlCarousel.nativeElement).owlCarousel({
      center: true,
      loop: true,
      nav: true,
      items: 5,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
        0: { items: 2 },
        768: { items: 3 },
        990: { items: 5 }
      },
      onInitialized: this.coverFlowEfx,
      onTranslate: this.coverFlowEfx,
    });

    const click = false;

    $('#play-carousel').click((evt: any) => {
      if (click) {
        $('.status').html('Autoplay: ON');
        $(this.owlCarousel.nativeElement).trigger('play.owl.autoplay', [1000, 1000]);
        $(this).html("Stop");
      } else {
        $(this.owlCarousel.nativeElement).trigger('stop.owl.autoplay');
        $(this).html("Play");
        $('.status').html('Autoplay: OFF');
      }
    });
  }

  coverFlowEfx(e: any) {
    if ($('.owl-dots')) {
      $('.owl-dots').remove();
    }

    const idx = e.item.index;
    $('.owl-item.big').removeClass('big');
    $('.owl-item.medium').removeClass('medium');
    $('.owl-item.mdright').removeClass('mdright');
    $('.owl-item.mdleft').removeClass('mdleft');
    $('.owl-item.smallRight').removeClass('smallRight');
    $('.owl-item.smallLeft').removeClass('smallLeft');

    $('.owl-item').eq(idx - 1).addClass('medium mdleft');
    $('.owl-item').eq(idx).addClass('big');
    $('.owl-item').eq(idx + 1).addClass('medium mdright');
    $('.owl-item').eq(idx + 2).addClass('smallRight');
    $('.owl-item').eq(idx - 2).addClass('smallLeft');
  }

  moveImage(element: HTMLElement) {
    element.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      element.style.transform = 'translateY(0)';
    }, 300);
  }
}




