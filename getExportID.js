// Saves exportID, place in tests tab
var jsonData = pm.response.json();
pm.environment.set("exportId", jsonData.result[0].exportId);