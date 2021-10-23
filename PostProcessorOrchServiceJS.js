function processOutput(){
	logger.debug("######## In JavaScript PostProcessor ########");
	var accountDS = result.findDataset("account");
	var sizeOfRecords = accountDS.getRecords().length;
	var tempDataSet = new com.konylabs.middleware.dataobject.Dataset("AllAccounts");
	for (i = 0; i < sizeOfRecords; i++) { 
		var datasetRecord = accountDS.getRecord(i);
		var tempRecord = new com.konylabs.middleware.dataobject.Record();
      	logger.debug("######## Adding Account Data to a collection " + i);
		
		var accIdParam = new com.konylabs.middleware.dataobject.Param();
		accIdParam.setName("AccountID");
		accIdParam.setValue(datasetRecord.getParam('accountid').getValue());
		tempRecord.setParam(accIdParam);

		var accNameParam = new com.konylabs.middleware.dataobject.Param();
		accNameParam.setName("AccountName");
		accNameParam.setValue(datasetRecord.getParam("accountname").getValue());
		tempRecord.setParam(accNameParam);
		
		var accBalParam = new com.konylabs.middleware.dataobject.Param();
		accBalParam.setName("AccountBalance");
		accBalParam.setValue(datasetRecord.getParam("balance").getValue());
		tempRecord.setParam(accBalParam);
		
		var accTypeParam = new com.konylabs.middleware.dataobject.Param()
		accTypeParam.setName("AccountType");
		accTypeParam.setValue("SA");
		tempRecord.setParam(accTypeParam);
		
		tempDataSet.setRecord(tempRecord);
	}

	var loanDS = result.findDataset("loan");
	var sizeOfRecords = loanDS.getRecords().length;
	for (i = 0; i < sizeOfRecords; i++) { 
		var datasetRecord = loanDS.getRecord(i);
		var tempRecord = new com.konylabs.middleware.dataobject.Record();
      	logger.debug("######## Adding Loan Data to a collection " + i);
		
		var accIdParam = new com.konylabs.middleware.dataobject.Param();
		accIdParam.setName("AccountID");
		accIdParam.setValue(datasetRecord.getParam('loanid').getValue());
		tempRecord.setParam(accIdParam);

		var accNameParam = new com.konylabs.middleware.dataobject.Param();
		accNameParam.setName("AccountName");
		accNameParam.setValue("Loan Account");
		tempRecord.setParam(accNameParam);
		
		var accBalParam = new com.konylabs.middleware.dataobject.Param();
		accBalParam.setName("AccountBalance");
		accBalParam.setValue(datasetRecord.getParam("amount").getValue());
		tempRecord.setParam(accBalParam);
		
		var accTypeParam = new com.konylabs.middleware.dataobject.Param()
		accTypeParam.setName("AccountType");
		accTypeParam.setValue("LA");
		tempRecord.setParam(accTypeParam);
		
		tempDataSet.setRecord(tempRecord);
	}
	result.setDataSet(tempDataSet);
}
processOutput();