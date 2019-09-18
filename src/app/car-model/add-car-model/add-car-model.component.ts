import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CarModelService } from './car-model.service';
import { ManufacturerService } from '../../core/manufacturer.service';

@Component({
  selector: 'app-add-car-model',
  templateUrl: './add-car-model.component.html',
  styleUrls: ['./add-car-model.component.scss']
})
export class AddCarModelComponent implements OnInit {

  public manufacturers: Array<any>;
  public carModelForm: FormGroup;

  constructor(private fb: FormBuilder,
              private carModelService: CarModelService,
              private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.createForm();
    this.manufacturerService.getAll().subscribe((res: any) => {
      this.manufacturers = res.map((i: any) => {
        return {id: i.id, name: i.name};
      });
    });
  }

  public clear() {
    this.carModelForm.reset();
  }

  private createForm() {
    this.carModelForm = this.fb.group({
      manufacturerId: ['', Validators.required],
      model: ['', Validators.required],
      modelYear: ['', Validators.required],
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.carModelForm.valid) {
      this.carModelService.saveCarModel(this.carModelForm.value).subscribe(res => {
        formDirective.resetForm();
        this.carModelForm.reset();
      });
    }
  }

  get manufacturerId() { return this.carModelForm.get('manufacturerId'); }
  get model() { return this.carModelForm.get('model'); }
  get modelYear() { return this.carModelForm.get('modelYear'); }

}
