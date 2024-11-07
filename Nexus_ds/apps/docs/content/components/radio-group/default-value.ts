const App = `import {RadioGroup, Radio} from "@nexus-ds/react";

export default function App() {
  return (
    <RadioGroup
      label="Select your favorite city"
      color="secondary"
      defaultValue="london"
    >
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};