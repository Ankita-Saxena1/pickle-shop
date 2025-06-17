import { Component, OnInit } from '@angular/core';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/config/firebaseconfig';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.html',
  styleUrls: ['./overview.css'],
  imports: [RouterModule, CommonModule]
})
export class Overview implements OnInit {
  summary: string = '';

  async ngOnInit(){
    const docRef = doc(db, 'about', 'summary');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.summary = docSnap.data().text;
    }
  }
}
