import { React } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
// it would be nice to have some backend to see how you work with it
// Also some state management system is missing. I would suggest to check mobx and store there user session for instance.
// You can create a profile page with possibility to edit user data.
// Also, it seems .gitignore file is missing, it would be nice to have it and put there all folders and filenames that should not been added to git (idea, vscode, etc...)
