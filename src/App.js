import "./styles.css";
import SortableTree from "./components/SortableTree";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <SortableTree collapsible indicator removable />
      </Wrapper>
    </div>
  );
}
