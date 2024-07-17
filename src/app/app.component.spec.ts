import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
=======
      imports: [AppComponent],
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'PokerPlanningFrontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PokerPlanningFrontend');
=======
  it(`should have the 'PokerPlanningFront' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PokerPlanningFront');
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, PokerPlanningFrontend');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, PokerPlanningFront');
>>>>>>> 6caf25979ace09fda2b625cc85bb5fe55e0ed2c9
  });
});
