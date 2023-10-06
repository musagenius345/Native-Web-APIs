# Explanation:

1. **HTML Structure:**
   - There are two nested `<div>` elements: `outer` and `inner`.
   - Both elements have the class `box` and different background colors.
   - The `output` `<div>` will display event information.

2. **CSS Styling:**
   - CSS styles define the appearance of the boxes and the output area.

3. **JavaScript Code (`script.js`):**
   - After the DOM content is loaded, event listeners are attached to the `outerBox` and `innerBox` elements.
   - The `logEventPhase` function logs the event type and event phase to the `outputDiv`.
   - The `addEventListener` method is used to attach event listeners for the **capture phase** (`true` as the third parameter) and the **bubble phase** (no third parameter or `false`).

4. **Event Handling Process:**
   - When clicking on the inner box, the event first goes through the **capture phase** from the root (document) to the `outerBox`.
   - Then, the event enters the **target phase** (`innerBox`), where the click event is handled and information is logged.
   - Finally, during the **bubble phase**, the event bubbles back up from the `innerBox` to the `outerBox`.

5. **Output:**
   - The output area displays the event type (`click`) and the event phase (`1` for capture, `2` for target, and `3` for bubble) for each phase of the event propagation process.
