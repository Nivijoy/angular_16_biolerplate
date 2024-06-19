import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss'],
})
export class FileDropComponent implements OnInit {
  @Input() label: string = '';
  @Output() fileDropped = new EventEmitter<File[]>();
  @Input() multiple: boolean = true;
  selectedFiles: File[] = [];
  
  constructor(
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  bindFile(files: FileList) {
    const selectedFiles = Array.from(files);
    if (!this.multiple && selectedFiles.length > 1) {
      this.toaster.warning('Only one file can be choosen');
    } else {
      this.selectedFiles = this.multiple
      ? [...this.selectedFiles, ...selectedFiles]
      : selectedFiles;
      this.fileDropped.emit(this.selectedFiles);
    }
  }

  removeFile(fileIndex: number) {
    this.selectedFiles.splice(fileIndex, 1);
    this.fileDropped.emit(this.selectedFiles);
  }
}
