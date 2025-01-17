import React from "react";

// import {SortableTree} from './SortableTree';
import SortableTree from "./SortableTree";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: "0 auto",
      marginTop: "10%"
    }}
  >
    {children}
  </div>
);

/* export const BasicSetup = () => (
  <Wrapper>
    <SortableTree />
  </Wrapper>
); */

export const AllFeatures = () => (
  <Wrapper>
    <SortableTree collapsible indicator removable />
  </Wrapper>
);

/* export const DropIndicator = () => (
  <Wrapper>
    <SortableTree indicator />
  </Wrapper>
);

export const Collapsible = () => (
  <Wrapper>
    <SortableTree collapsible />
  </Wrapper>
);

export const RemovableItems = () => (
  <Wrapper>
    <SortableTree removable />
  </Wrapper>
); */
