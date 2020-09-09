import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import swal from 'sweetalert2';
import { ImageService } from 'src/app/Services/image.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
  providers: [ImageService],
})
export class ProductoFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;
  @Input() product: Producto;
  @Output() flagToReload = new EventEmitter<boolean>();
  title = "Registro de Producto";

  form: FormGroup;  
  submitted: boolean = false;

  producto : Producto;
  imageUrl = '/assets/img/UploadImage.png';
  fileToUpload: File = null;
  constructor(private productoService : ProductoService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private router: Router,private imageService: ImageService,
    ) { }

  ngOnInit() {
    this.producto = new Producto();
    this.form = this.formBuilder.group({ 
      nombre : ['', Validators.required],
      precio : ['', Validators.required],
      comentario : ['', Validators.required],
      estado : ['', Validators.required],
      fechaelaboracion : [''],
      fechavencimiento : ['']  
    });

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.productoService.retrieve(params['id']).subscribe(
            result => {
              this.producto = result;
              this.title = "Actualizando el registro de " + this.producto.nombre;
            }
          )
        }
      }
    );
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      swal.fire({
        title: 'Error',
        text: 'Error en formulario',
        icon: 'error',
      });
      console.error('Error en formulario');
      return;
    }
    this.imageService
      .postFile(this.producto.nombre, this.fileToUpload)
      .subscribe((data) => {
        this.producto.comentario = data;
        this.productoService.save(this.producto).subscribe((result) => {
          this.submitted = false;
          this.flagToReload.emit(true);
        });
      });


    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto: '+ this.producto.nombre + ' guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  get nombre(){return this.form.get('nombre');}
  get precio(){return this.form.get('precio');}
  get comentario(){return this.form.get('comentario');}

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.imageUrl = '/assets/img/UploadImage.png';
    this.product = new Producto();
  }
  handleFileInput(file: FileList): void {
    this.fileToUpload = file.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

}
