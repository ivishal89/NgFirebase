import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Employee} from "./employee.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private angularFirestore: AngularFirestore) { }

  getEmpDoc(id){
    return this.angularFirestore.collection("employee-collection").doc(id).valueChanges()
  }

  getEmpList(){
    return this.angularFirestore.collection("employee-collection").snapshotChanges()
  }

  createEmp(employee: Employee){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore.collection("employee-collection").add(employee).then(response=>{
        console.log(response)},error=> reject(error));
    });
  }

  deleteEmp(employee: Employee){
    return this.angularFirestore.collection("employee-collection").doc(employee.id).delete();
  }

  updateEmp(emp: Employee, id){
    return this.angularFirestore.collection("employee-collection").doc(id).update({
        name:emp.name,
        email:emp.email,
        designation: emp.designation,
        salary: emp.salary
    });
  }
}
