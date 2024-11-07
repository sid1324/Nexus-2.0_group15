const App = `import {Pagination} from "@nexus-ds/react";

export default function App() {
  return (
    <Pagination isDisabled total={10} initialPage={1} />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
