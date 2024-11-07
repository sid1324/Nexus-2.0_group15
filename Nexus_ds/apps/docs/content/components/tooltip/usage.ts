const App = `import {Tooltip, Button} from "@nexus-ds/react";

export default function App() {
  return (
    <Tooltip content="I am a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
