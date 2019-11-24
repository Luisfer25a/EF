import { Component, OnInit, HostBinding } from '@angular/core';
import { Cancion } from '../../models/Cancion';

import { SongsService } from '../../services/songs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  cancion: any = {
    id:'',
    nombre: '',
    artista: '',
    album: '',
    genero: '',
    duracion: ''
  };

  edit:boolean = false;

  constructor(private songsService: SongsService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.songsService.getSong(params.id).subscribe(
        res=>{
          console.log(res);
          this.cancion = res;
          this.edit = true;
        },
        err=> console.error(err)
      )
    }
  }

  saveNewSong(){

    delete this.cancion._id;
    this.songsService.saveSong(this.cancion).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/songs']);
        },
        err=> console.error(err),
    )   
  }

  updateSong(){
    let idsong = this.cancion._id;
    delete this.cancion._id;
    this.songsService.updateGame(idsong, this.cancion).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/songs']);
      },
      err=>console.error(err)
    )
  }



}
