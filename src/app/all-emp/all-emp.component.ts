import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit {
  employees!: Employee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(res=>{
      this.employees = res.map(e=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{} } as Employee;
        })
      });
  }

  removeEmp(Employee: Employee){
    if(confirm('Are you sure you want to delete '+ Employee.name)){
      this.empService.deleteEmp(Employee);
    }
  }

}
