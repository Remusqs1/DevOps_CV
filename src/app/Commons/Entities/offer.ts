import { Campaign } from './campaing';
import { Agreement } from './agreement';
import { Client } from './client';
import { Step } from './step';
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by WebApiProxyGenerator.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

export class Offer {

	public $type: string = "SD.Entities.Offer, SD.Entities";

	public offID: number;

	public sagID: number;

	public campaign: Campaign;

	public agreement: Agreement;

	public client: Client;

	public off_rate: number;

	public off_pre_approved: number;

	public off_available_balance: number;

	public off_quota_value: number;

	public off_risk_level: string;

	public off_term: number;

	public off_voluntaryInsurance: string;

	public off_endorsement: number;

	public off_token: string;

	public off_send_email_status: string;

	public off_open_link_email: number;

	public off_send_sms_status: string;

	public off_open_link_sms: number;

	public off_step: string;

	public step: Step;

	public off_blocked: boolean;

	public off_blocked_detail: string;

	public off_flag_pending_documents: boolean;

	public off_status: string;

	public obl_aval_percentage: number;

	public obl_balance: number;

	public off_fingerprint: string;

	public off_resultValidation: string;

	public off_motiveValidation: string;

	public off_origin: string;

	public edc_total_income: number; 
        
	public edc_deductions: number;

	public supportUpload : number;

    public supports : number;

}