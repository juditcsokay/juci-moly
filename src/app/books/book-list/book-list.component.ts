import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book(
      1,
      404174,
      'Érkezés és más történetek',
      ['Ted Chiang'],
      'https://moly.hu/system/covers/big/covers_539805.jpg?1552389425',
      'Az Oscar-díjas film alapjául szolgáló novella és további hét történet.',
      2002
    ),
    new Book(
      2,
      129443,
      'Smaragdzöld',
      ['Kerstin Gier'],
      'https://moly.hu/system/covers/normal/covers_220510.jpg',
      'Mit tesz az, akinek összetörték a szívét? Úgy van. Telefonál a legjobb barátnőjével, csokoládét majszol és hetekig dagonyázik a boldogtalanságban.',
      2010
    ),
    new Book(
      3,
      70501,
      'The Dark Divine - Fekete bárány',
      ['Bree DeSpain'],
      'https://moly.hu/system/covers/normal/covers_199057.jpg',
      'Tékozló fiú\r\nVeszélyes szerelem\r\nHalálos titok\r\nGrace Divine - a helyi lelkész lánya - mindig is tudta, hogy valami rettenetes történt azon az éjszakán, mikor Daniel Kalbi eltűnt, bátyja, Jude pedig vérbe fagyva tért haza.',
      2009
    ),
    new Book(
      4,
      7668,
      'Harry Potter és a Tűz Serlege',
      ['J. K. Rowling'],
      'https://moly.hu/system/covers/big/covers_414167.jpg?1476198349',
      'Attól ​fogva, hogy a Kviddics Világkupa döntője után felizzik az égen a Sötét Jegy, Harry Potter minden lépését veszély kíséri. A negyedik tanév elején a Tűz Serlege őt választja ki a Roxfort képviseletére a legendás Trimágus Tusán.',
      2000
    ),
    new Book(
      5,
      172306,
      'Leviatán ébredése',
      ['James S. A. Corey'],
      'https://moly.hu/system/covers/normal/covers_249938.jpg',
      'Az ​emberiség már meghódította a naprendszert – eljutott a Marsra, a Holdra, a Kisbolygóövbe és még távolabbra –, a csillagok viszont továbbra is elérhetetlenek.',
      2011
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
