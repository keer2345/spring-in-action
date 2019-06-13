import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'recent-tacos',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
  recentTacos: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/design/recent').subscribe(data => this.recentTacos = data)
  }

}
