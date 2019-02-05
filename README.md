# Exploring ths CSS Paint API (aka "CSS Custom Paint" or "Houdini's paint worklet").

https://pkaneshige.github.io/css-paint/

The CSS Paint API is the first piece of the larger Houdini Project made available to developers for testing and implementation. The Houdini Project gives developers direct access to the browser's CSS engine, allowing for custom CSS features to be created within the browser's native rendering pipeline. With access to the browser CSS engine, developers should be able to implement new CSS features without having to wait for browser updates and potentially develop unique CSS features of their own.

The Houdini Project is a library of the following APIs for interacting with the browser's CSS engine:

- `Layout API`
- `Paint API`
- `Parser API`
- `Properties & Values API`
- `AnimationWorklet`
- `Typed OM`
- `Font Metrics API`

To see whether a certain Houdini API is ready, you can always check http://ishoudinireadyyet.com

While most of these APIs are still being worked on, the Paint API is available to use now.

This demonstration uses the Paint API to create a display a couple checkered backgrounds and an image that would easily be used as a placeholder in wireframes or early stage development.

## Why use the Paint API?

Using JavaScript to overwrite CSS properties usually means multiple trips through the cascade, layout, paint, and composite processes. With Houdini's access to the browser engine, developers can write code the browser understands and apply it straight to the beginning of this cycle, resulting in faster parse times for complex styles.
