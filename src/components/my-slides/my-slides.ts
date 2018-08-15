import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { Slides } from "ionic-angular";

@Component({
  selector: "my-slides",
  templateUrl: "my-slides.html"
})
export class MySlidesComponent implements AfterViewInit {
  @ViewChild(Slides)
  slides: Slides | undefined;

  @Input()
  selectors: any[];
  @Output()
  answer = new EventEmitter<string[]>();

  private answers: string[] = [];

  constructor() {}

  ngAfterViewInit() {
    this.slides!.onlyExternal = true;
  }

  onSelect(selected: any) {
    this.answers[this.slides!.getActiveIndex()] = selected;
    this.slides!.isEnd() ? this.close() : this.slides!.slideNext();
  }

  back() {
    this.slides!.isBeginning() ? this.close() : this.slides!.slidePrev();
  }

  close() {
    this.answer.emit(this.answers);
  }
}
