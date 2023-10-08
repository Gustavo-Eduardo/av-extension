function createActivityItem(titleHeader, overview) {
    const activityItem = document.createElement("div")
    const header = document.createElement("h2")
    header.innerHTML = titleHeader.innerHTML
    activityItem.appendChild(header)
    activityItem.appendChild(overview.cloneNode(true))
    return activityItem.innerHTML
}

function createSaveMethod(overview) {
  function saveActivity() {
    chrome.storage.session.set({ [`overview-${Math.random()}`]: overview });
    this.disabled = true;
  }
  return saveActivity;
}

function addSaveButton() {
  const overview = document.querySelector(".student-assignment-overview");
  const titleHeader = document.querySelector(".title-content > .title")
  if (overview && titleHeader) {
    const liButton = document.createElement("button");
    liButton.innerHTML = "Guardar actividad";
    liButton.saveActivity = createSaveMethod(createActivityItem(titleHeader, overview));
    liButton.addEventListener("click", liButton.saveActivity);
    overview.appendChild(liButton);
  }
}

function buttonChange() {}

addSaveButton();
