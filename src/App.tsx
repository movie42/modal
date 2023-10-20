import { ModalProvider } from "./Modal";

import Route from "./Route";

function App() {
  return (
    <ModalProvider>
      <Route />
    </ModalProvider>
  );
}

export default App;
