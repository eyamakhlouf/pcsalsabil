import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
})
export class AddLivreComponent implements OnInit {
  newLivre = new Livre();
  genres!: Genre[];
  newIdGen!: number;
  newGenre!: Genre;

  constructor(private livreService: LivreService, private router: Router) { }
  /* ngOnInit(): void {this.genres=this.livreService.listeGenres();} */
  ngOnInit(): void {

    this.livreService.listeGenres().
      subscribe(gens => {
        this.genres = gens;
        console.log(gens);
      });}
    addLivre()
    {
      this.newLivre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
      this.livreService.ajouterLivre(this.newLivre).subscribe(liv => {
          console.log(liv);
          this.router.navigate(['livres']);
        });
    }
  }