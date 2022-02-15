import { createTheme } from "@material-ui/core/styles";

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  var theme = createTheme({
    palette: {
      type: "dark"
    }
  });
} else {
  var theme = createTheme({
    palette: {
      type: "light"
    }
  });
}

export default theme;
