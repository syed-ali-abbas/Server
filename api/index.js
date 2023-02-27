const app = require('express')();
const url = require('url');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.post('/api/graphql', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   var value = url.parse(req.url,true).query.op;
//   console.log(req.body);
//   if(value=="userLocale")
//   {
//     return res.end(`{"data":{"bootstrap":{"currentUser":{"id":"14093","locale":"en_US","__typename":"UserDTO"},"__typename":"Bootstrap"}}}`);
//   }
//   else if(value=="minifiedInitMetadata"){
//     if((!req.body.query)){
//         return res.end(`{"data":{"minifiedInitMetadata":{"sprat":"elZCU1JZZmdGWUJWamRqYzNITEN1","allowedCrossOriginDomains":null,"userContext":{"clientId":3334,"dynamicProperties":{"SELF_SERVE_CARE_PAYMENTS_ENABLED":false,"GMAIL_OAUTH_ENABLED":false,"VIDEO_CHAT_ENABLED":false,"SPRINKLR_VOICE_CHANNEL_ENABLED":false,"SELF_SERVE_PARTNER_EXPIRY_DISABLED":false,"SLACK_CHANNEL_ENABLED":true,"OUTLOOK_OAUTH_ENABLED":true},"partnerId":31040,"userId":14093},"__typename":"InitMetadata"}}}`);
//     }
//     else{
//         return res.end(`{"data":{"minifiedInitMetadata":{"sprat":"elZCU1JZZmdGWUJWamRqYzNITEN1","__typename":"InitMetadata"}}}`);
//     }
//   }
//   else if(value=="bootstrap"){
//     return res.end(`{"data":{"bootstrap":{"currentUser":{"id":"14093","authProvider":"google","countryCode":null,"sprUserId":"14093","clientId":3334,"partnerId":31040,"firstName":"Yldrm","lastName":"Hacker","fullName":"Yldrm Hacker","emailAddress":"02-131192-044@student.bahria.edu.pk","corporateEmailAddress":"02-131192-044@student.bahria.edu.pk","emailDigestSubscription":true,"jobRole":null,"jobRoleDisplayName":null,"department":null,"departmentDisplayName":null,"firstLoginTime":1670169971008,"lastLoginTime":1670170545110,"locale":"en_US","loginType":"SSO","premiumSubscription":false,"displayImageUrl":"https://lh3.googleusercontent.com/a/ALm5wu16bR-txcjLID-UKWbkmVsu7dte4HhZoBoGafx-=s96-c","role":"OWNER","signatureConfiguration":null,"brand":null,"sprUser":{"id":"14093","userId":14093,"availabilityStatus":"Available","firstName":"Yldrm","lastName":"Hacker","profileImageUrl":"https://lh3.googleusercontent.com/a/ALm5wu16bR-txcjLID-UKWbkmVsu7dte4HhZoBoGafx-=s96-c","visibleId":"Yldrm Hacker","roleMapping":{"id":"638cc57187b63b67ea5e4511","contextualRoles":[],"globalRoleIds":[],"__typename":"UserRoleMapping"},"locale":"en_US","__typename":"User"},"__typename":"UserDTO"},"currentWorkspace":{"clientName":"Bahria's Team","clientId":3334,"imageUrl":null,"firstName":null,"lastName":null,"createdTime":"2022-12-04 16:06:06","createdTimeEpoch":1670169966000,"id":"638cc56e87b63b67ea5e44a3","industry":null,"additional":{"instagramSupport":"true","conversations.channels.sms.enabled":"true","weChatEnabled":"true","whatsappEnabled":"true","appleBusinessChatEnabled":"true","emailEnabled":"true","viberEnabled":"true"},"workspaceStatus":"PREMIUM_TRIAL","ownerUserForClient":{"id":"14093","profileImageUrl":"https://lh3.googleusercontent.com/a/ALm5wu16bR-txcjLID-UKWbkmVsu7dte4HhZoBoGafx-=s96-c","name":"Yldrm Hacker","emailAddress":"02-131192-044@student.bahria.edu.pk","clientId":3334,"brand":null,"__typename":"User"},"__typename":"ClientDTO"},"partnerWorkspaces":[{"partnerId":31040,"partnerName":"bahria","__typename":"PartnerMinified"}],"__typename":"Bootstrap"}}}`);
//   }
//   else if(value=="userPermissions"){
//     return res.end(`{"data":{"userPermissions":{"INTEGRATIONS_MARKETPLACE":["MANAGE","INSTALL","VIEW"],"FOLDER":["CREATE","EDIT","DELETE"],"PUBLISHING_QUEUE":["ENABLE","VIEW","EDIT"],"MEDIA_ASSET":["VIEW","CREATE","IMAGE_EDITING_CROP","IMAGE_EDITING_ADD_SHAPE","MANAGE_VIEWS","IMAGE_EDITING_ADJUST","EDIT","IMAGE_EDITING_COLLAGE","IMAGE_EDITING_OVERLAY_TEXT","IMAGE_EDITING_OVERLAY_IMAGE"],"CAMPAIGN":["VIEW","CREATE","EDIT","CAMPAIGN_DELETE","DELETE"],"SMART_TRENDS_DASHBOARDS":["VIEW"],"CUSTOM_APPS":["VIEW","CREATE","EDIT"],"ROLES":["VIEW","CREATE","EDIT","DELETE"],"ACCOUNT_GROUP":["MANAGE","VIEW","DELETE"],"BUSINESS_HOURS":["VIEW","CREATE","EDIT","DELETE"],"PUBLISHER_SETTINGS":["VIEW","EDIT"],"APPROVAL_PATH":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"RULE_ENGINE":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"CUSTOM_FIELD":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"EXPLORER_DASHBOARDS":["VIEW","CREATE","DELETE"],"SECURITY_AND_PERSONALISATION_SETTINGS":["VIEW","EDIT"],"PLANNER":["VIEW","MANAGE_VIEWS"],"MESSAGE_INBOX":["VIEW","MANAGE_VIEWS"],"TASK":["CLONE","VIEW","ADMIN","CREATE","EDIT","VIEW_DETAILED","DELETE"],"ENGAGEMENT":["REOPEN_TOPIC","MARK_PRIVATE","LIKE","FAVOURITE","FLAG","APPROVE","ARCHIVE","REPLY","MODERATION_STATUS","RETIRE","HIDE","LOCK","REPOST","BLOCK","REMOVE_RATING","SHARE","DELETE","FOLLOW"],"CLIENT":["VIEW","CREATE","EDIT","DELETE"],"MACRO":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"USER_GROUP":["MANAGE","VIEW"],"USER":["VIEW_SECURITY_SETTINGS","UNLOCK_USER","VIEW","CREATE","ACTIVATE","MANAGE_SIGNATURES","EDIT","DELETE"],"UNIVERSAL_COMPANY":["VIEW","CREATE","EDIT","DELETE"],"ACCOUNT":["VIEW","CREATE","EDIT","SHARE","DEFAULT_MESSAGE_CHARACTER_LIMIT","EDIT_CHANNEL_PROPERTY","DELETE"],"OUTBOUND_MESSAGE":["CREATE_POST","VIEW","APPROVE_REJECT","PUBLISH","EDIT","EDIT_AND_APPROVE","EDIT_SENT_POST","CREATE_DRAFT","DELETE"],"DEEP_INSIGHTS":["VIEW","CREATE","DELETE"],"UNIVERSAL_TAG":["VIEW","CREATE","EDIT","DELETE"],"REPORTING_DASHBOARDS":["VIEW","CREATE","SAVE"],"CONTENT_BRIEF":["CREATE","EDIT"],"LISTENING_SETTINGS":["VIEW","EDIT_GROUP","EDIT_TOPIC","CREATE_TOPIC","CREATE_GROUP"],"EVENT":["CREATE","EDIT"]}}}`);
//   }
//   else if(value=="connectionDetails"){
//     return res.end(`{"data":{"connectionDetails":[]}}`);
//   }
//   else if(value=="getUserPreference"){
//     return res.end(`{"data":{"getUserPreference":[{"preferences":{"lastAccessedProduct":["SELF_SERVE_CARE"]},"id":"USER3334_14093lastAccessedProduct","key":"lastAccessedProduct","scope":"USER","__typename":"UserPreferenceDetail"}]}}`);
//   }

  
  
// });

app.post('/api/v1/*', (req, res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.headers));
  return res.end('{}')
});

