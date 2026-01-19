💡 **Interactive Hanging Bulb**

An atmospheric web experience featuring a swinging, interactive light bulb built with Vanilla JavaScript and CSS3. This project demonstrates DOM manipulation, CSS physics animations, and dynamic state management.

🌟 **Features**
Realistic Physics: The bulb uses transform-origin and keyframe animations to simulate a natural swinging motion.
Dynamic Lighting: When toggled, the bulb uses layered drop-shadow filters to create a realistic glow that illuminates the "room."
Smooth Transitions: Background color shifts and image swapping happen seamlessly through JavaScript event listeners.
Optimized Assets: Uses mix-blend-mode: lighten to ensure the bulb assets blend perfectly with the dark UI without "box" edges.

🛠️ **Technical Stack**
**HTML5:** Semantic structure for the hanging assembly.
**CSS3:** Custom animations, filter effects, and flexbox layout.
**JavaScript (ES6):** DOM selection, state toggling, and class manipulation.

🚀 **How It Works (The Logic)**
The project relies on the Document Object Model (DOM) to bridge the gap between static HTML and user interaction.

**Selection:** The script identifies the bulb element using document.getElementById.
**State Check:** Upon a click event, the function checks the current src of the image using the .includes() method.
**Manipulation:** If the bulb is OFF, the script updates the src to the "on" image, adds a .bulb-on CSS class to trigger the glow, and lightens the body background.
If the bulb is ON, it reverses the process to return to a dark, static state.

**📁 File Structure**
Plaintext
├── Pic/
│   ├── Off-edited.png    # The bulb in its off state
│   └── on-edited.png     # The bulb in its glowing on state
├── index.html            # Main structure
├── style.css             # Animations and styles
└── script.js            # DOM logic


**🎨 Creative Details**
**The Rope:** Designed with a negative margin-top to ensure a seamless connection between the CSS-drawn rope and the image asset.
**The Glow:** Utilizes multiple drop-shadow layers to mimic the way light diffuses in a dark environment.
