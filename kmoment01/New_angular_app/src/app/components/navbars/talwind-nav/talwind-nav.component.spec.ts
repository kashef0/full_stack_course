import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalwindNavComponent } from './talwind-nav.component';

describe('TalwindNavComponent', () => {
  let component: TalwindNavComponent;
  let fixture: ComponentFixture<TalwindNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalwindNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalwindNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
