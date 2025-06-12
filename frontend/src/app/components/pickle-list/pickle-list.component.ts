import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pickle-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pickle-list.component.html',
  styleUrls: ['./pickle-list.component.css']
})
export class PickleListComponent implements OnInit {
  pickles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPickles();
  }

  fetchPickles(): void {
    this.http.get<any[]>('http://localhost:8080/api/pickles')
      .subscribe(data => {
        this.pickles = data;
      });
  }
}