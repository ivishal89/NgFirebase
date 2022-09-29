import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  public editForm: FormGroup
  empRef:any;
  constructor(
    public empService: EmployeeService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name:[''],
      email:[''],
      designation:[''],
      salary:['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    console.log(id);
    
    this.empService.getEmpDoc(id).subscribe(res=>{
      console.log(res);
      
      this.empRef = res;
      this.editForm = this.formBuilder.group({
        name:[this.empRef.name],
        email:[this.empRef.email],
        designation:[this.empRef.designation],
        salary:[this.empRef.salary]
      })
    })
  }

  onSubmit(){
    const id=this.act.snapshot.paramMap.get('id');
    this.empService.updateEmp(this.editForm.value, id);
    this.router.navigateByUrl('allEmp');
  }

}
