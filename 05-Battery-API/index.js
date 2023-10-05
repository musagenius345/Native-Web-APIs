const currentCharge = document.querySelector('.currentCharge')
const batteryContainer = document.querySelector('.battery')
navigator.getBattery().then((battery) => {

  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });

  function updateChargeInfo() {
    if (battery.charging) {
      console.log('Charging: ', battery.charging);
      batteryContainer.dataset.batteryStatus = 'true'
    } else {
      console.log('Charging: ', battery.charging);
      batteryContainer.dataset.batteryStatus = 'false'
    }
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });

  function updateLevelInfo() {

    if (battery.level === 1) {
      batteryContainer.dataset.batteryStatus = 'false'
      currentCharge.textContent = `Approximately FULL`

    } else {
      currentCharge.textContent = `${battery.level * 100}%`
      // console.log(`Battery level: ${}%`);
    }
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });

  function updateChargingInfo() {
    // console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });

  function updateDischargingInfo() {
    // console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
}).catch( err => {
  currentCharge.textContent = 'Battery API not supported'
})