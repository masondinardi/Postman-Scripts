// Saves access token in authentication, place in tests tab
var jsonData = pm.response.json();
pm.environment.set("bearer_token", jsonData.access_token);