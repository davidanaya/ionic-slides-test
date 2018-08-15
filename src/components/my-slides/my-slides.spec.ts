import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, ViewController } from "ionic-angular";
import { MySlidesComponent } from "./my-slides";

describe("MySlidesComponent", () => {
  let component: MySlidesComponent;
  let fixture: ComponentFixture<MySlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(MySlidesComponent)],
      declarations: [MySlidesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySlidesComponent);
    component = fixture.componentInstance;

    component.selectors = [
      {
        title: "Are you a...",
        options: ["una persona no binaria", "una mujer"]
      },
      { title: "How old are you?", options: ["14", "15", "16"] }
    ];
  });

  afterEach(() => {
    fixture.destroy();
    fixture = null;
    component = null;
  });

  it("ensures the component is created", () => {
    expect(component !== null).toBeTruthy();
  });

  test("when click on back on first slide, close the modal", async done => {
    fixture.detectChanges();

    // setTimeout(() => {
    console.log(
      component.slides.length(),
      component.slides.getActiveIndex(),
      component.slides.getPreviousIndex(),
      component.slides.isEnd(),
      component.slides.isBeginning()
    );
    component.back();
    console.log(component.slides.getActiveIndex());
    done();
    // }, 1000);
  });
});
