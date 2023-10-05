const pasteInput = document.querySelector('.inputPasteBin');
const clipboard = navigator.clipboard
const popNotification = document.querySelector('.copyPopup');

/**
 * Check if the current environment supports the popover feature.
 * @returns {boolean} True if the popover feature is supported, false otherwise.
 */
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

/**
 * Copy the content of the specified element to the clipboard.
 * @param {Event} e - The event object.
 */
function copyCode(e) {
  const codeToCopy = document.querySelector('.codeToCopy');
  try {
    clipboard.writeText(codeToCopy.textContent).then(() => {

    }).then(showCopyPopup()).catch(async (err) => {
      popNotification.style.backgroundColor = 'red'
      popNotification.style.color = 'white'
      popNotification.textContent = `${err.message} WebView does not support the async Clipboard API`
      showCopyPopup()

    })

  } catch (err) {
    popNotification.style.backgroundColor = 'red'
    popNotification.style.color = 'white'
    popNotification.textContent = `${err.message}`
  }
}

/**
 * Show a notification popup indicating successful copy operation.
 */
function showCopyPopup() {

  if (supportsPopover()) {
    popNotification.showPopover();
    setTimeout(() => {
      popNotification.hidePopover();
    }, 5000);
  }
  return
}

/**
 * Paste the content from the clipboard to the specified input element.
 */
async function pasteContent() {
  try {
    const pasteValue = await clipboard.readText()
    pasteInput.value= pasteValue
    popNotification.textContent = `Successfully pasted from clipboard!`
    showCopyPopup()


  } catch (err) {
    popNotification.style.backgroundColor = 'red'
    popNotification.style.color = 'white'
    popNotification.textContent = `${err.message}`
    showCopyPopup()
  }
}

/**
 * Check the permission status for a specific feature.
 * @param {object} feature - The feature object for which the permission status is checked.
 */
async function checkPermission(feature) {
  const queryOpts = feature;
  const permissionStatus = await navigator.permissions.query(queryOpts);
  // Will be 'granted', 'denied' or 'prompt':
  const status = permissionStatus.state
  return status
}

// console.log(checkPermission({ name: 'clipboard-read' }));