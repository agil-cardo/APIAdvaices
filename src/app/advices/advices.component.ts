import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.scss']
})
export class AdvicesComponent implements OnInit {

  slip: string = ""
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.newAdvice();
  }
    newAdvice() {
      // const id = Math.floor(Math.random() * 220);
    this.api.getAdvice().pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      console.log(data);
      this.slip = data.slip.advice;
    })
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
