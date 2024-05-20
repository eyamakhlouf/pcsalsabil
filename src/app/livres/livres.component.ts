import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {
  livres?: Livre[];
  constructor(private livreService: LivreService) {
    //this.livres = livreService.listeLivres();
  }
  ngOnInit(): void {
    //this.livres = this.livreService.listeLivres();
    this.chargerLivres();
  }
  
  chargerLivres(){
    this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
  }
  supprimerLivre(l: Livre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.livreService.supprimerLivre(l.idLivre!).subscribe(() => {
        console.log("livre supprimé");
        this.chargerLivres();     
      
});
  }
}