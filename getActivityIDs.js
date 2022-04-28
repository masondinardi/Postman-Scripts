// get all activity type IDs and save them in a global variable
var jsonData = pm.response.json();
const activityTypeIDs = []

for (const element of jsonData.result) {
    activityTypeIDs.push(element.id)
}

pm.environment.set("activityTypeIDs", activityTypeIDs);