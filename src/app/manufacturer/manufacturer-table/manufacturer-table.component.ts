import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/core/manufacturer.service';

@Component({
    selector: 'manufacturer-table',
    templateUrl: './manufacturer-table.template.html',
    styleUrls: ['./manufacturer-table.scss'],
})
export class ManufacturerTableComponent implements OnInit {

    public dataSource: Array<any>;
    public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    constructor(private manufacturerService: ManufacturerService) {}

    ngOnInit() {
        this.manufacturerService.getAll().subscribe((data: Array<any>) => {
           this.dataSource = data.map(d => {
               return d;
           });
        });
    }

}