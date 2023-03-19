main();

function main() {
  const canvas = document.getElementById("canvas-id");
  const gl = canvas.getContext("webgl");

  if (!gl) {
    console.log("Can't found WebGL");
    return;
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