app.get('/api/v1/*', (req, res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.headers));
  return res.end('{}')
});

app.post('/api/graphql', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  var value = req.body.operationName;
  console.log(req.body);
  if(value=="userLocale")
  {
    return res.end(`{"data":{"bootstrap":{"currentUser":{"id":"14099","locale":"en_US","__typename":"UserDTO"},"__typename":"Bootstrap"}}}`);
  }
  else if(value=="minifiedInitMetadata"){
    if((!req.body.query)){
        return res.end(`{"data":{"minifiedInitMetadata":{"sprat":"WG02UkJETDNtU2xNRXlFVDh5bEEy","allowedCrossOriginDomains":null,"userContext":{"clientId":3334,"dynamicProperties":{"SELF_SERVE_CARE_PAYMENTS_ENABLED":false,"GMAIL_OAUTH_ENABLED":false,"VIDEO_CHAT_ENABLED":false,"SPRINKLR_VOICE_CHANNEL_ENABLED":false,"SELF_SERVE_PARTNER_EXPIRY_DISABLED":false,"SLACK_CHANNEL_ENABLED":true,"OUTLOOK_OAUTH_ENABLED":true},"partnerId":31040,"userId":14099},"__typename":"InitMetadata"}}}`);
    }
    else{
        return res.end(`{"data":{"minifiedInitMetadata":{"sprat":"WG02UkJETDNtU2xNRXlFVDh5bEEy","__typename":"InitMetadata"}}}`);
    }
  }
  else if(value=="bootstrap"){
    return res.end(`{"data":{"bootstrap":{"currentUser":{"id":"14099","authProvider":"email","countryCode":"PK","sprUserId":"14099","clientId":3334,"partnerId":31040,"firstName":"Security_Researcher_Yldrm_2","lastName":null,"fullName":"Security_Researcher_Yldrm_2 ","emailAddress":"yldrmhacker@proton.me","corporateEmailAddress":"yldrmhacker@proton.me","emailDigestSubscription":false,"jobRole":null,"jobRoleDisplayName":null,"department":null,"departmentDisplayName":null,"firstLoginTime":1670353486522,"lastLoginTime":1670353486541,"locale":"en_US","loginType":"PASSWORD","premiumSubscription":false,"displayImageUrl":"https://storage.googleapis.com/spr-qa5-cdata/SELFSERVE/31040/7f904e24-fc4f-49b5-bbcd-856720b15bef-1462150291/canvas.png","role":"OWNER","signatureConfiguration":{"signatureConfigurations":[{"signatureDetails":[{"richTextSignature":"","signature":"","__typename":"SignatureDetails"}],"signatureLevel":"GLOBAL","__typename":"SignatureConfiguration"}],"__typename":"UserSignatureConfiguration"},"brand":null,"sprUser":{"id":"14099","userId":14099,"availabilityStatus":"Available","firstName":"Security_Researcher_Yldrm_2","lastName":null,"profileImageUrl":"https://storage.googleapis.com/spr-qa5-cdata/SELFSERVE/31040/7f904e24-fc4f-49b5-bbcd-856720b15bef-1462150291/canvas.png","visibleId":"Security_Researcher_Yldrm_2 ","roleMapping":{"id":"638f914d07131a1a897f0ea2","contextualRoles":[],"globalRoleIds":[],"__typename":"UserRoleMapping"},"locale":"en_US","__typename":"User"},"__typename":"UserDTO"},"currentWorkspace":{"clientName":"Bahria's Team","clientId":3334,"imageUrl":null,"firstName":null,"lastName":null,"createdTime":"2022-12-04 16:06:06","createdTimeEpoch":1670169966000,"id":"638cc56e87b63b67ea5e44a3","industry":null,"additional":{"instagramSupport":"true","conversations.channels.sms.enabled":"true","weChatEnabled":"true","whatsappEnabled":"true","appleBusinessChatEnabled":"true","emailEnabled":"true","viberEnabled":"true"},"workspaceStatus":"PREMIUM_TRIAL","ownerUserForClient":{"id":"14093","profileImageUrl":"https://lh3.googleusercontent.com/a/ALm5wu16bR-txcjLID-UKWbkmVsu7dte4HhZoBoGafx-=s96-c","name":"Yldrm Hacker","emailAddress":"02-131192-044@student.bahria.edu.pk","clientId":3334,"brand":null,"__typename":"User"},"__typename":"ClientDTO"},"partnerWorkspaces":[{"partnerId":31040,"partnerName":"bahria","__typename":"PartnerMinified"}],"__typename":"Bootstrap"}}}`);
  }
  else if(value=="userPermissions"){
    return res.end(`{"data":{"userPermissions":{"INTEGRATIONS_MARKETPLACE":["MANAGE","INSTALL","VIEW"],"FOLDER":["CREATE","EDIT","DELETE"],"PUBLISHING_QUEUE":["ENABLE","VIEW","EDIT"],"MEDIA_ASSET":["VIEW","CREATE","IMAGE_EDITING_CROP","IMAGE_EDITING_ADD_SHAPE","MANAGE_VIEWS","IMAGE_EDITING_ADJUST","EDIT","IMAGE_EDITING_COLLAGE","IMAGE_EDITING_OVERLAY_TEXT","IMAGE_EDITING_OVERLAY_IMAGE"],"CAMPAIGN":["VIEW","CREATE","EDIT","CAMPAIGN_DELETE","DELETE"],"SMART_TRENDS_DASHBOARDS":["VIEW"],"CUSTOM_APPS":["VIEW","CREATE","EDIT"],"ROLES":["VIEW","CREATE","EDIT","DELETE"],"ACCOUNT_GROUP":["MANAGE","VIEW","DELETE"],"BUSINESS_HOURS":["VIEW","CREATE","EDIT","DELETE"],"PUBLISHER_SETTINGS":["VIEW","EDIT"],"APPROVAL_PATH":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"RULE_ENGINE":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"CUSTOM_FIELD":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"EXPLORER_DASHBOARDS":["VIEW","CREATE","DELETE"],"SECURITY_AND_PERSONALISATION_SETTINGS":["VIEW","EDIT"],"PLANNER":["VIEW","MANAGE_VIEWS"],"MESSAGE_INBOX":["VIEW","MANAGE_VIEWS"],"TASK":["CLONE","VIEW","ADMIN","CREATE","EDIT","VIEW_DETAILED","DELETE"],"ENGAGEMENT":["REOPEN_TOPIC","MARK_PRIVATE","LIKE","FAVOURITE","FLAG","APPROVE","ARCHIVE","REPLY","MODERATION_STATUS","RETIRE","HIDE","LOCK","REPOST","BLOCK","REMOVE_RATING","SHARE","DELETE","FOLLOW"],"CLIENT":["VIEW","CREATE","EDIT","DELETE"],"MACRO":["ENABLE","VIEW","CREATE","EDIT","DELETE"],"USER_GROUP":["MANAGE","VIEW"],"USER":["VIEW_SECURITY_SETTINGS","UNLOCK_USER","VIEW","CREATE","ACTIVATE","MANAGE_SIGNATURES","EDIT","DELETE"],"UNIVERSAL_COMPANY":["VIEW","CREATE","EDIT","DELETE"],"ACCOUNT":["VIEW","CREATE","EDIT","SHARE","DEFAULT_MESSAGE_CHARACTER_LIMIT","EDIT_CHANNEL_PROPERTY","DELETE"],"OUTBOUND_MESSAGE":["CREATE_POST","VIEW","APPROVE_REJECT","PUBLISH","EDIT","EDIT_AND_APPROVE","EDIT_SENT_POST","CREATE_DRAFT","DELETE"],"DEEP_INSIGHTS":["VIEW","CREATE","DELETE"],"UNIVERSAL_TAG":["VIEW","CREATE","EDIT","DELETE"],"REPORTING_DASHBOARDS":["VIEW","CREATE","SAVE"],"CONTENT_BRIEF":["CREATE","EDIT"],"LISTENING_SETTINGS":["VIEW","EDIT_GROUP","EDIT_TOPIC","CREATE_TOPIC","CREATE_GROUP"],"EVENT":["CREATE","EDIT"]}}}`);
  }
  else if(value=="connectionDetails"){
    return res.end(`{"data":{"connectionDetails":[]}}`);
  }
  else if(value=="getUserPreference"){
    return res.end(`{"data":{"getUserPreference":[{"preferences":{"lastAccessedProduct":["SELF_SERVE_CARE"]},"id":"USER3334_14093lastAccessedProduct","key":"lastAccessedProduct","scope":"USER","__typename":"UserPreferenceDetail"}]}}`);
  }
  else if(value=="unreadCountByPriority"){
    return res.end(`{"data":{"unreadCountByPriority":{"HIGH":0,"MEDIUM":0}}}`);
  }
  else if(value=="searchCurrentClientTodoTasks"){
    return res.end(`{"data":{"searchCurrentClientTodoTasks":{"hasMore":false,"count":0,"sprTaskDTOs":[],"__typename":"SprTaskDTOWrapper"}}}`);
  }
  else if(value=="sinkPerformanceData"){
    return res.end(`{"data":{"sinkPerformanceData":true}}`);
  }
  else if(value=="getUserInboxNotifications"){
    return res.end(`{"data":{"userInboxNotifications":{"afterCursor":"A_638fa3450000000000000000","beforeCursor":"B_638fa3450000000000000001","results":[],"__typename":"PaginatedSearchResponse_LiveChatNotification"}}}`);
  }
  else if(value=="reportingQuery"){
    return res.end(`{"data":{"reportingQuery":{"responses":[{"projections":{"M_INBOUND_CASE_CASE_COUNT_1":0.0,"M_INBOUND_CASE_CASE_PREDICTED_CSAT_RATING_0":0.0,"M_INBOUND_CASE_CASE_COUNT_1_CHANGE":0.0,"M_INBOUND_CASE_CASE_COUNT_1_PERCENTAGE_CHANGE":0,"M_INBOUND_CASE_CASE_PREDICTED_CSAT_RATING_0_CHANGE":0.0,"M_INBOUND_CASE_CASE_PREDICTED_CSAT_RATING_0_PERCENTAGE_CHANGE":0},"viralProjections":null,"hits":[],"streamFieldResolvedValues":[],"groupDetails":null,"additional":null,"cacheHit":false,"hasMore":null,"count":0,"groupedData":null,"key":"61372e3f3dda091afc0ae479","statusMessage":null,"__typename":"GraphqlResponse"}],"__typename":"GraphqlBatchResponse"}}}`);
  }
  else if(value=="entityFeed" && req.body.variables.entityType=="CUSTOM_FIELD"){
    return res.end(`{"data":{"entityFeed":{"entities":[{"id":"6385955781f8bd3346ddd815","__typename":"CustomField","name":"User Availability Status","fieldName":"spr_user_availability_status","fieldType":"PICKLIST","createdTime":1670169963597,"defaultValue":"Unavailable","description":"Used in conjunction with auto-assignment rules in Customer Care workflows. A user must be \\\"Available\\\" in order to receive automatic assignments.","options":[{"langVsTranslatedFieldValues":null,"label":"Available","value":"Available","additional":null},{"langVsTranslatedFieldValues":null,"label":"Short Break","value":"Short Break","additional":null},{"langVsTranslatedFieldValues":null,"label":"Lunch","value":"Lunch","additional":null},{"langVsTranslatedFieldValues":null,"label":"Training","value":"Training","additional":null},{"langVsTranslatedFieldValues":null,"label":"Offline","value":"Unavailable","additional":null}],"scopeType":"DEFAULT","category":null,"clientId":null,"customFieldControllerById":null,"ownerUserId":null,"label":{"en":"User Availability Status"},"optionType":"GENERAL","optionKey":null,"enabled":true,"assetLevelConfig":[{"assetClasses":["USER"],"facetEnabled":true,"required":false,"contentReplacementEnabled":false,"adhocSearchEnabled":false,"autofillControllingFields":false}],"systemField":true,"additional":null,"globalAsset":true,"assetClassList":["USER"],"assetTypeVsOrder":{"USER":1.0},"assetVsCategory":null,"visibilityCriteria":{"assetVsFilters":null,"layoutConfig":null,"otherFieldControllers":null,"__typename":"VisibilityCriteria"},"governance":{"visibility":{"globallyVisible":true,"__typename":"GovernanceVisibility"},"__typename":"Governance"}}],"hasMore":false,"count":1,"__typename":"GenericEntityResponse_Record"}}}`);
  }
  else if(value=="searchCurrentClientTodoTasks"){
    return res.end(` {"data":{"searchCurrentClientTodoTasks":{"hasMore":false,"count":0,"sprTaskDTOs":[],"__typename":"SprTaskDTOWrapper"}}}`);
  }
  else if(value=="fetchWorkspaceMetadata"){
    return res.end(`{"data":{"fetchWorkspaceMetadata":{"priceConfigId":null,"subscriptionStatus":null,"seatsPurchased":0,"totalUsers":3,"seatsUsed":0,"nextPriceConfigId":null,"gracePeriodStatus":"NONE","startDate":null,"id":"3334_CARE","__typename":"WorkspaceSubscriptionMetadataDTO"}}}`);
  }
  else if(value=="workspaceStatus"){
    return res.end(`{"data":{"bootstrap":{"currentWorkspace":{"workspaceStatus":"PREMIUM_TRIAL","clientId":3334,"id":"638cc56e87b63b67ea5e44a3","__typename":"ClientDTO"},"__typename":"Bootstrap"}}}`);
  }
  
});

module.exports = app;