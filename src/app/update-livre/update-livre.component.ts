import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: []
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  genres! : Genre[];
updatedGenId! : number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
  private livreService: LivreService) { }
  ngOnInit(): void {
    this.livreService.listeGenres().
    subscribe(gens => {this.genres = gens;
    console.log(gens);
    });


    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
    subscribe( liv =>{ this.currentLivre = liv; 
      this.updatedGenId =   this.currentLivre.genre.idGen;
    
    } ) ;
    }
  updateLivre()
  {  this.currentLivre.genre = this.genres.find(gen => gen.idGen == this.updatedGenId)!;
    this.livreService.updateLivre(this.currentLivre).subscribe(LIV => {
 this.router.navigate(['livres']); }
 );
  
  
  
  }}