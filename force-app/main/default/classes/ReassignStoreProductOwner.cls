/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-10-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public class ReassignStoreProductOwner
{

 

@InvocableMethod(label='Reassign store product')
public static void SetQ(List<Id> ListID)
{

 

List<AccountTeamMember> STeamList=[select Id, RetailStore__c, Country__c, Appellation__c,
UserId, AccountId from AccountTeamMember
where RetailStore__c in :ListID
order by Priority__c desc];
List<StoreProduct> StoreProductList = new List<StoreProduct>();
for (AccountTeamMember ST: STeamList)
{ if(ST != null ){
List<StoreProduct> StPrd =[ SELECT Id, ownerid, RetailStoreId, product.Categorie__c, product.Appellation__c, Product.Country__c
from StoreProduct where RetailStoreId = : ST.RetailStore__c
];
for (StoreProduct SP : StPrd)
{
StoreProduct StPOUpdate = new StoreProduct();
if(SP != null ){
StPOUpdate.Id = SP.Id;
if (ST.Category_FDV__c != NULL && ST.Category_FDV__c != '' && ST.Category_FDV__c == SP.product.Categorie__c) {
StPOUpdate.Ownerid = ST.Userid;
} else { if (ST.Appellation__c != NULL && ST.Appellation__c != '' && ST.Appellation__c == SP.product.Appellation__c) {
StPOUpdate.Ownerid = ST.Userid;
} else {
StPOUpdate.Ownerid = ST.Userid;
}
}
}
StoreProductList.add(StPOUpdate);
}
Update StoreProductList;
}
}
}
}