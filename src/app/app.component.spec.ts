import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  component = new AppComponent();

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AwesomeTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AwesomeTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AwesomeTest app is running!');
  });

  it('variable title must be equal to project name', () => {
    let myVariable : string = component.title;
    expect(myVariable).toEqual('AwesomeTest');
  });

  it('variable status must be boolean and have a false value', () => {
    let myStatus : boolean = component.status;
    expect(myStatus).toBeFalsy();
  });

  it('should multiply 2 numbers and get 143 as result', () => {
    let a : number = 11;
    let b : number = 13;
    let result : number = a * b;
    expect(component.multiply(a ,b)).toBe(result);
  });

  it('method multiply should be called', () => {
    let calledMethod = spyOn(component, 'multiply');
    component.multiply(3,4);
    expect(calledMethod).toHaveBeenCalled();
  });

});
