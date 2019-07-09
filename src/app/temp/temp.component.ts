import { PolicyService } from '../Policyservice';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  policies: any[] =[];
  constructor(private policyService: PolicyService) { }

  public deletePolicy(policyId){
    this.policyService.deletePolicy(policyId).subscribe((ret)=>{
          console.log("Policy deleted: ", ret);
    })
}


public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
    let newPolicy: {id: number, amount: number, clientId: number, userId: number, description: string} = {id: policy.id, amount: 0,clientId: 0,userId: 0, description:' '};
    this.policyService.updatePolicy(policy).subscribe((ret)=> {
          console.log('Policy updated: ', ret);
    });
}

  ngOnInit() {
    this.policyService.getPolicies().subscribe(( data : any[]) =>{
      console.log(data);
      this.policies = data;
    });
  }

}
