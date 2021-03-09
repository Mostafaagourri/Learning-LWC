/**
 * @description       : 
 * @author            :Agourri Mostafa
 * @group             : 
 * @last modified on  : 03-09-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-09-2021      Initial Version
**/
public with sharing class FetchAccount {
    @AuraEnabled(cacheable = true)
    public static List<Account> FetchAccount(){
           return [SELECT Id,Name,Phone,Type,Industry,Rating,Website FROM Account LIMIT 100];
        }
    }

