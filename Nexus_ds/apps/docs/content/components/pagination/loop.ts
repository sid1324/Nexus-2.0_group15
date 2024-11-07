const App = `import {Pagination} from "@nexus-ds/react";

export default function App() {
  return (
    <Pagination loop showControls color="success" total={5} initialPage={1} />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
