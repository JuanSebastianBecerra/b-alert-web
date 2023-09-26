import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfigurationComponent } from './create-configuration.component';

describe('CreateConfigurationComponent', () => {
  let component: CreateConfigurationComponent;
  let fixture: ComponentFixture<CreateConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateConfigurationComponent]
    });
    fixture = TestBed.createComponent(CreateConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
