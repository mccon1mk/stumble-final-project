import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StumbleHomeComponent } from './stumble-home.component';

describe('StumbleHomeComponent', () => {
  let component: StumbleHomeComponent;
  let fixture: ComponentFixture<StumbleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StumbleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StumbleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
