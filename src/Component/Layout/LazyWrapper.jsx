import { Suspense } from "react";
import LoadingSpinner from "../loaders/LoadingSpinner";

const LazyWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export default LazyWrapper;