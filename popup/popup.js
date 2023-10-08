window.onload = function () {
  chrome.storage.session.get().then(function (items) {
    const activitiesDiv = document.getElementById("actividades-list");
    for (let key in items) {
        const activityDiv = document.createElement("div");
        activityDiv.innerHTML = items[key];
        console.log(key, items);
      activitiesDiv.appendChild(activityDiv);
    }
  });
};
