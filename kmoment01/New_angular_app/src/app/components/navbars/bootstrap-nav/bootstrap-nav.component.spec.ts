import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNavComponent } from './bootstrap-nav.component';

describe('BootstrapNavComponent', () => {
  let component: BootstrapNavComponent;
  let fixture: ComponentFixture<BootstrapNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
