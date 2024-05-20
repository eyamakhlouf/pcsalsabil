import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class LivreService {
  apiURL: string = 'http://localhost:8080/livres/api';
  livres: Livre[]; //un tableau de Produit
  //genres:Genre[];
  //livre! : Livre;
  constructor(private http : HttpClient) {
  /*   this.genres = [ {idGen : 1, nomGen : "Horreur"},
{idGen : 2, nomGen : "Romantique"}];  */
    this.livres = [
      { idLivre: 1, titreLivre: "Les Miserables", auteur: "Victor Hugo", prixLivre: 30.600, datePublication: new Date("01/04/2011"),genre : {idGen : 1, nomGen : "Horreur"} },
      { idLivre: 2, titreLivre: "Causette", auteur: "Victor Hugo", prixLivre: 40.200, datePublication: new Date("12/12/2016"),genre : {idGen : 2, nomGen : "Romantique"} },
      { idLivre: 3, titreLivre: "Atomic Habits", auteur: "James", prixLivre: 22, datePublication: new Date("05/07/2022"),genre : {idGen : 1, nomGen : "Horreur"} }
    ];

  }
  listeLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    }

    ajouterLivre(liv: Livre):Observable<Livre>{
      return this.http.post<Livre>(this.apiURL, liv, httpOptions);
      }

      supprimerLivre(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterLivre(id: number): Observable<Livre> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Livre>(url);
          }

          trierLivres(){
            this.livres = this.livres.sort((n1,n2) => {
              if (n1.idLivre! > n2.idLivre!) {
                  return 1;
              }
             if (n1.idLivre! < n2.idLivre!) {
                  return -1;
              }
            return 0;
          });
          }
      

          updateLivre(liv :Livre) : Observable<Livre>
            {
                return this.http.put<Livre>(this.apiURL, liv, httpOptions);
            }

         
          listeGenres():Observable<Genre[]>{
            return this.http.get<Genre[]>(this.apiURL+"/gen");
            }

      /*   consulterCategorie(id:number): Categorie{
            return this.categories.find(cat => cat.idCat == id)!;
            } */
        
  /* listeLivres(): Livre[] {
    return this.livres;
  }
   
  listeGenres():Genre[] {
    return this.genres;
    }
    
  ajouterLivre(liv: Livre) {
    this.livres.push(liv);
  }

  supprimerLivre(liv: Livre) {
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
      this.livres.splice(index, 1);
    }
  }

  consulterLivre(id: number): Livre {
    return this.livres.find(l => l.idLivre == id)!;

  }
  consulterGenre(id:number): Genre{
    return this.genres.find(gen => gen.idGen == id)!;
    }
  trierLivres() {
    this.livres = this.livres.sort((n1, n2) => {
      if (n1.idLivre! > n2.idLivre!) {
        return 1;
      }
      if (n1.idLivre! < n2.idLivre!) {
        return -1;
      }
      return 0;
    });
  }
  updateLivre(l: Livre) {
    // console.log(p);
    this.supprimerLivre(l);
    this.ajouterLivre(l);
    this.trierLivres();
  } */
}       