import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fileTypeValidator } from '../../utils';
import { read, utils } from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { DynamicObject } from 'src/app/interface';

@Component({
    selector: 'read-excel',
    templateUrl: './read-excel.component.html',
    styleUrls: ['./read-excel.component.scss'],
})
export class ReadExcelComponent implements OnInit {
    @Input() label: string = '';
    @Input() multiple: boolean = true;
    @Input() parse_column: DynamicObject = {};
    @Input() toReadSingleSheet = false;
    @Output() json_data = new EventEmitter();
    selectedFiles: File[] = [];
    metaData:any=[];
    accept: string =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel';

    constructor(private toaster: ToastrService) {}

    ngOnInit(): void {}

    parseColumnName(data: Array<any>) {
        const IsNeededToParseColumn =
            Object.keys(this.parse_column).length !== 0;
        if (!IsNeededToParseColumn) return data;
        return data.map((data,index) => {
            const formated_data = {};
            for (const key in this.parse_column) {
                const alise_name = this.parse_column[key];
                formated_data[alise_name] =
                    data[key] || (data[key] == false ? data[key] : null);
                    if(index === 0){
                    const required= key.includes("*") ? true:false;
                      this.metaData.push({msg:`Please fill ${key}`,label:alise_name,required:required})
                    }
            }
            return formated_data;
        });
    }

    readFile(files: FileList) {
        this.selectedFiles = Array.from(files);
        const file = files.item(0);
        if (file) {
            if (fileTypeValidator(file, this.accept)) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const data = reader.result;
                    const workBook = read(data, {
                        type: 'binary',
                        cellDates: true,
                    });
                    let jsonData;
                    if (!this.toReadSingleSheet) {
                        jsonData = workBook.SheetNames.reduce(
                            (initial: Array<any>, name: string) => {
                                const sheet = workBook.Sheets[name];
                                const data = utils.sheet_to_json(sheet);
                                if (data)
                                    initial.push(...this.parseColumnName(data));
                                return initial;
                            },
                            []
                        );
                    } else {
                        const sheetName = workBook.SheetNames[0];
                        const sheet = workBook.Sheets[sheetName];
                        const data = utils.sheet_to_json(sheet);
                        if (data) jsonData = this.parseColumnName(data);
                    }
                    
                    this.json_data.emit({jsonData,meta:this.metaData});
                };
                reader.readAsArrayBuffer(file);
            } else {
                this.toaster.warning('Please choose excel file');
            }
        }
    }

    removeFile(fileIndex: number) {
        this.selectedFiles.splice(fileIndex);
        this.json_data.emit([]);
    }

    
    
}
