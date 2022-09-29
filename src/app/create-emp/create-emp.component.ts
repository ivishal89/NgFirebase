import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
  empForm: FormGroup;
  constructor(public empService: EmployeeService, public formBuilder: FormBuilder, public router: Router) {
    this.empForm = this.formBuilder.group({
      name:[''],
      email:[''],
      designation:[''],
      salary:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.empService.createEmp(this.empForm.value);
    this.router.navigateByUrl('allEmp');
  }

}
