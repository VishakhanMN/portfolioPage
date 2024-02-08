import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
export interface ModalData {
  name: string;
  color: string;
}
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css'],
})
export class MyModalComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef | any;
  constructor() { }
  ngOnInit(): void {
  }
  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }

}