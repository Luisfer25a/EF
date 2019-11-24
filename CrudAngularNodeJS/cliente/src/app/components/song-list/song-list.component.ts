import { Component, OnInit } from '@angular/core';

import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  
  songs:any =  [];

  constructor(private songsService:SongsService) {  }

  ngOnInit() {
    this.songsService.getSongs().subscribe(
      res=> {
        this.songs = res;
      },
      err=> console.error(err),
    )
  }

  deleteSong(id: string){

    this.songsService.deleteSong(id).subscribe(
      res=>{
        console.log(res);
      },
      err=> console.error(err),
    )

  }

}
